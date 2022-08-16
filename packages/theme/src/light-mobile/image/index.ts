import {
	ImageTypeTokensMap,
	ImageSizeTokens,
	AspectRatioToken,
	AspectRatioTokensMap,
} from '@blue-learn/schema';

export const imageTypeTokensMap: ImageTypeTokensMap =
	{
		[ImageSizeTokens.XXS]: 16,
		[ImageSizeTokens.XS]: 24,
		[ImageSizeTokens.SM]: 36,
		[ImageSizeTokens.MD]: 48,
		[ImageSizeTokens.LG]: 72,
		[ImageSizeTokens.XL]: 96,
		[ImageSizeTokens.XXL]: 128,
		[ImageSizeTokens.XXXL]: 180,
		[ImageSizeTokens.FULL]: '100%',
	};

export const aspectRationTokensMap: AspectRatioTokensMap =
	{
		[AspectRatioToken.A1_1]: 1,
		[AspectRatioToken.A2_1]: 2,
		[AspectRatioToken.A4_3]: 4 / 3,
		[AspectRatioToken.A3_4]: 3 / 4,
		[AspectRatioToken.A16_9]: 16 / 9,
		[AspectRatioToken.A9_16]: 9 / 16,
	};
