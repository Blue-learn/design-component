import { CornerRadiusTokens } from '../cornerRadius';

export enum AspectRatioToken {
	'16:9' = 16 / 9,
	'9:16' = 9 / 16,
	'4:3' = 4 / 3,
	'3:4' = 3 / 4,
	'1:1' = 1,
	'2:1' = 2,
}
export interface ImageProps {
	size?: ImageSizeTokens;
	uri?: string;
	borderRadius?: CornerRadiusTokens;
	aspectRatio?: AspectRatioToken;
}

export enum ImageSizeTokens {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl',
	xxxl = 'xxxl',
	full = 'full',
}

export type ImageTypeTokensMap = {
	[key in ImageSizeTokens]: number | string;
};
