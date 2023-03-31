export enum SizeTypeTokens {
	NONE = 'NONE',
	XS = 'XS',
	SM = 'SM',
	MD = 'MD',
	ML = 'ML',
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
