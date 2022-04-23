export enum SpaceTypeTokens {
	SpaceNil = 'space-nil',
	SpaceXXXSmall = 'space-xxxs',
	SpaceXXSmall = 'space-xxs',
	SpaceXSmall = 'space-xs',
	SpaceSmall = 'space-s',
	SpaceBase = 'space-base',
	SpaceLarge = 'space-l',
	SpaceXLarge = 'space-xl',
	SpaceXXLarge = 'space-xxl',
	SpaceHuge = 'space-h',
	SpaceXHuge = 'space-xh',
	SpaceXXHuge = 'space-xxh',
	SpaceXXXHuge = 'space-xxxh',
}

export type BaseSpaceProps = {
	size: number;
};

export type SpaceTypeTokensMap = {
	[key in SpaceTypeTokens]: BaseSpaceProps;
};
