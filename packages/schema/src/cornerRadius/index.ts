export enum CornerRadiusTokens {
	CornerSharp = 'corner-sharp',
	CornerSmall = 'corner-s',
	CornerBase = 'corner-base',
	CornerLarge = 'corner-l',
	Corner_X_Large = 'corner-xl',
	Corner_Circular = 'corner-circular',
}

export type CornerRadiusTokensMap = {
	[key in CornerRadiusTokens]: number;
};

export const cornerRadiusTokensMap: CornerRadiusTokensMap =
	{
		'corner-sharp': 8,
		'corner-s': 12,
		'corner-base': 16,
		'corner-l': 24,
		'corner-xl': 32,
		'corner-circular': 100,
	};
