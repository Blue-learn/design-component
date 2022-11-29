import { ColorTokens } from '../colors';

export enum FontDecorationToken {
	none = 'none',
	underline = 'underline',
	lineThrough = 'line-through',
}

export enum FontTransformToken {
	none = 'none',
	uppercase = 'uppercase',
	lowercase = 'lowercase',
	capitalize = 'capitalize',
}

export enum FontSizeTokens {
	XXS = 'XXS',
	XS = 'XS',
	SM = 'SM',
	MD = 'MD',
	LG = 'LG',
	XL = 'XL',
	XXL = 'XXL',
	XXXL = 'XXXL',
	XXXXL = 'XXXXl',
	XXXXXL = 'XXXXXl',
	XXXXXXL = 'XXXXXXl',
	XXXXXXXL = 'XXXXXXXl',
}

export type FontSizeTokensMap = {
	[key in FontSizeTokens]: number;
};

export enum FontFamilyTokens {
	InterSemiBold = 'Inter-SemiBold',
	InterBold = 'Inter-Bold',
	InterRegular = 'Inter-Regular',
}

export type FontFamilyTokensMap = {
	[key in FontFamilyTokens]: string;
};

export enum EllipsizeModeTokens {
	head = 'head',
	middle = 'middle',
	tail = 'tail',
	clip = 'clip',
}

export enum TextAlignTokens {
	auto = 'auto',
	left = 'left',
	right = 'right',
	center = 'center',
	justify = 'justify',
}

export enum TypographyTypeTokens {
	/**
	 * @description Default Sm(14px),Regular, Primary Color
	 */
	DEFAULT = 'DEFAULT',
	/**
	 * @description Heading Sm(14px), Bold, Primary Color
	 */
	HEADING = 'HEADING',
	/**
	 * @description Subheading Sm(14px), SemiBold, Primary Color
	 */
	SUBHEADING = 'SUBHEADING',

	BODY_2XS = 'BODY_2XS',
	BODY_XS = 'BODY_XS',
	BODY_SM = 'BODY_SM',
	BODY_MD = 'BODY_MD',
	BODY_LG = 'BODY_LG',
	BODY_XL = 'BODY_XL',
	BODY_2XL = 'BODY_2XL',

	BODY_2XS_SECONDARY = 'BODY_2XS_SECONDARY',
	BODY_XS_SECONDARY = 'BODY_XS_SECONDARY',
	BODY_SM_SECONDARY = 'BODY_SM_SECONDARY',
	BODY_MD_SECONDARY = 'BODY_MD_SECONDARY',
	BODY_LG_SECONDARY = 'BODY_LG_SECONDARY',
	BODY_XL_SECONDARY = 'BODY_XL_SECONDARY',
	BODY_2XL_SECONDARY = 'BODY_2XL_SECONDARY',

	BODY_2XS_PLACEHOLDER = 'BODY_2XS_PLACEHOLDER',
	BODY_XS_PLACEHOLDER = 'BODY_XS_PLACEHOLDER',
	BODY_SM_PLACEHOLDER = 'BODY_SM_PLACEHOLDER',
	BODY_MD_PLACEHOLDER = 'BODY_MD_PLACEHOLDER',
	BODY_LG_PLACEHOLDER = 'BODY_LG_PLACEHOLDER',
	BODY_XL_PLACEHOLDER = 'BODY_XL_PLACEHOLDER',
	BODY_2XL_PLACEHOLDER = 'BODY_2XL_PLACEHOLDER',

	HEADING_2XS = 'HEADING_2XS',
	HEADING_XS = 'HEADING_XS',
	HEADING_SM = 'HEADING_SM',
	HEADING_MD = 'HEADING_MD',
	HEADING_LG = 'HEADING_LG',
	HEADING_XL = 'HEADING_XL',
	HEADING_2XL = 'HEADING_2XL',

