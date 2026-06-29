import {
	BorderRadiusTokens,
	ColorTokens,
	ProgressIndicatorTypeTokens,
	SizeTypeTokens,
} from '@blue-learn/schema';
import { progessIndicatorTypeTokensMap } from '../light-mobile/progressIndicator';
import { borderRadiusTypeTokensMap } from '../light-mobile/borderRadius';
import { sizeTypeTokensMap } from '../light-mobile/space';

describe('light-mobile progessIndicatorTypeTokensMap', () => {
	it('has an entry for every ProgressIndicatorTypeTokens variant', () => {
		// ProgressIndicator.tsx spreads `theme.progressIndicator[type]` into
		// the base component *before* the caller's own props. A missing entry
		// spreads `undefined`, and the base falls back to its own hardcoded
		// defaults - so the component silently stops being themeable.
		for (const token of Object.values(
			ProgressIndicatorTypeTokens,
		)) {
			expect(
				progessIndicatorTypeTokensMap[token],
			).toBeDefined();
		}
	});

	it('pins the default variant to Primary_500 / BR4 / MD height', () => {
		// This is the only variant that exists, so it is what every progress
		// bar in the product renders as.
		expect(
			progessIndicatorTypeTokensMap[
				ProgressIndicatorTypeTokens.default
			],
		).toEqual({
			color: ColorTokens.Primary_500,
			borderRadius: BorderRadiusTokens.BR4,
			height: SizeTypeTokens.MD,
		});
	});

	it('the referenced colour/radius/height tokens all resolve', () => {
		const v =
			progessIndicatorTypeTokensMap[
				ProgressIndicatorTypeTokens.default
			];
		expect(
			new Set(Object.values(ColorTokens)).has(v.color),
		).toBe(true);
		expect(
			borderRadiusTypeTokensMap[v.borderRadius],
		).toBeDefined();
		// The height token is resolved through the *space* scale, not a
		// dedicated one (ProgessIndicator.base.tsx: theme.space[height]).
		expect(sizeTypeTokensMap[v.height]).toBe(8);
	});

	it('uses the pill radius so segments have rounded caps', () => {
		// BR4 is what makes each progress segment a lozenge rather than a
		// rectangle; it is applied to a segment only 8px tall, so the radius
		// has to exceed half the height to fully round it.
		expect(
			borderRadiusTypeTokensMap[
				progessIndicatorTypeTokensMap[
					ProgressIndicatorTypeTokens.default
				].borderRadius
			],
		).toBeGreaterThan(
			sizeTypeTokensMap[
				progessIndicatorTypeTokensMap[
					ProgressIndicatorTypeTokens.default
				].height
			]! / 2,
		);
	});
});
