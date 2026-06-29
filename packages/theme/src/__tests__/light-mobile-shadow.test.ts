import { ShadowTypeTokens } from '@blue-learn/schema';
import { shadowTypeTokensMap } from '../light-mobile/shadow';

describe('light-mobile shadowTypeTokensMap', () => {
	it('has an entry for every ShadowTypeTokens member', () => {
		// Card.tsx does `theme.shadow[shadow]` and then reads
		// `shadowValue?.shadowOffset` etc. The optional chaining means a
		// missing token degrades to no shadow rather than crashing - so a
		// dropped elevation token is completely silent.
		for (const token of Object.values(
			ShadowTypeTokens,
		)) {
			expect(shadowTypeTokensMap[token]).toBeDefined();
		}
	});

	it('every entry supplies all three properties react-native needs', () => {
		// react-native (and react-native-web's box-shadow translation) needs
		// offset + opacity + radius together. A partial entry renders an
		// invisible or malformed shadow depending on platform.
		for (const [token, value] of Object.entries(
			shadowTypeTokensMap,
		)) {
			expect({
				token,
				hasOffset:
					typeof value.shadowOffset?.width === 'number' &&
					typeof value.shadowOffset?.height === 'number',
				hasOpacity:
					typeof value.shadowOpacity === 'number',
				hasRadius: typeof value.shadowRadius === 'number',
			}).toEqual({
				token,
				hasOffset: true,
				hasOpacity: true,
				hasRadius: true,
			});
		}
	});

	it('elevation grows monotonically from E1 to E5', () => {
		// The E1..E5 names promise increasing elevation. "Elevation" here is
		// the combination of downward offset and blur radius; if the ordering
		// breaks, a card marked E5 sits visually below one marked E3.
		const order = [
			ShadowTypeTokens.E1,
			ShadowTypeTokens.E2,
			ShadowTypeTokens.E3,
			ShadowTypeTokens.E4,
			ShadowTypeTokens.E5,
		].map((t) => {
			const s = shadowTypeTokensMap[t];
			return s.shadowOffset!.height + s.shadowRadius!;
		});
		for (let i = 1; i < order.length; i++) {
			expect(order[i]).toBeGreaterThanOrEqual(
				order[i - 1],
			);
		}
		// ...and the range actually spans something, rather than every token
		// collapsing to the same shadow.
		expect(order[order.length - 1]).toBeGreaterThan(
			order[0],
		);
	});

	it('casts shadows straight down (no horizontal offset)', () => {
		// A non-zero width offset would light the UI from the side, which
		// contradicts every other elevation in the system.
		for (const value of Object.values(
			shadowTypeTokensMap,
		)) {
			expect(value.shadowOffset!.width).toBe(0);
			expect(
				value.shadowOffset!.height,
			).toBeGreaterThanOrEqual(0);
		}
	});

	it('keeps every shadow opacity within a valid 0..1 range', () => {
		// Values outside 0..1 are silently clamped on iOS and produce an
		// invalid rgba() string on web.
		for (const value of Object.values(
			shadowTypeTokensMap,
		)) {
			expect(value.shadowOpacity).toBeGreaterThan(0);
			expect(
				value.shadowOpacity,
			).toBeLessThanOrEqual(1);
		}
	});
});
