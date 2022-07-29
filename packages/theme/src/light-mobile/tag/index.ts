import {
	BorderRadiusTokens,
	ColorTokens,
	FontSizeTokens,
	SizeTypeTokens,
	TagTypeTokens,
	TagTypeTokensMap,
} from '@blue-learn/schema';

export const tagTypeTokensMap: TagTypeTokensMap =
	{
		[TagTypeTokens.DEFAULT]: {
			fontSize: FontSizeTokens.XXS,
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.White,
			borderRadius: BorderRadiusTokens.BR4,
			padding: {
				horizontal: SizeTypeTokens.MD,
				vertical: SizeTypeTokens.SM,
			},
		},
		[TagTypeTokens.SECONDARY]: {
			fontSize: FontSizeTokens.XXS,
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Black_20,
			borderRadius: BorderRadiusTokens.BR4,
			padding: {
				horizontal: SizeTypeTokens.MD,
				vertical: SizeTypeTokens.SM,
			},
		},
	};
