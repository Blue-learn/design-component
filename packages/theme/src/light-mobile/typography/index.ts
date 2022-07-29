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
		[TypographyTypeTokens.DEFAULT]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.manropeRegular,
		},
		[TypographyTypeTokens.H6]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XS,
			fontFamily: FontFamilyTokens.manropeBold,
		},
		[TypographyTypeTokens.H5]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.manropeBold,
		},
		[TypographyTypeTokens.H4]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.MD,
			fontFamily: FontFamilyTokens.manropeBold,
		},
		[TypographyTypeTokens.H3]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.LG,
			fontFamily: FontFamilyTokens.manropeBold,
		},
		[TypographyTypeTokens.H2]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XL,
			fontFamily: FontFamilyTokens.manropeBold,
		},
		[TypographyTypeTokens.H1]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XXL,
			fontFamily: FontFamilyTokens.manropeBold,
		},
		[TypographyTypeTokens.B7]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XXS,
			fontFamily: FontFamilyTokens.manropeRegular,
		},
		[TypographyTypeTokens.B6]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XS,
			fontFamily: FontFamilyTokens.manropeRegular,
		},
		[TypographyTypeTokens.B5]: {
			color: ColorTokens.Grey_400,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.manropeRegular,
		},
		[TypographyTypeTokens.B4]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.MD,
			fontFamily: FontFamilyTokens.manropeRegular,
		},
		[TypographyTypeTokens.B3]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.LG,
			fontFamily: FontFamilyTokens.manropeRegular,
		},
		[TypographyTypeTokens.S1]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XXL,
			fontFamily: FontFamilyTokens.manropeSemiBold,
		},
		[TypographyTypeTokens.S2]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XL,
			fontFamily: FontFamilyTokens.manropeSemiBold,
		},
		[TypographyTypeTokens.S3]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.LG,
			fontFamily: FontFamilyTokens.manropeSemiBold,
		},
		[TypographyTypeTokens.S4]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.MD,
			fontFamily: FontFamilyTokens.manropeSemiBold,
		},
		[TypographyTypeTokens.S5]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.manropeSemiBold,
		},
		[TypographyTypeTokens.S6]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XS,
			fontFamily: FontFamilyTokens.manropeSemiBold,
		},
		[TypographyTypeTokens.S7]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XXS,
			fontFamily: FontFamilyTokens.manropeSemiBold,
		},
		[TypographyTypeTokens.P5]: {
			color: ColorTokens.Grey_300,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.manropeRegular,
		},
		[TypographyTypeTokens.primary]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.manropeRegular,
		},
		[TypographyTypeTokens.secondary]: {
			color: ColorTokens.Grey_400,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.manropeRegular,
		},
		[TypographyTypeTokens.placeholder]: {
			color: ColorTokens.Grey_300,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.manropeRegular,
		},
	};
