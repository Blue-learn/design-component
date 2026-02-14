import {
	ColorTokens,
	GradientColorTokens,
} from '@blue-learn/schema';
import {
	colorTokensMap,
	gradientColorTokensMap,
} from '../colors';

describe('colorTokensMap', () => {
	it('maps every ColorTokens member to a value (no missing theme entries)', () => {
		// Button.base.tsx, Typography.base.tsx etc. do `theme.colors[token]`
		// with no fallback - a missing entry silently renders `undefined`
		// as a color, which React Native / RNW will drop without warning.
		for (const token of Object.values(ColorTokens)) {
			expect(colorTokensMap[token]).toBeDefined();
		}
	});

	it('maps every token to a valid hex color or the literal "transparent"', () => {
		const hex = /^#([0-9a-fA-F]{3,8})$/;
		for (const [token, value] of Object.entries(
			colorTokensMap,
		)) {
			const isValid =
				value === 'transparent' || hex.test(value as string);
			expect({ token, value, isValid }).toEqual({
				token,
				value,
				isValid: true,
			});
		}
	});

	it('does not contain duplicate hex values for visually distinct semantic tokens', () => {
		// Success/Error/Warning should never accidentally resolve to the
		// same hex - that would make them indistinguishable to users.
		const semantics = [
			ColorTokens.Success_100,
			ColorTokens.Error_100,
			ColorTokens.Warning_100,
		];
		const resolved = semantics.map((t) => colorTokensMap[t]);
		expect(new Set(resolved).size).toBe(resolved.length);
	});
});

describe('gradientColorTokensMap', () => {
	it('maps every GradientColorTokens member to at least two stops', () => {
		for (const token of Object.values(GradientColorTokens)) {
			const stops = gradientColorTokensMap[token];
			expect(Array.isArray(stops)).toBe(true);
			expect(stops.length).toBeGreaterThanOrEqual(2);
		}
	});
});
