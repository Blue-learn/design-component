export enum FontTokens {
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
