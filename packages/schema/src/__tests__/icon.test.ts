import {
	IconAlignmentTokens,
	IconSizeTokens,
	IconTokens,
} from '../icon';

describe('IconTokens', () => {
	const values = Object.values(IconTokens);

	it('has no duplicate runtime values', () => {
		// IconTokens values are the keys of `iconTokensMap` in
		// component/src/icon/IconRegistry.ts. Two members sharing a value
		// means the second registry entry overwrites the first, so one icon
		// name silently renders the wrong glyph.
		expect(new Set(values).size).toBe(values.length);
	});

	it('exposes a large, stable icon set', () => {
		// The registry is hand-maintained. This is a floor, not an exact
		// count: it catches a bulk deletion (e.g. a bad merge dropping the
		// tail of the enum) without failing every time an icon is added.
		expect(values.length).toBeGreaterThanOrEqual(140);
	});

	it('uses lowercase kebab-case values, apart from four known legacy exceptions', () => {
		// The naming convention matters because product code frequently
		// passes icon names as plain strings from a CMS/API payload
		// (IconProps.name is typed `string`, not IconTokens). A new icon that
		// breaks the convention is one that content editors will get wrong.
		const kebab = /^[a-z0-9]+(-[a-z0-9]+)*$/;
		const legacy = new Set([
			// These predate the convention and are referenced as-is by
			// existing product code, so they cannot be renamed without a
			// breaking change.
			IconTokens.EmptyCircle,
			IconTokens.PositiveVote,
		]);
		const offenders = values.filter(
			(v) => !legacy.has(v) && !kebab.test(String(v)),
		);
		expect(offenders).toEqual([]);
	});

	it('keeps the icons referenced directly by library components', () => {
		// Grid renders IconTokens.Check for its selected state, UserCard
		// renders LocationPin, InfoCard renders Cross, IcebreakerCard renders
		// Chat. Removing any of these breaks a component in this package, not
		// just a consumer.
		expect(values).toEqual(
			expect.arrayContaining([
				IconTokens.Check,
				IconTokens.Cross,
				IconTokens.Chat,
				IconTokens.LocationPin,
			]),
		);
	});
});

describe('IconSizeTokens', () => {
	const values = Object.values(IconSizeTokens);

	it('has no duplicate runtime values', () => {
		// Duplicates would collapse two entries in the theme's iconSize map.
		expect(new Set(values).size).toBe(values.length);
	});

	it('pins the trailing-lowercase-l quirk on the four largest tokens', () => {
		// XXXXL..XXXXXXXL deliberately end in a lowercase 'l' rather than 'L'
		// (the same quirk FontSizeTokens has). Anyone hand-writing
		// `theme.iconSize['XXXXL']` gets `undefined` and an invisible icon.
		// "Fixing" the casing is a breaking change for any consumer that has
		// already worked around it, so pin the current values.
		expect(IconSizeTokens.XXXXL).toBe('XXXXl');
		expect(IconSizeTokens.XXXXXL).toBe('XXXXXl');
		expect(IconSizeTokens.XXXXXXL).toBe('XXXXXXl');
		expect(IconSizeTokens.XXXXXXXL).toBe('XXXXXXXl');
	});

	it('the small-to-XXXL tokens are plain uppercase', () => {
		// The quirk above is confined to the four largest sizes; the rest
		// match their key exactly.
		for (const key of [
			'XXS',
			'XS',
			'SM',
			'MD',
			'LG',
			'XL',
			'XXL',
			'XXXL',
		] as const) {
			expect(IconSizeTokens[key]).toBe(key);
		}
	});

	it('covers twelve size steps', () => {
		expect(values.length).toBe(12);
	});
});

describe('IconAlignmentTokens', () => {
	it('exposes exactly left/center/right', () => {
		// IconProps.align is passed through to flexbox alignment; these are
		// the only three values the layout code understands.
		expect(
			Object.values(IconAlignmentTokens).sort(),
		).toEqual(['center', 'left', 'right']);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(
			IconAlignmentTokens,
		)) {
			expect(
				IconAlignmentTokens[
					key as keyof typeof IconAlignmentTokens
				],
			).toBe(key);
		}
	});
});
