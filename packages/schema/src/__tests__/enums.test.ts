import { WIDGET } from '../enums';

describe('WIDGET enum', () => {
	const values = Object.values(WIDGET);

	it('has no duplicate runtime values', () => {
		// Widget tokens are used as discriminants (e.g. by registry.ts to pick
		// a component implementation). A duplicate value would make two
		// distinct widget kinds indistinguishable at runtime.
		expect(new Set(values).size).toBe(values.length);
	});

	it('every value equals its own key (contract expected by consumers)', () => {
		for (const key of Object.keys(WIDGET)) {
			expect(WIDGET[key as keyof typeof WIDGET]).toBe(key);
		}
	});

	it('exposes the widget kinds every card/basic component relies on', () => {
		expect(values).toEqual(
			expect.arrayContaining([
				'TEXT',
				'BUTTON',
				'STACK',
				'IMAGE',
				'ICON',
				'CARD',
			]),
		);
	});
});
