import { OpacityTypeTokens } from '../opacity';

describe('OpacityTypeTokens', () => {
	const values = Object.values(OpacityTypeTokens);

	it('exposes exactly transparent / 20 / 40 / 80', () => {
		// ChipBaseProps.opacity is typed against this enum. The set is small
		// and hand-maintained, so pin it: adding a step without a matching
		// theme entry gives `opacity: undefined`, which renders fully opaque
		// rather than failing.
		expect(values.sort()).toEqual([
			'opacity-20',
			'opacity-40',
			'opacity-80',
			'transparent',
		]);
	});

	it('has no duplicate values', () => {
		expect(new Set(values).size).toBe(values.length);
	});

	it('uses kebab-case values that differ from their PascalCase keys', () => {
		// Opacity_20 -> 'opacity-20'. Anyone indexing a theme map with the
		// key name instead of the value gets `undefined`, so the divergence
		// is worth pinning explicitly.
		expect(OpacityTypeTokens.Opacity_20).toBe(
			'opacity-20',
		);
		expect(OpacityTypeTokens.Opacity_40).toBe(
			'opacity-40',
		);
		expect(OpacityTypeTokens.Opacity_80).toBe(
			'opacity-80',
		);
	});

	it('names a fully-transparent member as "transparent", matching the ColorTokens convention', () => {
		// ColorTokens.Transparent is also the literal 'transparent'. Keeping
		// the two consistent is what lets the same string be read as either a
		// colour or an opacity in mixed style objects.
		expect(OpacityTypeTokens.Transparent).toBe(
			'transparent',
		);
	});

	it('the numeric steps are ordered and parse to increasing percentages', () => {
		// The names promise an ordering (20 < 40 < 80). A renamed member that
		// broke the ordering would silently invert an intended fade.
		const steps = [
			OpacityTypeTokens.Opacity_20,
			OpacityTypeTokens.Opacity_40,
			OpacityTypeTokens.Opacity_80,
		].map((t) => Number(String(t).split('-')[1]));
		expect(steps).toEqual([20, 40, 80]);
		for (let i = 1; i < steps.length; i++) {
			expect(steps[i]).toBeGreaterThan(steps[i - 1]);
		}
	});
});
