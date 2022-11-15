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
		[FontFamilyTokens.ManropeRegular]:
			FontFamilyTokens.ManropeRegular,
		[FontFamilyTokens.ManropeSemiBold]:
			FontFamilyTokens.ManropeSemiBold,
		[FontFamilyTokens.ManropeBold]:
			FontFamilyTokens.ManropeBold,
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
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.HEADING]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.SUBHEADING]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.ManropeSemiBold,
		},

		[TypographyTypeTokens.BODY_2XS]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.XXS,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_XS]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.XS,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_SM]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_MD]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.MD,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_LG]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.LG,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_XL]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.XL,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_2XL]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.XXL,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_2XS_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.XXS,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_XS_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.XS,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_SM_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_MD_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.MD,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_LG_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.LG,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_XL_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.XL,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_2XL_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.XXL,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_2XS_PLACEHOLDER]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XXS,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_XS_PLACEHOLDER]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XS,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_SM_PLACEHOLDER]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_MD_PLACEHOLDER]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.MD,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_LG_PLACEHOLDER]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.LG,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_XL_PLACEHOLDER]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XL,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},
		[TypographyTypeTokens.BODY_2XL_PLACEHOLDER]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XXL,
			fontFamily: FontFamilyTokens.ManropeRegular,
		},

		[TypographyTypeTokens.HEADING_2XS]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.XXS,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_XS]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.XS,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_SM]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_MD]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.MD,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_LG]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.LG,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_XL]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.XL,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_2XL]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.XXL,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_2XS_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.XXS,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_XS_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.XS,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_SM_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_MD_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.MD,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_LG_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.LG,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_XL_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.XL,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_2XL_SECONDARY]: {
			color: ColorTokens.Grey_700,
			fontSize: FontSizeTokens.XXL,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_2XS_PLACEHOLDER]:
			{
				color: ColorTokens.Grey_500,
				fontSize: FontSizeTokens.XXS,
				fontFamily: FontFamilyTokens.ManropeBold,
			},
		[TypographyTypeTokens.HEADING_XS_PLACEHOLDER]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XS,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_SM_PLACEHOLDER]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_MD_PLACEHOLDER]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.MD,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_LG_PLACEHOLDER]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.LG,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_XL_PLACEHOLDER]: {
			color: ColorTokens.Grey_500,
			fontSize: FontSizeTokens.XL,
			fontFamily: FontFamilyTokens.ManropeBold,
		},
		[TypographyTypeTokens.HEADING_2XL_PLACEHOLDER]:
			{
				color: ColorTokens.Grey_500,
				fontSize: FontSizeTokens.XXL,
				fontFamily: FontFamilyTokens.ManropeBold,
			},

		[TypographyTypeTokens.SUBHEADING_2XL]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.XXL,
			fontFamily: FontFamilyTokens.ManropeSemiBold,
		},
		[TypographyTypeTokens.SUBHEADING_XL]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.XL,
			fontFamily: FontFamilyTokens.ManropeSemiBold,
		},
		[TypographyTypeTokens.SUBHEADING_LG]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.LG,
			fontFamily: FontFamilyTokens.ManropeSemiBold,
		},
		[TypographyTypeTokens.SUBHEADING_MD]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.MD,
			fontFamily: FontFamilyTokens.ManropeSemiBold,
		},
		[TypographyTypeTokens.SUBHEADING_SM]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.SM,
			fontFamily: FontFamilyTokens.ManropeSemiBold,
		},
		[TypographyTypeTokens.SUBHEADING_XS]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.XS,
			fontFamily: FontFamilyTokens.ManropeSemiBold,
		},
		[TypographyTypeTokens.SUBHEADING_2XS]: {
			color: ColorTokens.Grey_800,
			fontSize: FontSizeTokens.XXS,
			fontFamily: FontFamilyTokens.ManropeSemiBold,
		},
		[TypographyTypeTokens.SUBHEADING_2XL_SECONDARY]:
			{
				color: ColorTokens.Grey_700,
				fontSize: FontSizeTokens.XXL,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_XL_SECONDARY]:
			{
				color: ColorTokens.Grey_700,
				fontSize: FontSizeTokens.XL,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_LG_SECONDARY]:
			{
				color: ColorTokens.Grey_700,
				fontSize: FontSizeTokens.LG,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_MD_SECONDARY]:
			{
				color: ColorTokens.Grey_700,
				fontSize: FontSizeTokens.MD,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_SM_SECONDARY]:
			{
				color: ColorTokens.Grey_700,
				fontSize: FontSizeTokens.SM,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_XS_SECONDARY]:
			{
				color: ColorTokens.Grey_700,
				fontSize: FontSizeTokens.XS,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_2XS_SECONDARY]:
			{
				color: ColorTokens.Grey_700,
				fontSize: FontSizeTokens.XXS,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_2XL_PLACEHOLDER]:
			{
				color: ColorTokens.Grey_500,
				fontSize: FontSizeTokens.XXL,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_XL_PLACEHOLDER]:
			{
				color: ColorTokens.Grey_500,
				fontSize: FontSizeTokens.XL,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_LG_PLACEHOLDER]:
			{
				color: ColorTokens.Grey_500,
				fontSize: FontSizeTokens.LG,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_MD_PLACEHOLDER]:
			{
				color: ColorTokens.Grey_500,
				fontSize: FontSizeTokens.MD,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_SM_PLACEHOLDER]:
			{
				color: ColorTokens.Grey_500,
				fontSize: FontSizeTokens.SM,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_XS_PLACEHOLDER]:
			{
				color: ColorTokens.Grey_500,
				fontSize: FontSizeTokens.XS,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
		[TypographyTypeTokens.SUBHEADING_2XS_PLACEHOLDER]:
			{
				color: ColorTokens.Grey_500,
				fontSize: FontSizeTokens.XXS,
				fontFamily: FontFamilyTokens.ManropeSemiBold,
			},
	};
