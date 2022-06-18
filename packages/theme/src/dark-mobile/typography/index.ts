import {
	TypographyTypeTokensMap,
	ColorTokens,
	TypographyTypeTokens,
} from '@blue-learn/schema';

export const darkTypographyTypeTokensMap: TypographyTypeTokensMap =
	{
		[TypographyTypeTokens.primary]: {
			color: ColorTokens.Grey_100,
		},
		[TypographyTypeTokens.secondary]: {
			color: ColorTokens.Grey_200,
		},
		[TypographyTypeTokens.placeholder]: {
			color: ColorTokens.Grey_300,
		},
	};
