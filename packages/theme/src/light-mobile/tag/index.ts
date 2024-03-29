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
		[TagTypeTokens.SM]: {
			fontSize: FontSizeTokens.XXS,
			labelColor: ColorTokens.Grey_800,
			bgColor: ColorTokens.Secondary_100,
			borderRadius: BorderRadiusTokens.BR4,
			padding: {
				horizontal: SizeTypeTokens.MD,
				vertical: SizeTypeTokens.SM,
			},
		},
		[TagTypeTokens.MD]: {
			fontSize: FontSizeTokens.XS,
			labelColor: ColorTokens.Grey_700,
			bgColor: ColorTokens.Grey_100,
			borderRadius: BorderRadiusTokens.BR4,
			padding: {
				horizontal: SizeTypeTokens.LG,
				vertical: SizeTypeTokens.SM,
			},
		},
		[TagTypeTokens.SECONDARY]: {
			fontSize: FontSizeTokens.XXS,
			labelColor: ColorTokens.Grey_800,
			bgColor: ColorTokens.Accent_100,
			borderRadius: BorderRadiusTokens.BR1,
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
