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
			labelColor: ColorTokens.Grey_700,
			bgColor: ColorTokens.Grey_100,
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
		[TagTypeTokens.GRADIENT]: {
			fontSize: FontSizeTokens.XS,
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Grey_50,
			borderRadius: BorderRadiusTokens.BR4,
			padding: {
				horizontal: SizeTypeTokens.MD,
				vertical: SizeTypeTokens.SM,
			},
		},
	};
