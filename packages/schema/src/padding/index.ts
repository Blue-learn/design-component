export enum PaddingTypeTokens {
	PaddingNil = 'padding-nil',
	PaddingSmall = 'padding-small',
	PaddingBase = 'padding-base',
	PaddingXSmall = 'padding-x-small',
}

export type PaddingTypeTokensMap = {
	[key in PaddingTypeTokens]: number;
};
