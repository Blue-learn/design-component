import React from 'react';
import {
	Image as ImageContainer,
	Dimensions,
} from 'react-native';
import { ImageProps } from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';

const { width } = Dimensions.get('window');

const Image: React.FunctionComponent<
	ImageProps
> = ({ size, uri, borderRadius = 0 }) => {
	const theme = ThemeProvider.getTheme();

	const sizeValue = theme.imageSize[size];

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	if (!uri || !size) return <></>;

	return (
		<ImageContainer
			style={{
				height:
					sizeValue === '100%' ? width : sizeValue,
				width:
					sizeValue === '100%' ? width : sizeValue,
				borderRadius: borderRadiusValue,
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
