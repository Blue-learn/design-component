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
	'2xs' = '2xs',
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	'2xl' = '2xl',
	'3xl' = '3xl',
	'4xl' = '4xl',
	'5xl' = '5xl',
	'6xl' = '6xl',
	'7xl' = '7xl',
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

export enum FontWeightTokens {
	normal = 400,
	bold = 800,
	semiBold = 600,
}

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
	primary = 'primary',
	secondary = 'secondary',
	placeholder = 'placeholder',
}

export type TypographyThemeProps = {
	color?: ColorTokens;
};

export type TypographyBaseProps = {
	label?: String;
	color?: ColorTokens;
	fontSize?: FontSizeTokens;
	fontWeight?: FontWeightTokens;
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
	fontWeight?: FontWeightTokens;
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
