import {
	ColorTokens,
	FontFamilyTokens,
	FontSizeTokens,
	TypographyTypeTokens,
} from '@blue-learn/schema';
import {
	fontFamilyTokensMap,
	fontSizeTokensMap,
	typographyTypeTokensMap,
} from '../light-mobile/typography';

describe('light-mobile fontSizeTokensMap', () => {
	it('has an entry for every FontSizeTokens member', () => {
		// Typography.base.tsx computes `fontSizeMapping[fontSize] * 1.45` for
		// the default line height. A missing token makes that NaN, and a NaN
		// lineHeight collapses the text block's height.
		for (const token of Object.values(FontSizeTokens)) {
			expect(typeof fontSizeTokensMap[token]).toBe(
				'number',
			);
		}
	});

	it('pins the exact px value of every font size step', () => {
		expect(fontSizeTokensMap).toEqual({
			[FontSizeTokens.XXS]: 10,
			[FontSizeTokens.XS]: 12,
			[FontSizeTokens.SM]: 14,
			[FontSizeTokens.MD]: 16,
			[FontSizeTokens.LG]: 18,
			[FontSizeTokens.XL]: 20,
			[FontSizeTokens.XXL]: 24,
			[FontSizeTokens.XXXL]: 28,
			[FontSizeTokens.XXXXL]: 32,
			[FontSizeTokens.XXXXXL]: 40,
			[FontSizeTokens.XXXXXXL]: 48,
			[FontSizeTokens.XXXXXXXL]: 60,
		});
	});

	it('is strictly increasing across the whole type scale', () => {
		const order = [
			FontSizeTokens.XXS,
			FontSizeTokens.XS,
			FontSizeTokens.SM,
			FontSizeTokens.MD,
			FontSizeTokens.LG,
			FontSizeTokens.XL,
			FontSizeTokens.XXL,
			FontSizeTokens.XXXL,
			FontSizeTokens.XXXXL,
			FontSizeTokens.XXXXXL,
			FontSizeTokens.XXXXXXL,
			FontSizeTokens.XXXXXXXL,
		].map((t) => fontSizeTokensMap[t]);
		for (let i = 1; i < order.length; i++) {
			expect(order[i]).toBeGreaterThan(order[i - 1]);
		}
	});
});

describe('light-mobile fontFamilyTokensMap', () => {
	it('maps every family token to the literal font file name', () => {
		// react-native resolves `fontFamily` against the names of the font
		// files bundled in fonts/. If a value stops matching the shipped
		// file, the platform silently falls back to the system face - the
		// text still renders, so nothing fails, it just looks wrong.
		expect(fontFamilyTokensMap).toEqual({
			[FontFamilyTokens.InterRegular]: 'Inter-Regular',
			[FontFamilyTokens.InterMedium]: 'Inter-Medium',
			[FontFamilyTokens.InterSemiBold]:
				'Inter-SemiBold',
			[FontFamilyTokens.InterBold]: 'Inter-Bold',
		});
	});

	it('is an identity map (key === value) for every family', () => {
		// This map exists to give the theme a seam for per-theme font
		// swapping, but today it is an identity mapping. Pinning that means a
		// half-finished rename (key changed, value not) shows up here.
		for (const [key, value] of Object.entries(
			fontFamilyTokensMap,
		)) {
			expect(value).toBe(key);
		}
	});
});

