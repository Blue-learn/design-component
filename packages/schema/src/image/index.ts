import { BorderRadiusTokens } from '../borderRadius';
import { ColorTokens } from '../colors';

export enum AspectRatioToken {
	A16_9 = 'A16_9',
	A9_16 = 'A9_16',
	A4_3 = 'A4_3',
	A3_4 = 'A3_4',
	A1_1 = 'A1_1',
	A2_1 = 'A2_1',
}

export enum ResizeModeToken {
	COVER = 'cover',
	CONTAIN = 'contain',
	STRETCH = 'stretch',
	REPEAT = 'repeat',
	CENTER = 'center',
}

export interface ImageProps {
	size: ImageSizeTokens;
	uri: string;
	borderColor?: ColorTokens;
	borderRadius?: BorderRadiusTokens;
	borderTopRadius?: BorderRadiusTokens;
	borderBottomRadius?: BorderRadiusTokens;
	aspectRatio?: AspectRatioToken;
	resizeMode?: ResizeModeToken;
}

export enum ImageSizeTokens {
	XXXS = 'XXXS',
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
