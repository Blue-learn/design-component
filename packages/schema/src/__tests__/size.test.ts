import { SizeTypeTokens } from '../size';

describe('SizeTypeTokens', () => {
	const values = Object.values(SizeTypeTokens);

	it('exposes the full NONE..XXXXXXL spacing scale', () => {
		// This is the single most widely used enum in the package: it backs
		// every padding, margin and gap, plus the ProgressIndicator height
		// and Space component. A member removed here breaks call sites across
		// the whole library at once.
		expect(values.sort()).toEqual([
			'LG',
			'MD',
			'ML',
			'NONE',
			'SM',
			'XL',
			'XS',
			'XXL',
			'XXXL',
			'XXXXL',
			'XXXXXL',
			'XXXXXXL',
		]);
	});

	it('every value equals its own key', () => {
		// Unlike FontSizeTokens / IconSizeTokens, the spacing scale has no
		// lowercase-l quirk on its large tokens - key and value match all the
		// way up. Pin that so the two scales do not accidentally converge.
		for (const key of Object.keys(SizeTypeTokens)) {
			expect(
				SizeTypeTokens[
					key as keyof typeof SizeTypeTokens
				],
			).toBe(key);
		}
	});

	it('has no duplicate values', () => {
		// A duplicate collapses two entries in the theme's space map, so two
		// nominally different spacing steps render identically.
		expect(new Set(values).size).toBe(values.length);
	});

	it('includes NONE, the only way to express zero spacing', () => {
		// ProgessIndicator.base.tsx and IcebreakerCard/InfoCard use
		// SizeTypeTokens.NONE to conditionally collapse a Space to nothing.
		// Without it they would have to omit the element entirely, which
		// changes the flex layout.
		expect(SizeTypeTokens.NONE).toBe('NONE');
	});

	it('includes ML - the odd step between MD and LG', () => {
		// ML (10px) sits between MD (8) and LG (12) and is what every Medium
		// button uses for vertical padding. It is easy to mistake for a typo
		// and delete.
		expect(values).toContain('ML');
	});
});
