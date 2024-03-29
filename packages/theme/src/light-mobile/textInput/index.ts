import {
	ColorTokens,
	BorderRadiusTokens,
	inputTypeToken,
	SizeTypeTokens,
	InputTypeTokensMap,
	FontSizeTokens,
} from '@blue-learn/schema';

export const inputTypeTokensMap: InputTypeTokensMap =
	{
		[inputTypeToken.default]: {
			fontSize: FontSizeTokens.SM,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.Transparent,
			borderColor: ColorTokens.Grey_200,
			borderRadius: BorderRadiusTokens.BR1,
			paddingVertical: SizeTypeTokens.LG,
			paddingHorizontal: SizeTypeTokens.XL,
		},
		[inputTypeToken.search]: {
			fontSize: FontSizeTokens.SM,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.White,
			borderColor: ColorTokens.Transparent,
			borderRadius: BorderRadiusTokens.BR4,
			paddingVertical: SizeTypeTokens.MD,
			paddingHorizontal: SizeTypeTokens.LG,
		},
		[inputTypeToken.chat]: {
			fontSize: FontSizeTokens.SM,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.Grey_50,
			borderColor: ColorTokens.Transparent,
			borderRadius: BorderRadiusTokens.BR4,
			paddingVertical: SizeTypeTokens.LG,
			paddingHorizontal: SizeTypeTokens.XL,
		},
		[inputTypeToken.comment]: {
			fontSize: FontSizeTokens.SM,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.Grey_50,
			borderColor: ColorTokens.Transparent,
			borderRadius: BorderRadiusTokens.BR0,
			paddingVertical: SizeTypeTokens.LG,
			paddingHorizontal: SizeTypeTokens.MD,
		},
		[inputTypeToken.success]: {
			fontSize: FontSizeTokens.SM,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.Transparent,
			borderColor: ColorTokens.Success_100,
			borderRadius: BorderRadiusTokens.BR1,
			paddingVertical: SizeTypeTokens.LG,
			paddingHorizontal: SizeTypeTokens.XL,
		},
		[inputTypeToken.error]: {
			fontSize: FontSizeTokens.SM,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.Transparent,
			borderColor: ColorTokens.Error_100,
			borderRadius: BorderRadiusTokens.BR1,
			paddingVertical: SizeTypeTokens.LG,
			paddingHorizontal: SizeTypeTokens.XL,
		},
	};
