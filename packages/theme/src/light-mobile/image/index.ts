import {
	ImageTypeTokensMap,
	ImageSizeTokens,
} from '@blue-learn/schema';

export const imageTypeTokensMap: ImageTypeTokensMap =
	{
		[ImageSizeTokens.xs]: 24,
		[ImageSizeTokens.sm]: 36,
		[ImageSizeTokens.md]: 48,
		[ImageSizeTokens.lg]: 72,
		[ImageSizeTokens.xl]: 96,
		[ImageSizeTokens.xxl]: 128,
		[ImageSizeTokens.post]: '100%',
	};
