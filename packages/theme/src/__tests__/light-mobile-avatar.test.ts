import { AvatarSizeTokens } from '@blue-learn/schema';
import { avatarTypeTokensMap } from '../light-mobile/avatar';

describe('light-mobile avatarTypeTokensMap', () => {
	it('has an entry for every AvatarSizeTokens member', () => {
		// Avatar.Base.tsx does `theme.avatarSize[size]` with no fallback and
		// then divides that value (activeStyleProps uses sizeValue / 2, / 4,
		// / 8). A missing token makes every one of those NaN, so the avatar
		// renders with no dimensions at all.
		for (const token of Object.values(AvatarSizeTokens)) {
			expect(
				typeof avatarTypeTokensMap[token],
			).toBe('number');
		}
	});

	it('pins the exact pixel size of each avatar step', () => {
		expect(avatarTypeTokensMap).toEqual({
			[AvatarSizeTokens.XS]: 20,
			[AvatarSizeTokens.SM]: 24,
			[AvatarSizeTokens.MD]: 32,
			[AvatarSizeTokens.LG]: 40,
			[AvatarSizeTokens.XL]: 48,
			[AvatarSizeTokens.XXL]: 80,
			[AvatarSizeTokens.XXXL]: 100,
		});
	});

	it('is strictly increasing from XS to XXXL', () => {
		const order = [
			AvatarSizeTokens.XS,
			AvatarSizeTokens.SM,
			AvatarSizeTokens.MD,
			AvatarSizeTokens.LG,
			AvatarSizeTokens.XL,
			AvatarSizeTokens.XXL,
			AvatarSizeTokens.XXXL,
		].map((t) => avatarTypeTokensMap[t]);
		for (let i = 1; i < order.length; i++) {
			expect(order[i]).toBeGreaterThan(order[i - 1]);
		}
	});

	it('every size is divisible by 4 so the active-state dot lands on whole pixels', () => {
		// Avatar.Base.tsx sizes the "online" dot at sizeValue / 4 and gives it
		// a sizeValue / 8 radius. A size that is not a multiple of 4 makes the
		// dot a fractional width, which renders as a blurry oval rather than a
		// crisp circle. (Note XS=20 is deliberately not a multiple of 8, so
		// the radius alone is allowed to be fractional - the width is not.)
		for (const value of Object.values(avatarTypeTokensMap)) {
			expect(value % 4).toBe(0);
		}
	});
});
