import { IconSizeTokens } from '@blue-learn/schema';
import { IconSizeTokensMap } from '../light-mobile/icons';

describe('light-mobile IconSizeTokensMap', () => {
	it('has an entry for every IconSizeTokens member', () => {
		// Icon.tsx reads `theme.iconSize[size]` and hands the result to the
		// SVG as both width and height. A missing token renders a 0x0 SVG -
		// an invisible icon with no error.
		for (const token of Object.values(IconSizeTokens)) {
			expect(typeof IconSizeTokensMap[token]).toBe(
				'number',
			);
		}
	});

	it('pins the exact pixel size of every icon step', () => {
		expect(IconSizeTokensMap).toEqual({
			[IconSizeTokens.XXS]: 10,
			[IconSizeTokens.XS]: 12,
			[IconSizeTokens.SM]: 14,
			[IconSizeTokens.MD]: 16,
			[IconSizeTokens.LG]: 18,
			[IconSizeTokens.XL]: 20,
			[IconSizeTokens.XXL]: 24,
			[IconSizeTokens.XXXL]: 28,
			[IconSizeTokens.XXXXL]: 32,
			[IconSizeTokens.XXXXXL]: 40,
			[IconSizeTokens.XXXXXXL]: 48,
			[IconSizeTokens.XXXXXXXL]: 60,
		});
	});

	it('LG is 18px - the Icon component default', () => {
		// Icon.tsx defaults `size` to IconSizeTokens.LG. Every <Icon> in the
		// library that omits a size renders at exactly this value.
		expect(
			IconSizeTokensMap[IconSizeTokens.LG],
		).toBe(18);
	});

	it('is strictly increasing across the whole scale', () => {
		const order = [
			IconSizeTokens.XXS,
			IconSizeTokens.XS,
			IconSizeTokens.SM,
			IconSizeTokens.MD,
			IconSizeTokens.LG,
			IconSizeTokens.XL,
			IconSizeTokens.XXL,
			IconSizeTokens.XXXL,
			IconSizeTokens.XXXXL,
			IconSizeTokens.XXXXXL,
			IconSizeTokens.XXXXXXL,
			IconSizeTokens.XXXXXXXL,
		].map((t) => IconSizeTokensMap[t]);
		for (let i = 1; i < order.length; i++) {
			expect(order[i]).toBeGreaterThan(order[i - 1]);
		}
	});

	it('keys the map by the enum VALUE, including the lowercase-l tokens', () => {
		// IconSizeTokens.XXXXL is the string 'XXXXl' (trailing lowercase L),
		// not 'XXXXL'. Since the map is built with computed keys the two stay
		// in sync automatically - but anyone hand-writing a lookup with the
		// obvious 'XXXXL' string gets `undefined`. Pin the real key so that
		// hazard is documented and any renaming of the enum value is caught.
		expect(
			Object.keys(IconSizeTokensMap),
		).toContain('XXXXl');
		expect(
			Object.keys(IconSizeTokensMap),
		).not.toContain('XXXXL');
	});
});
