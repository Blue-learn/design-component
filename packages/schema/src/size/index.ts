export enum SizeTypeTokens {
	XS = 'XS',
	SM = 'SM',
	MD = 'MD',
	LG = 'LG',
	XL = 'XL',
	XXL = 'XXL',
	XXXL = 'XXXL',
	XXXXL = 'XXXXL',
}

export type SpaceProps = {
	size?: number;
};

export type SizeTypeTokensMap = {
	[key in SizeTypeTokens]?: number;
};
