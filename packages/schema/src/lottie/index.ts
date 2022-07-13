import { AspectRatioToken } from '../image';

export enum LottieSizeTokens {
	XS = 'XS',
	SM = 'SM',
	MD = 'MD',
	LG = 'LG',
	XL = 'XL',
	XXL = 'XXL',
	XXXL = 'XXXL',
	FULL = 'FULL',
}

export interface LottieProps {
	uri: string;
	size: LottieSizeTokens;
	aspectRatio?: AspectRatioToken;
	loop?: boolean;
	autoplay?: boolean;
}

export type LottieSizeTokensMap = {
	[key in LottieSizeTokens]: number | string;
};
