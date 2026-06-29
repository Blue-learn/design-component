import { ShadowTypeTokens } from '../shadow';

describe('ShadowTypeTokens', () => {
	const values = Object.values(ShadowTypeTokens);

	it('exposes exactly the five elevation steps E1..E5', () => {
		// These are the keys of the theme's shadowTypeTokensMap. Card.tsx
		// reads `theme.shadow[shadow]` and then optional-chains into it, so a
		// token with no theme entry degrades silently to no shadow at all -
		// the card just looks flat.
		expect(values.sort()).toEqual([
			'E1',
			'E2',
			'E3',
			'E4',
			'E5',
		]);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(ShadowTypeTokens)) {
			expect(
				ShadowTypeTokens[
					key as keyof typeof ShadowTypeTokens
				],
			).toBe(key);
		}
	});

	it('has no duplicate values', () => {
		expect(new Set(values).size).toBe(values.length);
	});

	it('E1 exists - it is the elevation every Elevated button variant uses', () => {
		// The whole Elevated button family in the theme references
		// ShadowTypeTokens.E1. Removing it leaves those variants with a
		// dangling shadow reference and no drop shadow.
		expect(ShadowTypeTokens.E1).toBe('E1');
	});

	it('names are ordered so the numeric suffix is the elevation rank', () => {
		// Consumers pick an elevation by number. The theme's monotonic
		// ordering test relies on this naming convention holding.
		const ranks = values.map((v) =>
			Number(String(v).slice(1)),
		);
		expect(ranks).toEqual([1, 2, 3, 4, 5]);
	});
});