describe('light-mobile typographyTypeTokensMap', () => {
	it('has an entry for every TypographyTypeTokens member', () => {
		// Typography.tsx spreads `theme.typography[type]` into the base
		// component. A missing variant spreads `undefined`, so the text loses
		// its colour, size and family all at once and renders as unstyled
		// 14px black.
		for (const token of Object.values(
			TypographyTypeTokens,
		)) {
			expect(
				typographyTypeTokensMap[token],
			).toBeDefined();
		}
	});

	it('every variant supplies colour, size and family', () => {
		// All three are needed: Typography.base.tsx looks each one up in a
		// theme map and a missing key yields `undefined` in the style object.
		for (const [token, value] of Object.entries(
			typographyTypeTokensMap,
		)) {
			expect({
				token,
				color: value.color,
				fontSize: value.fontSize,
				fontFamily: value.fontFamily,
			}).toEqual({
				token,
				color: expect.any(String),
				fontSize: expect.any(String),
				fontFamily: expect.any(String),
			});
		}
	});

	it('every referenced colour/size/family token actually resolves in its own map', () => {
		// The typography map stores *token names*, not values. A typo'd token
		// name is still a valid string, so it typechecks and then resolves to
		// `undefined` at render time.
		const colors = new Set(Object.values(ColorTokens));
		for (const [token, value] of Object.entries(
			typographyTypeTokensMap,
		)) {
			expect({
				token,
				colorOk: colors.has(value.color!),
				sizeOk:
					fontSizeTokensMap[value.fontSize!] !==
					undefined,
				familyOk:
					fontFamilyTokensMap[value.fontFamily!] !==
					undefined,
			}).toEqual({
				token,
				colorOk: true,
				sizeOk: true,
				familyOk: true,
			});
		}
	});

	it('the three families map to distinct weights: BODY=Regular, SUBHEADING=Medium, HEADING=SemiBold', () => {
		// This is the core promise of the scale. If two families collapse to
		// the same weight, headings stop being visually distinguishable from
		// body copy everywhere in the product at once.
		expect(
			typographyTypeTokensMap[
				TypographyTypeTokens.BODY_MD
			].fontFamily,
		).toBe(FontFamilyTokens.InterRegular);
		expect(
			typographyTypeTokensMap[
				TypographyTypeTokens.SUBHEADING_MD
			].fontFamily,
		).toBe(FontFamilyTokens.InterMedium);
		expect(
			typographyTypeTokensMap[
				TypographyTypeTokens.HEADING_MD
			].fontFamily,
		).toBe(FontFamilyTokens.InterSemiBold);
	});

	it('the SECONDARY and PLACEHOLDER suffixes only change the colour, never the size or weight', () => {
		// BODY_MD / BODY_MD_SECONDARY / BODY_MD_PLACEHOLDER are the same type
		// ramp at three emphasis levels. If a suffix started changing the
		// size too, swapping a label to its de-emphasised variant would
		// reflow the layout instead of just dimming it.
		const base =
			typographyTypeTokensMap[
				TypographyTypeTokens.BODY_MD
			];
		const secondary =
			typographyTypeTokensMap[
				TypographyTypeTokens.BODY_MD_SECONDARY
			];
		const placeholder =
			typographyTypeTokensMap[
				TypographyTypeTokens.BODY_MD_PLACEHOLDER
			];

		for (const variant of [secondary, placeholder]) {
			expect(variant.fontSize).toBe(base.fontSize);
			expect(variant.fontFamily).toBe(base.fontFamily);
		}
		expect(base.color).toBe(ColorTokens.Grey_800);
		expect(secondary.color).toBe(ColorTokens.Grey_700);
		expect(placeholder.color).toBe(
			ColorTokens.Grey_500,
		);
	});

	it('emphasis levels get progressively lighter (Grey_800 > Grey_700 > Grey_500)', () => {
		// The de-emphasis ramp only works if each step is lighter than the
		// last. Pinning the ordering catches a swap that would make
		// "placeholder" text darker than primary text.
		const greyRank = (c?: ColorTokens) =>
			Number(String(c).replace('grey-', ''));
		expect(
			greyRank(
				typographyTypeTokensMap[
					TypographyTypeTokens.HEADING_LG
				].color,
			),
		).toBeGreaterThan(
			greyRank(
				typographyTypeTokensMap[
					TypographyTypeTokens.HEADING_LG_SECONDARY
				].color,
			),
		);
		expect(
			greyRank(
				typographyTypeTokensMap[
					TypographyTypeTokens.HEADING_LG_SECONDARY
				].color,
			),
		).toBeGreaterThan(
			greyRank(
				typographyTypeTokensMap[
					TypographyTypeTokens.HEADING_LG_PLACEHOLDER
				].color,
			),
		);
	});

	it('the size suffix maps to the same font size across BODY/HEADING/SUBHEADING', () => {
		// A `_LG` heading and a `_LG` body must be the same optical size,
		// only differing in weight. Mixed-up suffixes are hard to spot by eye
		// but make mixed rows of text sit at different baselines.
		const suffixes = [
			['2XS', FontSizeTokens.XXS],
			['XS', FontSizeTokens.XS],
			['SM', FontSizeTokens.SM],
			['MD', FontSizeTokens.MD],
			['LG', FontSizeTokens.LG],
			['XL', FontSizeTokens.XL],
			['2XL', FontSizeTokens.XXL],
		] as const;

		for (const [suffix, expected] of suffixes) {
			for (const family of [
				'BODY',
				'HEADING',
				'SUBHEADING',
			]) {
				const key = `${family}_${suffix}` as TypographyTypeTokens;
				expect({
					key,
					fontSize:
						typographyTypeTokensMap[key].fontSize,
				}).toEqual({ key, fontSize: expected });
			}
		}
	});
});
