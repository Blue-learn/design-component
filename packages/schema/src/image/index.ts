import { CornerRadiusTokens } from '../cornerRadius';

export interface ImageProps {
	size?: ImageSizeTokens;
	uri?: string;
	borderRadius?: CornerRadiusTokens;
}

export enum ImageSizeTokens {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
	xxl = 'xxl',
	post = 'post',
}

export type ImageTypeTokensMap = {
	[key in ImageSizeTokens]: number | string;
};
