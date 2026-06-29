import {
	ButtonTypeTokens,
	ColorTokens,
} from '@blue-learn/schema';
import { buttonTypeTokensMap as darkButtons } from '../dark-mobile/button';
import { buttonTypeTokensMap as lightButtons } from '../light-mobile/button';

describe('dark-mobile buttonTypeTokensMap', () => {
	it('covers every ButtonTypeTokens variant that light-mobile covers', () => {
		// dark-mobile/button builds a *fresh* object rather than spreading the
		// light map, so a variant added to light-mobile is not picked up here
		// automatically. Miss one and that button renders with `undefined`
		// theme props in dark mode only - a bug that never shows up in the
		// default light-mode Storybook.
		expect(Object.keys(darkButtons).sort()).toEqual(
			Object.keys(lightButtons).sort(),
		);
		for (const token of Object.values(
			ButtonTypeTokens,
		)) {
			expect(darkButtons[token]).toBeDefined();
		}
	});

	it('inherits geometry (radius/padding/font size) from light-mobile for every variant', () => {
		// Each dark entry spreads its light counterpart and overrides colours
		// only. Layout must be identical across themes, otherwise switching
		// theme reflows the whole app.
		for (const token of Object.values(
			ButtonTypeTokens,
		)) {
			const dark = darkButtons[token];
			const light = lightButtons[token];
			expect({
				token,
				borderRadius: dark.borderRadius,
				paddingVertical: dark.paddingVertical,
				paddingHorizontal: dark.paddingHorizontal,
				fontSize: dark.fontSize,
				shadow: dark.shadow,
			}).toEqual({
				token,
				borderRadius: light.borderRadius,
				paddingVertical: light.paddingVertical,
				paddingHorizontal: light.paddingHorizontal,
				fontSize: light.fontSize,
				shadow: light.shadow,
			});
		}
	});

	it('every referenced colour resolves to a real ColorTokens value', () => {
		const colors = new Set(Object.values(ColorTokens));
		for (const [token, v] of Object.entries(
			darkButtons,
		)) {
			expect({
				token,
				label: colors.has(v.labelColor),
				bg: colors.has(v.bgColor),
				border:
					v.borderColor === undefined ||
					colors.has(v.borderColor),
			}).toEqual({
				token,
				label: true,
				bg: true,
				border: true,
			});
		}
	});

	it('swaps the Primary_500 brand fill for Blue_300 on Filled variants', () => {
		// Primary_500 has too little contrast against a dark surface, so the
		// dark theme deliberately shifts to the lighter Blue_300 ramp. If this
		// regressed to Primary_500 the primary CTA would be barely visible in
		// dark mode.
		for (const token of [
			ButtonTypeTokens.LargeFilled,
			ButtonTypeTokens.MediumFilled,
			ButtonTypeTokens.SmallFilled,
			ButtonTypeTokens.IconFilled,
		]) {
			expect({
				token,
				bg: darkButtons[token].bgColor,
			}).toEqual({
				token,
				bg: ColorTokens.Blue_300,
			});
			expect(darkButtons[token].bgColor).not.toBe(
				lightButtons[token].bgColor,
			);
		}
	});

	it('uses Blue_300 as the label colour for the borderless Outline/Ghost variants', () => {
		// These have no fill, so the label colour is the only thing carrying
		// the affordance. It must be the light-on-dark accent, not the
		// light-theme Primary_500.
		for (const token of [
			ButtonTypeTokens.LargeOutline,
			ButtonTypeTokens.MediumOutline,
			ButtonTypeTokens.SmallOutline,
			ButtonTypeTokens.IconOutline,
			ButtonTypeTokens.LargeGhost,
			ButtonTypeTokens.MediumGhost,
			ButtonTypeTokens.SmallGhost,
			ButtonTypeTokens.IconGhost,
		]) {
			expect({
				token,
				label: darkButtons[token].labelColor,
			}).toEqual({
				token,
				label: ColorTokens.Blue_300,
			});
		}
	});

	it('keeps Outline variants transparent while giving them a lighter border', () => {
		for (const token of [
			ButtonTypeTokens.LargeOutline,
			ButtonTypeTokens.MediumOutline,
			ButtonTypeTokens.SmallOutline,
			ButtonTypeTokens.IconOutline,
		]) {
			expect({
				token,
				bg: darkButtons[token].bgColor,
				border: darkButtons[token].borderColor,
			}).toEqual({
				token,
				bg: ColorTokens.Transparent,
				border: ColorTokens.Grey_400,
			});
		}
	});

	it('Disabled variants stay visually distinct from Filled ones in dark mode too', () => {
		// The disabled treatment is inverted relative to light mode (dark grey
		// fill, light grey label). What matters is that it still cannot be
		// mistaken for the enabled state.
		for (const [disabled, filled] of [
			[
				ButtonTypeTokens.LargeDisabled,
				ButtonTypeTokens.LargeFilled,
			],
			[
				ButtonTypeTokens.MediumDisabled,
				ButtonTypeTokens.MediumFilled,
			],
			[
				ButtonTypeTokens.SmallDisabled,
				ButtonTypeTokens.SmallFilled,
			],
		] as const) {
			expect({
				disabled,
				bg: darkButtons[disabled].bgColor,
				label: darkButtons[disabled].labelColor,
			}).toEqual({
				disabled,
				bg: ColorTokens.Grey_600,
				label: ColorTokens.Grey_200,
			});
			expect(darkButtons[disabled].bgColor).not.toBe(
				darkButtons[filled].bgColor,
			);
		}
	});

	it('leaves GoogleLargeFilled untouched - Google brand colours are theme-independent', () => {
		// Google's sign-in branding rules do not allow a dark-mode recolour of
		// the button; the dark entry is a pure pass-through of the light one.
		expect(
			darkButtons[ButtonTypeTokens.GoogleLargeFilled],
		).toEqual(
			lightButtons[ButtonTypeTokens.GoogleLargeFilled],
		);
	});
});
