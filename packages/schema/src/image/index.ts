import { BorderRadiusTokens } from '../borderRadius';

export enum AspectRatioToken {
	A16_9 = 16 / 9,
	A9_16 = 9 / 16,
	A4_3 = 4 / 3,
	A3_4 = 3 / 4,
	A1_1 = 1,
	A2_1 = 2,
}
export interface ImageProps {
	size?: ImageSizeTokens;
	uri: string;
	borderRadius?: BorderRadiusTokens;
	aspectRatio?: AspectRatioToken;
}

export enum ImageSizeTokens {
	XS = 'XS',
	SM = 'SM',
	MD = 'MD',
	LG = 'LG',
	XL = 'XL',
	XXL = 'XXL',
	XXXL = 'XXXL',
	FULL = 'FULL',
}

export type ImageTypeTokensMap = {
	[key in ImageSizeTokens]: number | string;
};
