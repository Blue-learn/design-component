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
	manropeSemiBold = 'Manrope-SemiBold',
	manropeBold = 'Manrope-Bold',
	manropeRegular = 'Manrope-Regular',
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
	 * @description Default text color,Manrope-Regular,14px
	 */
	DEFAULT = 'DEFAULT',
	/**
	 * @description Title,Manrope-Bold,12px
	 */
	H7 = 'H7',
	H6 = 'H6',
	H5 = 'H5',
	H4 = 'H4',
	H3 = 'H3',
	H2 = 'H2',
	H1 = 'H1',
	P5 = 'P5',
	B7 = 'B7',
	B6 = 'B6',
	B5 = 'B5',
	B4 = 'B4',
	B3 = 'B3',
	S1 = 'S1',
	S2 = 'S2',
	S3 = 'S3',
	S4 = 'S4',
	S5 = 'S5',
	S6 = 'S6',
	S7 = 'S7',
	/**
	 * @deprecated
	 */
	primary = 'primary',
	/**
	 * @deprecated
	 */
	secondary = 'secondary',
	/**
	 * @deprecated
	 */
	placeholder = 'placeholder',
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
