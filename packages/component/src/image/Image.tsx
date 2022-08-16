import React from 'react';
import { Image as ImageContainer } from 'react-native';
import {
	AspectRatioToken,
	BorderRadiusTokens,
	ImageProps,
	ImageSizeTokens,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';

const Image: React.FunctionComponent<
	ImageProps
> = ({
	uri,
	size = ImageSizeTokens.LG,
	borderRadius = BorderRadiusTokens.BR0,
	borderBottomRadius,
	borderTopRadius,
	aspectRatio = AspectRatioToken.A1_1,
}) => {
	const theme = ThemeProvider.getTheme();

	const sizeValue = theme.imageSize[size];
	const aspectRatioValue =
		theme.aspectRatio[aspectRatio];
	const borderRadiusValue =
		theme.borderRadius[borderRadius];
	const borderTopRadiusValue =
		theme.borderRadius[borderTopRadius];
	const borderBottomRadiusValue =
		theme.borderRadius[borderBottomRadius];

	if (!uri || !size) return <></>;

	return (
		<ImageContainer
			style={{
				width: sizeValue,
				height: 'auto',
				borderRadius: borderRadiusValue,
				borderTopLeftRadius: borderTopRadiusValue,
				borderTopRightRadius: borderTopRadiusValue,
				borderBottomLeftRadius:
					borderBottomRadiusValue,
				borderBottomRightRadius:
					borderBottomRadiusValue,
				aspectRatio: aspectRatioValue,
			}}
			source={{
				uri,
			}}
			resizeMode='cover'
		/>
	);
};

export default React.memo(Image);
export { Image };
