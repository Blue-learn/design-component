import React from 'react';
import LottieView from 'lottie-react-native';
import {
	AspectRatioToken,
	LottieProps,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';

const Lottie: React.FunctionComponent<
	LottieProps
> = ({
	uri,
	size,
	autoplay = true,
	aspectRatio = AspectRatioToken.A1_1,
	loop = true,
}) => {
	const theme = ThemeProvider.getTheme();

	const sizeValue = theme.lottieSize[size];
	const aspectRatioValue =
		theme.aspectRatio[aspectRatio];

	if (!uri && !size) return <></>;

	return (
		<LottieView
			source={uri}
			style={{
				width: sizeValue,
				height: 'auto',
				aspectRatio: aspectRatioValue,
			}}
			autoPlay={autoplay}
			loop={loop}
		/>
	);
};

export default React.memo(Lottie);
export { Lottie };
