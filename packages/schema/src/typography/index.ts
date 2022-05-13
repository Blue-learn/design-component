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

export type TypographyBaseProps = {
	label?: String;
	color?: ColorTokens;
	fontSize?: FontSizeTokens;
	fontWeight?: FontWeightTokens;
	fontFamily?: FontFamilyTokens;
	textDecorationLine?: FontDecorationToken;
	textTransform?: FontTransformToken;
	ellipSizeMode?: EllipsizeModeTokens;
	numberOfLines?: number;
};

export type TypographyProps = {
	label?: String;
	color?: ColorTokens;
	fontSize?: FontSizeTokens;
	fontWeight?: FontWeightTokens;
	fontFamily?: FontFamilyTokens;
	textDecorationLine?: FontDecorationToken;
	textTransform?: FontTransformToken;
	ellipSizeMode?: EllipsizeModeTokens;
	numberOfLines?: number;
};
