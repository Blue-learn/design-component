import {
	ColorTokens,
	ProgressIndicatorTypeTokens,
} from '@blue-learn/schema';
import { progessIndicatorTypeTokensMap as darkProgress } from '../dark-mobile/progressIndicator';
import { progessIndicatorTypeTokensMap as lightProgress } from '../light-mobile/progressIndicator';

describe('dark-mobile progessIndicatorTypeTokensMap', () => {
	it('covers every ProgressIndicatorTypeTokens variant', () => {
		for (const token of Object.values(
			ProgressIndicatorTypeTokens,
		)) {
			expect(darkProgress[token]).toBeDefined();
		}
		expect(Object.keys(darkProgress).sort()).toEqual(
			Object.keys(lightProgress).sort(),
		);
	});

	it('inherits radius and height from light-mobile', () => {
		// Only the fill colour is themed. A different height would make the
		// progress bar jump when the theme changes mid-flow (these are used
		// in onboarding steppers).
		expect(
			darkProgress[
				ProgressIndicatorTypeTokens.default
			].borderRadius,
		).toBe(
			lightProgress[
				ProgressIndicatorTypeTokens.default
			].borderRadius,
		);
		expect(
			darkProgress[ProgressIndicatorTypeTokens.default]
				.height,
		).toBe(
			lightProgress[
				ProgressIndicatorTypeTokens.default
			].height,
		);
	});

	it('swaps Primary_500 for the lighter Blue_300 fill', () => {
		// ProgessIndicator.base.tsx renders inactive segments as the same
		// colour at 0.3 opacity. On a dark surface a Primary_500 segment at
		// 30% is essentially invisible, so the dark theme has to move to the
		// lighter Blue_300 for the progress state to read at all.
		expect(
			darkProgress[ProgressIndicatorTypeTokens.default]
				.color,
		).toBe(ColorTokens.Blue_300);
		expect(
			darkProgress[ProgressIndicatorTypeTokens.default]
				.color,
		).not.toBe(
			lightProgress[
				ProgressIndicatorTypeTokens.default
			].color,
		);
	});

	it('the fill colour resolves to a real ColorTokens value', () => {
		expect(
			new Set(Object.values(ColorTokens)).has(
				darkProgress[
					ProgressIndicatorTypeTokens.default
				].color,
			),
		).toBe(true);
	});
});
