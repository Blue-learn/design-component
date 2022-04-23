export enum ShadowTypeTokens {
	ShadowLow = 'shadow-low',
	ShadowMedium = 'shadow-medium',
	ShadowHigh = 'shadow-high',
	ShadowHighUp = 'shadow-high-up',
}
export type ShadowThemeProps = {
	elevation: number;
	shadowOpacity: number;
	boxShadow: string;
};
export type ShadowTypeTokensMap = {
	[key in ShadowTypeTokens]: ShadowThemeProps;
};
