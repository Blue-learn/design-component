import React from 'react';
import FastImage from 'react-native-fast-image';
import {
	Platform,
	Image as RImage,
} from 'react-native';
import {
	AspectRatioToken,
	BorderRadiusTokens,
	ColorTokens,
	ImageProps,
	ImageSizeTokens,
	ResizeModeToken,
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
	borderColor,
	resizeMode = ResizeModeToken.COVER,
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
	const borderColorValue =
		theme.colors[borderColor];

	if (!uri || !size) return <></>;

	const styleProps = React.useMemo(
		() => ({
			width: sizeValue,
			height: 'auto',
			borderRadius: borderRadiusValue,
			borderTopLeftRadius: borderTopRadiusValue,
			borderTopRightRadius: borderTopRadiusValue,
			borderBottomLeftRadius:
				borderBottomRadiusValue,
			borderBottomRightRadius:
				borderBottomRadiusValue,
			borderWidth: borderColor ? 3 : 0,
			aspectRatio: aspectRatioValue,
			borderColor: borderColorValue,
			backgroundColor:
				theme.colors[ColorTokens.Grey_50],
		}),
		[
			sizeValue,
			borderRadiusValue,
			borderColorValue,
			borderTopRadiusValue,
			borderBottomRadiusValue,
			aspectRatioValue,
		],
	);
	if (Platform?.OS !== 'web') {
		return (
			<FastImage
				style={styleProps}
				source={{
					uri: uri,
					priority: FastImage.priority.normal,
				}}
				resizeMode={
					resizeMode === ResizeModeToken.CONTAIN
						? FastImage.resizeMode.contain
						: FastImage.resizeMode.cover
				}
			/>
		);
	} else
		return (
			<RImage
				style={styleProps}
				source={{
					uri: uri,
				}}
				resizeMode={resizeMode}
			/>
		);
};

export default React.memo(Image);
export { Image };
