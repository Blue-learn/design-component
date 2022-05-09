export enum ShadowTypeTokens {
	E1 = 'E1',
	E2 = 'E2',
	E3 = 'E3',
	E4 = 'E4',
	E5 = 'E5',
}
export type ShadowThemeProps = {
	shadowOffset?: {
		width: number;
		height: number;
	};
	shadowOpacity?: number;
	shadowRadius?: number;
};
export type ShadowTypeTokensMap = {
	[key in ShadowTypeTokens]: ShadowThemeProps;
};
