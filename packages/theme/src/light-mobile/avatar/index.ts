import {
	avatarSizeTokens,
	AvatarTypeTokensMap,
} from '@blue-learn/schema';

export const avatarTypeTokensMap: AvatarTypeTokensMap =
	{
		[avatarSizeTokens.XS]: 20,
		[avatarSizeTokens.SM]: 24,
		[avatarSizeTokens.MD]: 32,
		[avatarSizeTokens.LG]: 40,
		[avatarSizeTokens.XL]: 48,
		[avatarSizeTokens['2XL']]: 80,
		[avatarSizeTokens['3XL']]: 100,
	};
