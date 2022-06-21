import {
	ColorTokens,
	CornerRadiusTokens,
	inputTypeToken,
	SpaceTypeTokens,
	InputTypeTokensMap,
	FontSizeTokens,
} from '@blue-learn/schema';

export const inputTypeTokensMap: InputTypeTokensMap =
	{
		[inputTypeToken.default]: {
			fontSize: FontSizeTokens.sm,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.Transparent,
			borderColor: ColorTokens.Grey_200,
			borderRadius: CornerRadiusTokens.BR1,
			paddingVertical: SpaceTypeTokens.LG,
			paddingHorizontal: SpaceTypeTokens.XL,
		},
		[inputTypeToken.chat]: {
			fontSize: FontSizeTokens.sm,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.Grey_50,
			borderColor: ColorTokens.Transparent,
			borderRadius: CornerRadiusTokens.BR4,
			paddingVertical: SpaceTypeTokens.LG,
			paddingHorizontal: SpaceTypeTokens.XL,
		},
		[inputTypeToken.success]: {
			fontSize: FontSizeTokens.sm,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.Transparent,
			borderColor: ColorTokens.Success_100,
			borderRadius: CornerRadiusTokens.BR1,
			paddingVertical: SpaceTypeTokens.LG,
			paddingHorizontal: SpaceTypeTokens.XL,
		},
		[inputTypeToken.error]: {
			fontSize: FontSizeTokens.sm,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.Transparent,
			borderColor: ColorTokens.Error_100,
			borderRadius: CornerRadiusTokens.BR1,
			paddingVertical: SpaceTypeTokens.LG,
			paddingHorizontal: SpaceTypeTokens.XL,
		},
	};
