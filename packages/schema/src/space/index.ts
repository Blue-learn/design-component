export enum SpaceTypeTokens {
	XS = 'xs',
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
	XL = 'xl',
	'2XL' = '2xl',
	'3XL' = '3xl',
	'4XL' = '4xl',
}

export type SpaceProps = {
	size: number;
};

export type SpaceTypeTokensMap = {
	[key in SpaceTypeTokens]: number;
};
