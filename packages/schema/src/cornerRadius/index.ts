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
