export enum SpaceTypeTokens {
	XS = 'xs',
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
	XL = 'xl',
}

export type SpaceProps = {
	size: number;
};

export type SpaceTypeTokensMap = {
	[key in SpaceTypeTokens]: number;
};
