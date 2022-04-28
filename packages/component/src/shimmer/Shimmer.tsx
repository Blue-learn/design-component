import React, {
	memo,
	useEffect,
	useRef,
} from 'react';
import { Animated, Easing } from 'react-native';
import { ShimmerProps } from '@blue-learn/schema';

const Shimmer: React.FunctionComponent<
	ShimmerProps
> = (props) => {
	const fadeAnim = useRef(
		new Animated.Value(0.5),
	).current;
	const animation = useRef(
		Animated.loop(
			Animated.timing(fadeAnim, {
				useNativeDriver: true,
				toValue: 0.8,
				easing: Easing.bezier(0.8, -0.4, 0.4, 1.4),
				duration: 1500,
			}),
		),
	).current;

	const startAnimation = () => {
		animation.start();
	};
	const stopAnimation = () => {
		animation.stop();
	};

	useEffect(() => {
		startAnimation();
		return stopAnimation;
	}, []);

	return (
		<Animated.View
			style={{
				...props,
				backgroundColor:
					props.backgroundColor || '#EDEDED',
				opacity: fadeAnim,
			}}
		/>
	);
};
export default memo(Shimmer);
export { Shimmer };
