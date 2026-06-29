import {
	ChipHighlightTokens,
	ChipTypeTokens,
} from '../chip';

describe('ChipTypeTokens', () => {
	const values = Object.values(ChipTypeTokens);

	it('exposes a SELECTED/UNSELECTED pair at both SMALL and MEDIUM', () => {
		// Chips encode selection in the *type* token rather than a separate
		// prop, so the matrix has to be complete: a missing
		// MEDIUM_UNSELECTED, for example, would leave a medium filter chip
		// with no way to express its off state.
		expect(values.sort()).toEqual([
			'MEDIUM_SELECTED',
			'MEDIUM_UNSELECTED',
			'SMALL_SELECTED',
			'SMALL_UNSELECTED',
		]);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(ChipTypeTokens)) {
			expect(
				ChipTypeTokens[
					key as keyof typeof ChipTypeTokens
				],
			).toBe(key);
		}
	});

	it('keeps size and selection independent in the name', () => {
		// Product code routinely derives the token by string-building
		// (`${size}_${selected ? 'SELECTED' : 'UNSELECTED'}`). That only works
		// while the naming stays strictly <SIZE>_<STATE>.
		for (const value of values) {
			const [size, state] = String(value).split('_');
			expect({ value, size, state }).toEqual({
				value,
				size: expect.stringMatching(
					/^(SMALL|MEDIUM)$/,
				),
				state: expect.stringMatching(
					/^(SELECTED|UNSELECTED)$/,
				),
			});
		}
	});
});

describe('ChipHighlightTokens', () => {
	it('exposes exactly HIGHLIGHTED and NOT_HIGHLIGHTED', () => {
		expect(
			Object.values(ChipHighlightTokens).sort(),
		).toEqual(['HIGHLIGHTED', 'NOT_HIGHLIGHTED']);
	});

	it('HIGHLIGHTED is the literal Chip.base.tsx compares against to draw a border', () => {
		// Chip.base.tsx only gives the chip a visible border width when
		// `highlight === ChipHighlightTokens.HIGHLIGHTED` (pinned in
		// component/src/chip/Chip.test.tsx). Change this string and every
		// highlighted chip loses its outline while still typechecking.
		expect(ChipHighlightTokens.HIGHLIGHTED).toBe(
			'HIGHLIGHTED',
		);
	});

	it('is orthogonal to the selection encoded in ChipTypeTokens', () => {
		// Highlight (a transient emphasis, e.g. a search match) is a separate
		// axis from selection. If the two vocabularies overlapped, a caller
		// could not express "selected but not highlighted".
		const typeValues = new Set<string>(
			Object.values(ChipTypeTokens),
		);
		for (const value of Object.values(
			ChipHighlightTokens,
		)) {
			expect({
				value,
				collides: typeValues.has(value),
			}).toEqual({ value, collides: false });
		}
	});
});
