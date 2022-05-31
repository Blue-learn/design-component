import {
	ColorTokens,
	CornerRadiusTokens,
	inputTypeToken,
	SpaceTypeTokens,
	InputTypeTokensMap,
	FontSizeTokens,
} from '@blue-learn/schema';
import { borderRadiusTypeTokensMap } from '../../light-mobile/cornerRadius';
import { spaceTypeTokensMap } from '../../light-mobile/space';

export const inputTypeTokensMap: InputTypeTokensMap =
	{
		[inputTypeToken.default]: {
			size: FontSizeTokens.md,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.Transparent,
			borderColor: ColorTokens.Grey_200,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR1
				],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[inputTypeToken.chat]: {
			size: FontSizeTokens.md,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.White,
			borderColor: ColorTokens.Transparent,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[inputTypeToken.disabled]: {
			size: FontSizeTokens.md,
			color: ColorTokens.Grey_100,
			bgColor: ColorTokens.White,
			borderColor: ColorTokens.Grey_100,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR1
				],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[inputTypeToken.success]: {
			size: FontSizeTokens.md,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.White,
			borderColor: ColorTokens.Success_100,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR1
				],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[inputTypeToken.error]: {
			size: FontSizeTokens.md,
			color: ColorTokens.Grey_500,
			bgColor: ColorTokens.White,
			borderColor: ColorTokens.Error_100,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR1
				],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
	};
