import { BorderRadiusTokens } from '@blue-learn/schema';
import { borderRadiusTypeTokensMap } from '../light-mobile/borderRadius';

describe('light-mobile borderRadiusTypeTokensMap', () => {
	it('pins the exact radius of every token', () => {
		expect(borderRadiusTypeTokensMap).toEqual({
			[BorderRadiusTokens.BR0]: 0,
			[BorderRadiusTokens.BR1]: 8,
			[BorderRadiusTokens.BR2]: 12,
			[BorderRadiusTokens.BR3]: 16,
			[BorderRadiusTokens.BR4]: 1000,
		});
	});

	it('BR0 is exactly 0, and is therefore falsy', () => {
		// This is load-bearing, not trivia. Shimmer.tsx resolves its radius
		// with `theme.borderRadius[props.borderRadius] || 12`, so BR0 being
		// falsy is precisely why <Shimmer borderRadius={BR0}/> renders a 12px
		// radius instead of a square corner (pinned in
		// component/src/shimmer/__tests__/Shimmer.test.tsx). Any code doing a
		// truthiness check on a radius has the same hazard.
		expect(
			borderRadiusTypeTokensMap[BorderRadiusTokens.BR0],
		).toBe(0);
		expect(
			Boolean(
				borderRadiusTypeTokensMap[BorderRadiusTokens.BR0],
			),
		).toBe(false);
	});

	it('BR4 is large enough to fully round any component in the library', () => {
		// BR4 is the "pill" radius used by Button/Chip/Tag/Avatar. It works by
		// being far larger than any element it is applied to; drop it to a
		// small number and every pill control turns into a rounded rectangle.
		expect(
			borderRadiusTypeTokensMap[BorderRadiusTokens.BR4],
		).toBeGreaterThanOrEqual(1000);
	});

	it('BR0..BR3 form a strictly increasing scale', () => {
		// Consumers pick a radius by "step size". If the ordering breaks, BR2
		// could render rounder than BR3 and the scale stops being meaningful.
		const steps = [
			BorderRadiusTokens.BR0,
			BorderRadiusTokens.BR1,
			BorderRadiusTokens.BR2,
			BorderRadiusTokens.BR3,
		].map((t) => borderRadiusTypeTokensMap[t]);
		for (let i = 1; i < steps.length; i++) {
			expect(steps[i]).toBeGreaterThan(steps[i - 1]);
		}
	});
});
