import React, {
	memo,
	useEffect,
	useRef,
} from 'react';
import { Animated, Easing } from 'react-native';
import { ShimmerProps } from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';

const Shimmer: React.FunctionComponent<
	ShimmerProps
> = (props) => {
	const theme = ThemeProvider.getTheme();
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
				borderRadius:
					theme.borderRadius[props.borderRadius] || 12,
				backgroundColor: props?.backgroundColor
					? theme.colors[props.backgroundColor]
					: '#E3E3E3',
				opacity: fadeAnim,
			}}
		/>
	);
};
export default memo(Shimmer);
export { Shimmer };
