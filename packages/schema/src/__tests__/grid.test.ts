import { GridStateTokens } from '../grid';

describe('GridStateTokens', () => {
	const values = Object.values(GridStateTokens);

	it('exposes exactly SELECTED and NOT_SELECTED', () => {
		expect(values.sort()).toEqual([
			'NOT_SELECTED',
			'SELECTED',
		]);
	});

	it('SELECTED is the literal Grid.tsx strict-equality-checks against', () => {
		// Grid.tsx renders the blue check badge only when
		// `item.state === GridStateTokens.SELECTED`. It is a strict comparison
		// against this exact string, so changing the value makes every
		// selected grid tile lose its checkmark while still typechecking - the
		// user gets no feedback that a tile is selected.
		expect(GridStateTokens.SELECTED).toBe('SELECTED');
	});

	it('NOT_SELECTED is a distinct value, not a falsy placeholder', () => {
		// The absent case (`state` undefined) and the explicit NOT_SELECTED
		// case both take the unselected branch. Keeping NOT_SELECTED a real
		// distinct string is what lets a caller model "explicitly not
		// selected" separately from "not yet known".
		expect(GridStateTokens.NOT_SELECTED).toBe(
			'NOT_SELECTED',
		);
		expect(GridStateTokens.NOT_SELECTED).not.toBe(
			GridStateTokens.SELECTED,
		);
		expect(Boolean(GridStateTokens.NOT_SELECTED)).toBe(
			true,
		);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(GridStateTokens)) {
			expect(
				GridStateTokens[
					key as keyof typeof GridStateTokens
				],
			).toBe(key);
		}
	});
});
