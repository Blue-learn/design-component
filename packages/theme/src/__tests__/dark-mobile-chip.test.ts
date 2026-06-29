import {
	ChipTypeTokens,
	ColorTokens,
} from '@blue-learn/schema';
import { chipTypeTokensMap as darkChips } from '../dark-mobile/chip';
import { chipTypeTokensMap as lightChips } from '../light-mobile/chip';

describe('dark-mobile chipTypeTokensMap', () => {
	it('covers exactly the same variants as light-mobile', () => {
		// The dark map is written out variant by variant rather than derived,
		// so a chip variant added to light-mobile silently has no dark entry.
		expect(Object.keys(darkChips).sort()).toEqual(
			Object.keys(lightChips).sort(),
		);
		for (const token of Object.values(ChipTypeTokens)) {
			expect(darkChips[token]).toBeDefined();
		}
	});

	it('inherits radius, font size and padding from light-mobile', () => {
		// Only colours change between themes; chip geometry must not, or a
		// horizontally-scrolling filter row would reflow on theme switch.
		for (const token of Object.values(ChipTypeTokens)) {
			expect({
				token,
				borderRadius: darkChips[token].borderRadius,
				fontSize: darkChips[token].fontSize,
				padding: darkChips[token].padding,
			}).toEqual({
				token,
				borderRadius: lightChips[token].borderRadius,
				fontSize: lightChips[token].fontSize,
				padding: lightChips[token].padding,
			});
		}
	});

	it('every referenced colour resolves to a real ColorTokens value', () => {
		const colors = new Set(Object.values(ColorTokens));
		for (const [token, v] of Object.entries(darkChips)) {
			expect({
				token,
				border: colors.has(v.borderColor!),
				label: colors.has(v.labelColor!),
			}).toEqual({
				token,
				border: true,
				label: true,
			});
		}
	});

	it('SELECTED chips are tinted Blue_300 in both border and label', () => {
		// In dark mode the selected state is carried by an accent-coloured
		// label as well as the border - the border alone is too subtle
		// against a dark surface. Lose the label tint and selection becomes
		// hard to see.
		for (const token of [
			ChipTypeTokens.SMALL_SELECTED,
			ChipTypeTokens.MEDIUM_SELECTED,
		]) {
			expect({
				token,
				border: darkChips[token].borderColor,
				label: darkChips[token].labelColor,
			}).toEqual({
				token,
				border: ColorTokens.Blue_300,
				label: ColorTokens.Blue_300,
			});
		}
	});

	it('UNSELECTED chips stay neutral grey', () => {
		for (const token of [
			ChipTypeTokens.SMALL_UNSELECTED,
			ChipTypeTokens.MEDIUM_UNSELECTED,
		]) {
			expect({
				token,
				border: darkChips[token].borderColor,
				label: darkChips[token].labelColor,
			}).toEqual({
				token,
				border: ColorTokens.Grey_500,
				label: ColorTokens.Grey_100,
			});
		}
	});

	it('SELECTED and UNSELECTED remain distinguishable at every size', () => {
		// The single invariant that actually matters for the user: they must
		// be able to tell which filters are on.
		for (const [selected, unselected] of [
			[
				ChipTypeTokens.SMALL_SELECTED,
				ChipTypeTokens.SMALL_UNSELECTED,
			],
			[
				ChipTypeTokens.MEDIUM_SELECTED,
				ChipTypeTokens.MEDIUM_UNSELECTED,
			],
		] as const) {
			expect(
				darkChips[selected].borderColor,
			).not.toBe(darkChips[unselected].borderColor);
			expect(darkChips[selected].labelColor).not.toBe(
				darkChips[unselected].labelColor,
			);
		}
	});
});
