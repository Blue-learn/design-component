import React from 'react';
import {
	Image as ImageContainer,
	Dimensions,
} from 'react-native';
import {
	AspectRatioToken,
	ImageProps,
	ImageSizeTokens,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';

const { width } = Dimensions.get('window');

const Image: React.FunctionComponent<
	ImageProps
> = ({
	size = ImageSizeTokens.lg,
	uri,
	borderRadius = 0,
	aspectRatio = AspectRatioToken['1:1'],
}) => {
	const theme = ThemeProvider.getTheme();

	const sizeValue = theme.imageSize[size];

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	if (!uri || !size) return <></>;

	return (
		<ImageContainer
			style={{
				width: sizeValue,
				height: 'auto',
				borderRadius: borderRadiusValue,
				aspectRatio,
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
