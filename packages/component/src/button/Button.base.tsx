import {
	ButtonBaseProps,
	ButtonSize,
	ButtonType,
	ColorTokens,
	CornerRadiusTokens,
	FontSizeTokens,
	FontDecorationToken,
	FontTransformToken,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import {
	ActivityIndicator,
	Pressable,
	StyleSheet,
	Text,
} from 'react-native';
import Typography from '../typography/Typography';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		flexDirection: 'row',
	},
	indicator: {
		marginLeft: 8,
	},
});
/**
 * Raw Component with Derived props + Theme
 */
const ButtonBase: React.FunctionComponent<
	ButtonBaseProps
> = ({
	onPress,
	label = 'Button',
	type = ButtonType.Filled,
	size = ButtonSize.Medium,
	loading = false,
	bgColor = ColorTokens.Blue_600,
	labelColor = ColorTokens.White,
	borderRadius = CornerRadiusTokens.BR4,
	paddingVertical = 8,
}) => {
	/**
	 * use type, size, buttonThemePros, colorMapping to full customise base component
	 * */

	return (
		<Pressable
			style={[
				styles.container,
				{
					backgroundColor: bgColor,
					borderRadius,
					paddingVertical,
				},
			]}
			onPress={onPress}
		>
			<Typography
				color={labelColor}
				label={label}
				fontSize={FontSizeTokens.xl}
				textDecorationLine={FontDecorationToken.none}
				textTransform={FontTransformToken.uppercase}
			/>
			{loading && (
				<ActivityIndicator
					style={styles.indicator}
					animating
					color='#fff'
				/>
			)}
		</Pressable>
	);
};
export default memo(ButtonBase);
export { ButtonBase };
