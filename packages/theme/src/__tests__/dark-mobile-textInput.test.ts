import {
	ColorTokens,
	inputTypeToken,
} from '@blue-learn/schema';
import { inputTypeTokensMap as darkInputs } from '../dark-mobile/textInput';
import { inputTypeTokensMap as lightInputs } from '../light-mobile/textInput';

describe('dark-mobile inputTypeTokensMap', () => {
	it('covers exactly the same variants as light-mobile', () => {
		expect(Object.keys(darkInputs).sort()).toEqual(
			Object.keys(lightInputs).sort(),
		);
		for (const token of Object.values(inputTypeToken)) {
			expect(darkInputs[token]).toBeDefined();
		}
	});

	it('inherits radius, padding and font size from light-mobile', () => {
		// A text field that changes height between themes would shift every
		// form it sits in.
		for (const token of Object.values(inputTypeToken)) {
			expect({
				token,
				borderRadius: darkInputs[token].borderRadius,
				paddingVertical:
					darkInputs[token].paddingVertical,
				paddingHorizontal:
					darkInputs[token].paddingHorizontal,
				fontSize: darkInputs[token].fontSize,
			}).toEqual({
				token,
				borderRadius: lightInputs[token].borderRadius,
				paddingVertical:
					lightInputs[token].paddingVertical,
				paddingHorizontal:
					lightInputs[token].paddingHorizontal,
				fontSize: lightInputs[token].fontSize,
			});
		}
	});

	it('every referenced colour resolves to a real ColorTokens value', () => {
		const colors = new Set(Object.values(ColorTokens));
		for (const [token, v] of Object.entries(
			darkInputs,
		)) {
			expect({
				token,
				color: colors.has(v.color!),
				bg: colors.has(v.bgColor!),
				border: colors.has(v.borderColor!),
			}).toEqual({
				token,
				color: true,
				bg: true,
				border: true,
			});
		}
	});

	it('lifts the typed-text colour to Grey_100 on every variant', () => {
		// The light theme types in Grey_500, which is unreadable on a dark
		// field. Every variant must override it - miss one and users cannot
		// see what they are typing.
		for (const token of Object.values(inputTypeToken)) {
			expect({
				token,
				color: darkInputs[token].color,
			}).toEqual({
				token,
				color: ColorTokens.Grey_100,
			});
		}
	});

	it('gives the filled variants (search/chat/comment) a dark Grey_600 surface', () => {
		// These three are the variants that paint their own background; in
		// light mode they are white/near-white, which would be a glaring
		// panel in dark mode.
		for (const token of [
			inputTypeToken.search,
			inputTypeToken.chat,
			inputTypeToken.comment,
		]) {
			expect({
				token,
				bg: darkInputs[token].bgColor,
			}).toEqual({
				token,
				bg: ColorTokens.Grey_600,
			});
		}
	});

	it('keeps the bordered variants transparent and only lightens their border', () => {
		// default/success/error draw a border on a transparent field. Only the
		// default border needs lightening; the semantic success/error colours
		// carry their own meaning and stay put across themes.
		expect(darkInputs[inputTypeToken.default]).toMatchObject(
			{
				bgColor: ColorTokens.Transparent,
				borderColor: ColorTokens.Grey_400,
			},
		);
		expect(darkInputs[inputTypeToken.success]).toMatchObject(
			{
				bgColor: ColorTokens.Transparent,
				borderColor: ColorTokens.Success_100,
			},
		);
		expect(darkInputs[inputTypeToken.error]).toMatchObject({
			bgColor: ColorTokens.Transparent,
			borderColor: ColorTokens.Error_100,
		});
	});

	it('keeps the success/error border colours identical to light mode', () => {
		// Validation colours are semantic, not decorative - green means valid
		// in both themes. Re-tinting them would break that meaning.
		expect(
			darkInputs[inputTypeToken.success].borderColor,
		).toBe(
			lightInputs[inputTypeToken.success].borderColor,
		);
		expect(
			darkInputs[inputTypeToken.error].borderColor,
		).toBe(lightInputs[inputTypeToken.error].borderColor);
	});
});
