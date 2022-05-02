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
	'xs' = 'xs',
	'sm' = 'sm',
	'md' = 'md',
	'lg' = 'lg',
	'xl' = 'xl',
	'2xl' = '2xl',
	'3xl' = '3xl',
	'4xl' = '4xl',
	'5xl' = '5xl',
	'6xl' = '6xl',
	'7xl' = '7xl',
}

export type FontSizeTokensMap = {
	[key in FontFamilyTokens]: string;
};

export const FontSizeTokensMap = {
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
	textDecorationLine?: FontDecorationToken;
	textTransform?: FontTransformToken;
};

export type TypographyProps = {
	label?: String;
	color?: ColorTokens;
	fontSize?: FontSizeTokens;
	fontWeight?: FontWeightTokens;
	fontFamily?: FontFamilyTokens;
	textDecorationLine?: FontDecorationToken;
	textTransform?: FontTransformToken;
};
