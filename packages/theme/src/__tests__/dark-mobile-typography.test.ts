import {
	ColorTokens,
	TypographyTypeTokens,
} from '@blue-learn/schema';
import { typographyTypeTokensMap as darkType } from '../dark-mobile/typography';
import { typographyTypeTokensMap as lightType } from '../light-mobile/typography';

describe('dark-mobile typographyTypeTokensMap', () => {
	it('covers every TypographyTypeTokens member', () => {
		// Typography.tsx spreads `theme.typography[type]` into the base
		// component. In dark mode a missing variant drops the colour override
		// too, so the text renders in the light theme's near-black on a dark
		// surface - invisible. There are ~60 variants here, all hand-written,
		// so this gate is what stops one being forgotten.
		for (const token of Object.values(
			TypographyTypeTokens,
		)) {
			expect(darkType[token]).toBeDefined();
		}
		expect(Object.keys(darkType).sort()).toEqual(
			Object.keys(lightType).sort(),
		);
	});

	it('inherits font size and family from light-mobile for every variant', () => {
		// Only the colour is themed. If a size or weight drifted, switching
		// theme would reflow every screen of text.
		for (const token of Object.values(
			TypographyTypeTokens,
		)) {
			expect({
				token,
				fontSize: darkType[token].fontSize,
				fontFamily: darkType[token].fontFamily,
			}).toEqual({
				token,
				fontSize: lightType[token].fontSize,
				fontFamily: lightType[token].fontFamily,
			});
		}
	});

	it('re-tints every single variant - none is left at the light-theme colour', () => {
		// This is the one that actually protects readability: any variant
		// still carrying Grey_800/Grey_700/Grey_500 from light mode would be
		// dark text on a dark background.
		for (const token of Object.values(
			TypographyTypeTokens,
		)) {
			expect({
				token,
				changed:
					darkType[token].color !==
					lightType[token].color,
			}).toEqual({ token, changed: true });
		}
	});

	it('every colour used is a light end of the grey ramp (Grey_100..Grey_500)', () => {
		// Anything darker than Grey_500 fails contrast against the dark
		// surface. Pinning the allowed set makes an accidental Grey_800 fail
		// here rather than in someone's eyes.
		const allowed = new Set<string>([
			ColorTokens.Grey_100,
			ColorTokens.Grey_200,
			ColorTokens.Grey_300,
			ColorTokens.Grey_400,
			ColorTokens.Grey_500,
		]);
		for (const [token, v] of Object.entries(darkType)) {
			expect({
				token,
				color: v.color,
				allowed: allowed.has(v.color!),
			}).toEqual({
				token,
				color: v.color,
				allowed: true,
			});
		}
	});

	it('preserves the three-level emphasis ramp (primary > secondary > placeholder)', () => {
		// The de-emphasis hierarchy has to survive the inversion: in dark mode
		// "less important" means *darker*, the opposite direction from light
		// mode. Getting the direction wrong makes placeholder text the most
		// prominent thing on the screen.
		const rank = (t: TypographyTypeTokens) =>
			Number(
				String(darkType[t].color).replace('grey-', ''),
			);
		for (const family of [
			'BODY',
			'HEADING',
			'SUBHEADING',
		]) {
			const primary =
				`${family}_MD` as TypographyTypeTokens;
			const secondary =
				`${family}_MD_SECONDARY` as TypographyTypeTokens;
			const placeholder =
				`${family}_MD_PLACEHOLDER` as TypographyTypeTokens;
			expect({
				family,
				primaryLighterThanSecondary:
					rank(primary) < rank(secondary),
				secondaryLighterThanPlaceholder:
					rank(secondary) < rank(placeholder),
			}).toEqual({
				family,
				primaryLighterThanSecondary: true,
				secondaryLighterThanPlaceholder: true,
			});
		}
	});

	it('primary text is Grey_100 - the highest-contrast step available', () => {
		expect(
			darkType[TypographyTypeTokens.DEFAULT].color,
		).toBe(ColorTokens.Grey_100);
		expect(
			darkType[TypographyTypeTokens.BODY_MD].color,
		).toBe(ColorTokens.Grey_100);
		expect(
			darkType[TypographyTypeTokens.HEADING_MD].color,
		).toBe(ColorTokens.Grey_100);
	});
});
