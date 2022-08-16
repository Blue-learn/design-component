import { BorderRadiusTokens } from '../borderRadius';

export enum AspectRatioToken {
	A16_9 = 'A16_9',
	A9_16 = 'A9_16',
	A4_3 = 'A4_3',
	A3_4 = 'A3_4',
	A1_1 = 'A1_1',
	A2_1 = 'A2_1',
}
export interface ImageProps {
	size: ImageSizeTokens;
	uri: string;
	borderRadius?: BorderRadiusTokens;
	borderTopRadius?: BorderRadiusTokens;
	borderBottomRadius?: BorderRadiusTokens;
	aspectRatio?: AspectRatioToken;
}

export enum ImageSizeTokens {
	XXS = 'XXS',
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

export type AspectRatioTokensMap = {
	[key in AspectRatioToken]: number;
};
