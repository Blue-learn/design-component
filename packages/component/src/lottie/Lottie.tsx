import React from 'react';
import LottieView from 'lottie-react-native';
import { LottieProps } from '@blue-learn/schema';

const Lottie: React.FunctionComponent<
	LottieProps
> = ({ uri, width, height }) => {
	if (!uri) return <></>;

	return (
		<LottieView
			source={uri}
			style={{
				height: height,
				width: width,
			}}
			autoPlay
			loop
		/>
	);
};

export default React.memo(Lottie);
export { Lottie };
