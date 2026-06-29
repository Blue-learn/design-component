import {
	StackAlignItems,
	StackAlignType,
	StackFlexWrap,
	StackJustifyContent,
	StackType,
} from '../stack';

describe('StackType', () => {
	it('maps to the two literal flexDirection values react-native accepts', () => {
		// Stack.tsx assigns `flexDirection: type` directly. RN/RNW only
		// understand these exact lowercase strings - anything else is dropped
		// and the stack silently falls back to column.
		expect(StackType.row).toBe('row');
		expect(StackType.column).toBe('column');
		expect(Object.values(StackType).sort()).toEqual([
			'column',
			'row',
		]);
	});
});

describe('StackJustifyContent', () => {
	const values = Object.values(StackJustifyContent);

	it('maps every member to a valid CSS justify-content keyword', () => {
		// Same reasoning as StackType: these strings are passed straight into
		// the style object, so a typo produces no error and no effect - the
		// layout just silently stays at flex-start.
		expect(values.sort()).toEqual([
			'center',
			'flex-end',
			'flex-start',
			'space-around',
			'space-between',
			'space-evenly',
		]);
	});

	it('has no duplicate values', () => {
		expect(new Set(values).size).toBe(values.length);
	});

	it('converts camelCase keys to kebab-case values', () => {
		// The key/value shapes differ deliberately (flexStart -> 'flex-start').
		// Pinning it catches a "cleanup" that makes the value match the key
		// and quietly breaks every centred/spaced layout in the library.
		expect(StackJustifyContent.flexStart).toBe(
			'flex-start',
		);
		expect(StackJustifyContent.flexEnd).toBe('flex-end');
		expect(StackJustifyContent.spaceBetween).toBe(
			'space-between',
		);
		expect(StackJustifyContent.spaceEvenly).toBe(
			'space-evenly',
		);
		expect(StackJustifyContent.spaceAround).toBe(
			'space-around',
		);
	});
});

describe('StackAlignItems', () => {
	const values = Object.values(StackAlignItems);

	it('maps every member to a valid CSS align-items keyword', () => {
		expect(values.sort()).toEqual([
			'baseline',
			'center',
			'flex-end',
			'flex-start',
			'stretch',
		]);
	});

	it('does not offer the space-* keywords, which align-items does not support', () => {
		// justify-content accepts space-between/around/evenly; align-items
		// does not. Exposing them here would let a caller write a style that
		// is simply ignored, with no indication why.
		for (const value of values) {
			expect(String(value).startsWith('space-')).toBe(
				false,
			);
		}
	});

	it('Stack.tsx default (flexStart) is a real member', () => {
		// Stack.tsx defaults alignItems to StackAlignItems.flexStart.
		expect(values).toContain('flex-start');
	});
});

describe('StackFlexWrap', () => {
	it('maps to the three CSS flex-wrap keywords', () => {
		expect(Object.values(StackFlexWrap).sort()).toEqual([
			'nowrap',
			'wrap',
			'wrap-reverse',
		]);
	});

	it('nowrap is a single word, matching CSS - not "no-wrap"', () => {
		// 'no-wrap' is the classic typo here and would be silently ignored,
		// leaving children wrapping when the caller asked them not to.
		// Stack.tsx uses this value as its default.
		expect(StackFlexWrap.nowrap).toBe('nowrap');
	});
});

describe('StackAlignType (deprecated)', () => {
	const values = Object.values(StackAlignType);

	it('is still exported for the deprecated alignX/alignY props', () => {
		// Stack.tsx still honours alignX/alignY *over* justifyContent/
		// alignItems (`alignX || justifyContent`). Until those props are
		// removed, dropping this enum breaks every legacy call site.
		expect(values.length).toBeGreaterThan(0);
	});

	it('overlaps StackJustifyContent so the deprecated props still produce valid CSS', () => {
		// alignX/alignY values land in justifyContent/alignItems unchanged,
		// so every member has to be a keyword one of those properties
		// understands.
		const valid = new Set<string>([
			...Object.values(StackJustifyContent),
			...Object.values(StackAlignItems),
		]);
		for (const value of values) {
			expect({ value, valid: valid.has(value) }).toEqual({
				value,
				valid: true,
			});
		}
	});
});
