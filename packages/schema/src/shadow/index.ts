export enum ShadowTypeTokens {
	E1 = 'E1',
	E2 = 'E2',
	E3 = 'E3',
	E5 = 'E5',
}
export type ShadowThemeProps = {
	elevation: number;
	shadowOpacity: number;
	boxShadow: string;
};
export type ShadowTypeTokensMap = {
	[key in ShadowTypeTokens]: ShadowThemeProps;
};
