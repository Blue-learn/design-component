export enum CornerRadiusTokens {
	BR1 = 'BR1',
	BR2 = 'BR2',
	BR3 = 'BR3',
	BR4 = 'BR4',
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
