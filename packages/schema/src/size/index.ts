export enum SizeTypeTokens {
	NONE = 'NONE',
	XS = 'XS',
	SM = 'SM',
	MD = 'MD',
	LG = 'LG',
	XL = 'XL',
	XXL = 'XXL',
	XXXL = 'XXXL',
	XXXXL = 'XXXXL',
	XXXXXL = 'XXXXXL',
	XXXXXXL = 'XXXXXXL',
}

export type SpaceProps = {
	size: SizeTypeTokens;
};

export type SizeTypeTokensMap = {
	[key in SizeTypeTokens]?: number;
};
