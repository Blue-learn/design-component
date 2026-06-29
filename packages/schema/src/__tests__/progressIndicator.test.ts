import { ProgressIndicatorTypeTokens } from '../progressIndicator';
import { inputTypeToken } from '../textInput';

describe('ProgressIndicatorTypeTokens', () => {
	const values = Object.values(
		ProgressIndicatorTypeTokens,
	);

	it('exposes a single "default" variant', () => {
		// ProgressIndicator.tsx falls back to
		// `ProgressIndicatorTypeTokens.default` whenever no type is passed, so
		// this member is what every progress bar in the product resolves to.
		expect(values).toEqual(['default']);
	});

	it('the value is lowercase "default", matching the theme map key', () => {
		// The theme maps (light-mobile and dark-mobile) key their single entry
		// off this exact string. Capitalising it would make
		// `theme.progressIndicator[type]` undefined, and the base component
		// would silently fall back to its own hardcoded colour - so the
		// dark-theme override would stop applying with no error.
		expect(ProgressIndicatorTypeTokens.default).toBe(
			'default',
		);
	});

	it('is still a real enum object, so adding a variant forces a theme entry', () => {
		// ProgressIndicatorTypeTokensMap is a mapped type over this enum: any
		// member added here is a compile error until *both* themes define it.
		// That safety only exists while this is an enum - replace it with a
		// bare string union and the mapped type stops constraining anything,
		// while every `Object.values(...)` written against it breaks at
		// runtime.
		expect(typeof ProgressIndicatorTypeTokens).toBe(
			'object',
		);
		expect(values.length).toBeGreaterThan(0);
		for (const key of Object.keys(
			ProgressIndicatorTypeTokens,
		)) {
			expect(
				ProgressIndicatorTypeTokens[
					key as keyof typeof ProgressIndicatorTypeTokens
				],
			).toBe(key);
		}
	});

	it('shares the literal "default" with inputTypeToken, so the string alone is ambiguous', () => {
		// Two unrelated enums in this package both use the bare string
		// 'default'. That matters for server-driven UI: a payload field
		// carrying "default" only resolves correctly if the consumer already
		// knows which enum it belongs to, so these tokens must never be
		// compared or routed generically by value.
		expect(ProgressIndicatorTypeTokens.default).toBe(
			inputTypeToken.default,
		);
		// ...and they are nonetheless separate enums with different member
		// sets, which is what makes the collision a hazard rather than an
		// alias.
		expect(
			Object.values(inputTypeToken).length,
		).toBeGreaterThan(values.length);
	});
});
