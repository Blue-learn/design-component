import {
	inputTypeToken,
	keyboardTypeToken,
} from '../textInput';

describe('inputTypeToken', () => {
	const values = Object.values(inputTypeToken);

	it('exposes exactly the six input variants the theme defines', () => {
		// TextInput.tsx resolves `theme.textInput[type]` and spreads the
		// result. Every member here needs a matching entry in *both* theme
		// maps; adding one without that spreads `undefined` and the field
		// loses its border, padding and text colour together.
		expect(values.sort()).toEqual([
			'chat',
			'comment',
			'default',
			'error',
			'search',
			'success',
		]);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(inputTypeToken)) {
			expect(
				inputTypeToken[
					key as keyof typeof inputTypeToken
				],
			).toBe(key);
		}
	});

	it('has no duplicate values', () => {
		expect(new Set(values).size).toBe(values.length);
	});

	it('carries success and error as first-class variants, not a boolean flag', () => {
		// Validation state is modelled as a *type*, which is why the theme can
		// give each state its own border colour. Collapsing them would remove
		// the only way to express a valid/invalid field.
		expect(values).toContain('success');
		expect(values).toContain('error');
		expect(inputTypeToken.success).not.toBe(
			inputTypeToken.error,
		);
	});
});

describe('keyboardTypeToken', () => {
	const values = Object.values(keyboardTypeToken);

	it('maps every member to a literal react-native keyboardType string', () => {
		// These are passed straight to RN's <TextInput keyboardType>. RN
		// silently ignores an unrecognised value and shows the default
		// keyboard - so a typo here means users get a QWERTY keyboard where
		// they expected a number pad, with nothing logged.
		expect(values.sort()).toEqual([
			'decimal-pad',
			'default',
			'email-address',
			'number-pad',
			'numeric',
			'phone-pad',
			'url',
		]);
	});

	it('has no duplicate values', () => {
		expect(new Set(values).size).toBe(values.length);
	});

	it('uses kebab-case values that deliberately differ from the camelCase keys', () => {
		// numberPad -> 'number-pad', email -> 'email-address'. The key names
		// are ergonomic; the values are RN's vocabulary. Making them match
		// would break the keyboard on every device.
		expect(keyboardTypeToken.numberPad).toBe(
			'number-pad',
		);
		expect(keyboardTypeToken.decimalPad).toBe(
			'decimal-pad',
		);
		expect(keyboardTypeToken.email).toBe(
			'email-address',
		);
		expect(keyboardTypeToken.phone).toBe('phone-pad');
	});

	it('distinguishes numberPad from numeric', () => {
		// They are different RN keyboards (digits only vs digits plus
		// separators). Collapsing them would let users type a decimal point
		// into a field that cannot accept one.
		expect(keyboardTypeToken.numberPad).not.toBe(
			keyboardTypeToken.numeric,
		);
	});
});
