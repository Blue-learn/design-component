import {
	EllipsizeModeTokens,
	FontDecorationToken,
	FontFamilyTokens,
	FontTransformToken,
	TextAlignTokens,
	TypographyTypeTokens,
} from '../typography';

describe('FontDecorationToken', () => {
	it('maps to the literal CSS text-decoration-line keywords', () => {
		// Typography.base.tsx assigns `textDecorationLine` straight into the
		// style object. An unrecognised string is dropped by RN/RNW, so a
		// struck-through price would silently render as plain text.
		expect(
			Object.values(FontDecorationToken).sort(),
		).toEqual(['line-through', 'none', 'underline']);
	});

	it('lineThrough is kebab-case, not camelCase', () => {
		// 'lineThrough' is invalid CSS and is the obvious typo here.
		expect(FontDecorationToken.lineThrough).toBe(
			'line-through',
		);
	});

	it('none is the default Typography.base.tsx falls back to', () => {
		expect(FontDecorationToken.none).toBe('none');
	});
});

describe('FontTransformToken', () => {
	it('maps to the literal CSS text-transform keywords', () => {
		expect(
			Object.values(FontTransformToken).sort(),
		).toEqual([
			'capitalize',
			'lowercase',
			'none',
			'uppercase',
		]);
	});

	it('includes capitalize, which UserCard applies to every user name', () => {
		// component/src/userCard/UserCard.tsx hardcodes
		// `textTransform={FontTransformToken.capitalize}`, so this member is
		// load-bearing inside the package itself.
		expect(FontTransformToken.capitalize).toBe(
			'capitalize',
		);
	});
});

describe('TextAlignTokens', () => {
	it('maps to the literal CSS text-align keywords', () => {
		expect(Object.values(TextAlignTokens).sort()).toEqual(
			['auto', 'center', 'justify', 'left', 'right'],
		);
	});

	it('auto is the default and is a real react-native value', () => {
		// Typography.base.tsx defaults textAlign to TextAlignTokens.auto.
		// 'auto' is RN-specific (it means "follow the writing direction"),
		// which is why the enum cannot simply mirror the web keywords.
		expect(TextAlignTokens.auto).toBe('auto');
	});
});

describe('EllipsizeModeTokens', () => {
	it('maps to the four react-native ellipsizeMode values', () => {
		// Passed through to RN's <Text ellipsizeMode>. Only these four are
		// recognised; anything else falls back to 'tail' with no warning.
		expect(
			Object.values(EllipsizeModeTokens).sort(),
		).toEqual(['clip', 'head', 'middle', 'tail']);
	});
});

describe('FontFamilyTokens', () => {
	const values = Object.values(FontFamilyTokens);

	it('maps each weight to the exact Inter font file name', () => {
		// These strings have to match the font files bundled under fonts/ and
		// registered with the native platform. A mismatch does not error - the
		// platform quietly substitutes the system face, so the app just stops
		// looking like itself.
		expect(values.sort()).toEqual([
			'Inter-Bold',
			'Inter-Medium',
			'Inter-Regular',
			'Inter-SemiBold',
		]);
	});

	it('has no duplicate values', () => {
		// A duplicate would collapse two weights, e.g. rendering semibold
		// headings at regular weight.
		expect(new Set(values).size).toBe(values.length);
	});
});

describe('TypographyTypeTokens', () => {
	const values = Object.values(TypographyTypeTokens);

	it('has no duplicate values', () => {
		// ~60 hand-written members, each a key into the theme's typography
		// map. A duplicate silently drops one variant's theme entry.
		expect(new Set(values).size).toBe(values.length);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(
			TypographyTypeTokens,
		)) {
			expect(
				TypographyTypeTokens[
					key as keyof typeof TypographyTypeTokens
				],
			).toBe(key);
		}
	});

	it('provides the full size ramp for each of BODY/HEADING/SUBHEADING', () => {
		// The scale is only usable if it is complete - a consumer reaching for
		// SUBHEADING_XL and finding it missing has no fallback that keeps both
		// the weight and the size.
		for (const family of [
			'BODY',
			'HEADING',
			'SUBHEADING',
		]) {
			for (const size of [
				'2XS',
				'XS',
				'SM',
				'MD',
				'LG',
				'XL',
				'2XL',
			]) {
				expect(values).toContain(
					`${family}_${size}`,
				);
			}
		}
	});

	it('provides SECONDARY and PLACEHOLDER emphasis variants for every size in every family', () => {
		// Same completeness argument, for the de-emphasis ramp. A missing
		// variant forces call sites to fall back to the primary colour, which
		// flattens the visual hierarchy.
		for (const family of [
			'BODY',
			'HEADING',
			'SUBHEADING',
		]) {
			for (const size of [
				'2XS',
				'XS',
				'SM',
				'MD',
				'LG',
				'XL',
				'2XL',
			]) {
				for (const emphasis of [
					'SECONDARY',
					'PLACEHOLDER',
				]) {
					expect(values).toContain(
						`${family}_${size}_${emphasis}`,
					);
				}
			}
		}
	});

	it('keeps the three unsuffixed legacy aliases', () => {
		// DEFAULT/HEADING/SUBHEADING predate the sized ramp. DEFAULT in
		// particular is Typography.tsx's default `type`, so every <Typography>
		// without an explicit type depends on it.
		expect(values).toEqual(
			expect.arrayContaining([
				'DEFAULT',
				'HEADING',
				'SUBHEADING',
			]),
		);
	});

	it('exposes 3 + (3 families x 7 sizes x 3 emphases) = 66 variants', () => {
		// An exact count catches both a silently dropped variant and a
		// half-finished family addition. The arithmetic is spelled out so the
		// number is checkable rather than magic.
		expect(values.length).toBe(3 + 3 * 7 * 3);
	});
});
