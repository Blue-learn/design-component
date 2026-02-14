import {
	ButtonTypeTokens,
	ColorTokens,
	TagTypeTokens,
	ChipTypeTokens,
} from '@blue-learn/schema';
import { lightMobileTheme } from '../light-mobile';
import { darkMobileTheme } from '../dark-mobile';

describe('darkMobileTheme', () => {
	it('has a button entry for every ButtonTypeTokens variant', () => {
		for (const token of Object.values(ButtonTypeTokens)) {
			expect(darkMobileTheme.button[token]).toBeDefined();
		}
	});

	it('overrides LargeFilled to the dark-mode blue instead of light-mode Primary_500', () => {
		expect(darkMobileTheme.button[ButtonTypeTokens.LargeFilled].bgColor).toBe(
			ColorTokens.Blue_300,
		);
		expect(
			lightMobileTheme.button[ButtonTypeTokens.LargeFilled].bgColor,
		).toBe(ColorTokens.Primary_500);
	});

	it('inherits unrelated theme slices (colors/space/borderRadius) from lightMobileTheme by reference', () => {
		// dark-mobile/index.ts does `{ ...lightMobileTheme, button: ..., ... }`
		// - colors/space/borderRadius/etc are intentionally NOT redefined for
		// dark mode, so they must be the exact same objects as light mode.
		expect(darkMobileTheme.colors).toBe(lightMobileTheme.colors);
		expect(darkMobileTheme.space).toBe(lightMobileTheme.space);
		expect(darkMobileTheme.borderRadius).toBe(
			lightMobileTheme.borderRadius,
		);
	});

	it('has its own button/typography/tag/chip/textInput/progressIndicator overrides, distinct from light mode', () => {
		expect(darkMobileTheme.button).not.toBe(lightMobileTheme.button);
		expect(darkMobileTheme.typography).not.toBe(
			lightMobileTheme.typography,
		);
		expect(darkMobileTheme.tag).not.toBe(lightMobileTheme.tag);
		expect(darkMobileTheme.chip).not.toBe(lightMobileTheme.chip);
		expect(darkMobileTheme.textInput).not.toBe(
			lightMobileTheme.textInput,
		);
	});

	it('covers every TagTypeTokens and ChipTypeTokens variant', () => {
		for (const token of Object.values(TagTypeTokens)) {
			expect(darkMobileTheme.tag[token]).toBeDefined();
		}
		for (const token of Object.values(ChipTypeTokens)) {
			expect(darkMobileTheme.chip[token]).toBeDefined();
		}
	});

	it('every dark-mode button bgColor/labelColor resolves to a real, resolvable color token', () => {
		for (const [variant, props] of Object.entries(
			darkMobileTheme.button,
		)) {
			expect({
				variant,
				resolved: darkMobileTheme.colors[props.labelColor],
			}).toEqual({
				variant,
				resolved: expect.any(String),
			});
			if (props.bgColor) {
				expect(darkMobileTheme.colors[props.bgColor]).toEqual(
					expect.any(String),
				);
			}
		}
	});
});
