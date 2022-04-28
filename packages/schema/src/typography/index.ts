import { ColorTokens } from '../colors';

export enum TypographyDecorationToken {
	none = 'none',
	underline = 'underline',
	lineThrough = 'line-through',
}

export enum TypographyTransformToken {
	none = 'none',
	uppercase = 'uppercase',
	lowercase = 'lowercase',
	capitalize = 'capitalize',
}

export enum FontSizeTokens {
	'2xs' = 10,
	'xs' = 12,
	'sm' = 14,
	'md' = 16,
	'lg' = 18,
	'xl' = 20,
	'2xl' = 24,
	'3xl' = 28,
	'4xl' = 32,
	'5xl' = 40,
	'6xl' = 48,
	'7xl' = 60,
}

export enum FontFamilyTokens {
	'openSans' = 'open-sans',
}

export type FontFamilyTokensMap = {
	[key in FontFamilyTokens]: string;
};

export enum FontWeightTokens {
	'normal' = 400,
	'bold' = 800,
	'semi-bold' = 600,
}

export type TypographyBaseProps = {
	label?: String;
	color?: ColorTokens;
	fontSize?: FontSizeTokens;
	fontWeight?: FontWeightTokens;
	fontFamily?: FontFamilyTokens;
	textDecorationLine?: TypographyDecorationToken;
	textTransform?: TypographyTransformToken;
};

export type TypographyProps = {
	label?: String;
	color?: ColorTokens;
	fontSize?: FontSizeTokens;
	fontWeight?: FontWeightTokens;
	fontFamily?: FontFamilyTokens;
	textDecorationLine?: TypographyDecorationToken;
	textTransform?: TypographyTransformToken;
};
