import {
	ChatCardTypeTokens,
	ChatCardTypeTokensMap,
	ColorTokens,
	CornerRadiusTokens,
	SpaceTypeTokens,
} from '@blue-learn/schema';

export const chatCardTypeTokenMap: ChatCardTypeTokensMap =
	{
		[ChatCardTypeTokens.receiver]: {
			labelColor: ColorTokens.Grey_500,
			userLabelColor: ColorTokens.Grey_400,
			bgColor: ColorTokens.Grey_50,
			padding: SpaceTypeTokens.MD,
			borderRadius: CornerRadiusTokens.BR2,
		},
		[ChatCardTypeTokens.sender]: {
			labelColor: ColorTokens.Grey_50,
			bgColor: ColorTokens.Blue_500,
			padding: SpaceTypeTokens.MD,
			borderRadius: CornerRadiusTokens.BR2,
		},
		[ChatCardTypeTokens.reply]: {
			labelColor: ColorTokens.Grey_400,
			userLabelColor: ColorTokens.Grey_400,
			bgColor: ColorTokens.Grey_100,
			padding: SpaceTypeTokens.MD,
			borderRadius: CornerRadiusTokens.BR2,
		},
	};
