import { DividerSizeTokens } from '@blue-learn/schema';
import { dividerSizeTypeTokensMap } from '../light-mobile/divider';

describe('light-mobile dividerSizeTypeTokensMap', () => {
	it('pins the exact height of every divider size', () => {
		// Divider.tsx applies this value directly as the View's `height`, so
		// these numbers are literally the hairline thickness on screen.
		expect(dividerSizeTypeTokensMap).toEqual({
			[DividerSizeTokens.SM]: 1,
			[DividerSizeTokens.MD]: 2,
			[DividerSizeTokens.LG]: 4,
		});
	});

	it('covers every DividerSizeTokens member', () => {
		// `theme.dividerSize[size]` is unguarded in Divider.tsx: a missing
		// token gives `height: undefined`, and the divider disappears
		// entirely rather than failing loudly.
		for (const token of Object.values(DividerSizeTokens)) {
			expect(
				dividerSizeTypeTokensMap[token],
			).toBeGreaterThan(0);
		}
	});

	it('SM is a 1px hairline and the scale increases with size', () => {
		// SM is the default in Divider.tsx. It has to stay at 1 - the whole
		// point of the default divider is the thinnest visible line.
		expect(
			dividerSizeTypeTokensMap[DividerSizeTokens.SM],
		).toBe(1);
		expect(
			dividerSizeTypeTokensMap[DividerSizeTokens.MD],
		).toBeGreaterThan(
			dividerSizeTypeTokensMap[DividerSizeTokens.SM],
		);
		expect(
			dividerSizeTypeTokensMap[DividerSizeTokens.LG],
		).toBeGreaterThan(
			dividerSizeTypeTokensMap[DividerSizeTokens.MD],
		);
	});
});
