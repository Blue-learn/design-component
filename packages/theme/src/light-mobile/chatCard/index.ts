import {
	ChatCardTypeTokens,
	ChatCardTypeTokensMap,
	ColorTokens,
	BorderRadiusTokens,
	SizeTypeTokens,
} from '@blue-learn/schema';

export const chatCardTypeTokenMap: ChatCardTypeTokensMap =
	{
		[ChatCardTypeTokens.receiver]: {
			labelColor: ColorTokens.Grey_500,
			userLabelColor: ColorTokens.Grey_400,
			bgColor: ColorTokens.Grey_50,
			padding: SizeTypeTokens.MD,
			borderRadius: BorderRadiusTokens.BR2,
		},
		[ChatCardTypeTokens.sender]: {
			labelColor: ColorTokens.Grey_50,
			bgColor: ColorTokens.Blue_500,
			padding: SizeTypeTokens.MD,
			borderRadius: BorderRadiusTokens.BR2,
		},
		[ChatCardTypeTokens.reply]: {
			labelColor: ColorTokens.Grey_400,
			userLabelColor: ColorTokens.Grey_400,
			bgColor: ColorTokens.Grey_100,
			padding: SizeTypeTokens.MD,
			borderRadius: BorderRadiusTokens.BR2,
		},
	};
