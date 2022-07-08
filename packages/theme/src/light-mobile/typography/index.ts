import {
	FontSizeTokens,
	FontSizeTokensMap,
	FontFamilyTokens,
	FontFamilyTokensMap,
	TypographyTypeTokensMap,
	ColorTokens,
	TypographyTypeTokens,
} from '@blue-learn/schema';

export const fontFamilyTokensMap: FontFamilyTokensMap =
	{
		[FontFamilyTokens.manropeRegular]:
			FontFamilyTokens.manropeRegular,
		[FontFamilyTokens.manropeSemiBold]:
			FontFamilyTokens.manropeSemiBold,
		[FontFamilyTokens.manropeBold]:
			FontFamilyTokens.manropeBold,
	};

export const fontSizeTokensMap: FontSizeTokensMap =
	{
		[FontSizeTokens.XXS]: 10,
		[FontSizeTokens.XS]: 12,
		[FontSizeTokens.SM]: 14,
		[FontSizeTokens.MD]: 16,
		[FontSizeTokens.LG]: 18,
		[FontSizeTokens.XL]: 20,
		[FontSizeTokens.XXL]: 24,
		[FontSizeTokens.XXXL]: 28,
		[FontSizeTokens.XXXXL]: 32,
		[FontSizeTokens.XXXXXL]: 40,
		[FontSizeTokens.XXXXXXL]: 48,
		[FontSizeTokens.XXXXXXXL]: 60,
	};

export const typographyTypeTokensMap: TypographyTypeTokensMap =
	{
		[TypographyTypeTokens.primary]: {
			color: ColorTokens.Grey_500,
		},
		[TypographyTypeTokens.secondary]: {
			color: ColorTokens.Grey_400,
		},
		[TypographyTypeTokens.placeholder]: {
			color: ColorTokens.Grey_300,
		},
	};
