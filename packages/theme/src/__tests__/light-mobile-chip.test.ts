import {
	BorderRadiusTokens,
	ChipTypeTokens,
	ColorTokens,
} from '@blue-learn/schema';
import { chipTypeTokensMap } from '../light-mobile/chip';
import { borderRadiusTypeTokensMap } from '../light-mobile/borderRadius';
import { sizeTypeTokensMap } from '../light-mobile/space';
import { fontSizeTokensMap } from '../light-mobile/typography';

describe('light-mobile chipTypeTokensMap', () => {
	it('has an entry for every ChipTypeTokens variant', () => {
		// Chip.tsx spreads `theme.chip[type]` into Chip.base. Chips encode
		// selection state in the *type* token, so a missing entry means a
		// selected filter chip renders identically to an unselected one -
		// the user loses all feedback about what is applied.
		for (const token of Object.values(ChipTypeTokens)) {
			expect(chipTypeTokensMap[token]).toBeDefined();
		}
	});

	it('every referenced token resolves in its own theme map', () => {
		const colors = new Set(Object.values(ColorTokens));
		for (const [token, v] of Object.entries(
			chipTypeTokensMap,
		)) {
			expect({
				token,
				border: colors.has(v.borderColor!),
				label: colors.has(v.labelColor!),
				radius:
					borderRadiusTypeTokensMap[
						v.borderRadius!
					] !== undefined,
				size:
					fontSizeTokensMap[v.fontSize!] !== undefined,
				padH:
					sizeTypeTokensMap[v.padding!.horizontal!] !==
					undefined,
				padV:
					sizeTypeTokensMap[v.padding!.vertical!] !==
					undefined,
			}).toEqual({
				token,
				border: true,
				label: true,
				radius: true,
				size: true,
				padH: true,
				padV: true,
			});
		}
	});

	it('SELECTED and UNSELECTED differ by border colour at both sizes', () => {
		// This border colour is the *only* visual difference between the two
		// states (label colour and padding are identical). If they ever
		// resolved to the same token, selection would become invisible.
		expect(
			chipTypeTokensMap[ChipTypeTokens.SMALL_SELECTED]
				.borderColor,
		).toBe(ColorTokens.Primary_100);
		expect(
			chipTypeTokensMap[
				ChipTypeTokens.SMALL_UNSELECTED
			].borderColor,
		).toBe(ColorTokens.Grey_100);
		expect(
			chipTypeTokensMap[ChipTypeTokens.MEDIUM_SELECTED]
				.borderColor,
		).not.toBe(
			chipTypeTokensMap[
				ChipTypeTokens.MEDIUM_UNSELECTED
			].borderColor,
		);
	});

	it('SMALL and MEDIUM differ by padding, not by font size', () => {
		// The size distinction is entirely a padding one; the label stays the
		// same size so chips of both sizes can sit in the same row without
		// the text jumping.
		const small =
			chipTypeTokensMap[ChipTypeTokens.SMALL_SELECTED];
		const medium =
			chipTypeTokensMap[
				ChipTypeTokens.MEDIUM_SELECTED
			];
		expect(medium.fontSize).toBe(small.fontSize);
		expect(
			sizeTypeTokensMap[medium.padding!.horizontal!],
		).toBeGreaterThan(
			sizeTypeTokensMap[small.padding!.horizontal!],
		);
		expect(
			sizeTypeTokensMap[medium.padding!.vertical!],
		).toBeGreaterThan(
			sizeTypeTokensMap[small.padding!.vertical!],
		);
	});

	it('every chip variant is a pill (BR4)', () => {
		// Chips are pills by definition in this system - a squared chip would
		// read as a button.
		for (const value of Object.values(
			chipTypeTokensMap,
		)) {
			expect(value.borderRadius).toBe(
				BorderRadiusTokens.BR4,
			);
		}
	});
});