	HEADING_2XS_SECONDARY = 'HEADING_2XS_SECONDARY',
	HEADING_XS_SECONDARY = 'HEADING_XS_SECONDARY',
	HEADING_SM_SECONDARY = 'HEADING_SM_SECONDARY',
	HEADING_MD_SECONDARY = 'HEADING_MD_SECONDARY',
	HEADING_LG_SECONDARY = 'HEADING_LG_SECONDARY',
	HEADING_XL_SECONDARY = 'HEADING_XL_SECONDARY',
	HEADING_2XL_SECONDARY = 'HEADING_2XL_SECONDARY',

	HEADING_2XS_PLACEHOLDER = 'HEADING_2XS_PLACEHOLDER',
	HEADING_XS_PLACEHOLDER = 'HEADING_XS_PLACEHOLDER',
	HEADING_SM_PLACEHOLDER = 'HEADING_SM_PLACEHOLDER',
	HEADING_MD_PLACEHOLDER = 'HEADING_MD_PLACEHOLDER',
	HEADING_LG_PLACEHOLDER = 'HEADING_LG_PLACEHOLDER',
	HEADING_XL_PLACEHOLDER = 'HEADING_XL_PLACEHOLDER',
	HEADING_2XL_PLACEHOLDER = 'HEADING_2XL_PLACEHOLDER',

	SUBHEADING_2XS = 'SUBHEADING_2XS',
	SUBHEADING_XS = 'SUBHEADING_XS',
	SUBHEADING_SM = 'SUBHEADING_SM',
	SUBHEADING_MD = 'SUBHEADING_MD',
	SUBHEADING_LG = 'SUBHEADING_LG',
	SUBHEADING_XL = 'SUBHEADING_XL',
	SUBHEADING_2XL = 'SUBHEADING_2XL',

	SUBHEADING_2XS_SECONDARY = 'SUBHEADING_2XS_SECONDARY',
	SUBHEADING_XS_SECONDARY = 'SUBHEADING_XS_SECONDARY',
	SUBHEADING_SM_SECONDARY = 'SUBHEADING_SM_SECONDARY',
	SUBHEADING_MD_SECONDARY = 'SUBHEADING_MD_SECONDARY',
	SUBHEADING_LG_SECONDARY = 'SUBHEADING_LG_SECONDARY',
	SUBHEADING_XL_SECONDARY = 'SUBHEADING_XL_SECONDARY',
	SUBHEADING_2XL_SECONDARY = 'SUBHEADING_2XL_SECONDARY',

	SUBHEADING_2XS_PLACEHOLDER = 'SUBHEADING_2XS_PLACEHOLDER',
	SUBHEADING_XS_PLACEHOLDER = 'SUBHEADING_XS_PLACEHOLDER',
	SUBHEADING_SM_PLACEHOLDER = 'SUBHEADING_SM_PLACEHOLDER',
	SUBHEADING_MD_PLACEHOLDER = 'SUBHEADING_MD_PLACEHOLDER',
	SUBHEADING_LG_PLACEHOLDER = 'SUBHEADING_LG_PLACEHOLDER',
	SUBHEADING_XL_PLACEHOLDER = 'SUBHEADING_XL_PLACEHOLDER',
	SUBHEADING_2XL_PLACEHOLDER = 'SUBHEADING_2XL_PLACEHOLDER',
}

export type TypographyThemeProps = {
	color?: ColorTokens;
	fontFamily?: FontFamilyTokens;
	fontSize?: FontSizeTokens;
};

export type TypographyBaseProps = {
	label?: String;
	color?: ColorTokens;
	fontSize?: FontSizeTokens;
	fontFamily?: FontFamilyTokens;
	textDecorationLine?: FontDecorationToken;
	textTransform?: FontTransformToken;
	ellipsizeMode?: EllipsizeModeTokens;
	numberOfLines?: number;
	textAlign?: TextAlignTokens;
};

export type TypographyProps = {
	label?: String;
	color?: ColorTokens;
	fontSize?: FontSizeTokens;
	fontFamily?: FontFamilyTokens;
	textDecorationLine?: FontDecorationToken;
	textTransform?: FontTransformToken;
	ellipsizeMode?: EllipsizeModeTokens;
	numberOfLines?: number;
	textAlign?: TextAlignTokens;
	type?: TypographyTypeTokens;
};

export type TypographyTypeTokensMap = {
	[key in TypographyTypeTokens]: TypographyThemeProps;
};
