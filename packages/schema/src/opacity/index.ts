export enum OpacityTypeTokens {
	Transparent = 'transparent',
	Opacity_20 = 'opacity-20',
	Opacity_40 = 'opacity-40',
	Opacity_80 = 'opacity-80',
}
export type OpacityTypeTokensMap = {
	[key in OpacityTypeTokens]: number;
};
