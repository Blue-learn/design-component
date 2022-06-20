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
		[FontSizeTokens['2xs']]: 10,
		[FontSizeTokens['xs']]: 12,
		[FontSizeTokens['sm']]: 14,
		[FontSizeTokens['md']]: 16,
		[FontSizeTokens['lg']]: 18,
		[FontSizeTokens['xl']]: 20,
		[FontSizeTokens['2xl']]: 24,
		[FontSizeTokens['3xl']]: 28,
		[FontSizeTokens['4xl']]: 32,
		[FontSizeTokens['5xl']]: 40,
		[FontSizeTokens['6xl']]: 48,
		[FontSizeTokens['7xl']]: 60,
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
