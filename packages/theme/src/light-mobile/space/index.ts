import {
	SpaceTypeTokens,
	SpaceTypeTokensMap,
} from '@blue-learn/schema';

export const spaceTypeTokensMap: SpaceTypeTokensMap =
	{
		[SpaceTypeTokens.XS]: 2,
		[SpaceTypeTokens.SM]: 4,
		[SpaceTypeTokens.MD]: 8,
		[SpaceTypeTokens.LG]: 12,
		[SpaceTypeTokens.XL]: 16,
		[SpaceTypeTokens['2XL']]: 20,
		[SpaceTypeTokens['3XL']]: 24,
		[SpaceTypeTokens['4XL']]: 28,
	};
