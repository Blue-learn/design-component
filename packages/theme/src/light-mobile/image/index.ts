import {
	ImageTypeTokensMap,
	ImageSizeTokens,
} from '@blue-learn/schema';

export const imageTypeTokensMap: ImageTypeTokensMap =
	{
		[ImageSizeTokens.XS]: 24,
		[ImageSizeTokens.SM]: 36,
		[ImageSizeTokens.MD]: 48,
		[ImageSizeTokens.LG]: 72,
		[ImageSizeTokens.XL]: 96,
		[ImageSizeTokens.XXL]: 128,
		[ImageSizeTokens.XXXL]: 180,
		[ImageSizeTokens.FULL]: '100%',
	};
