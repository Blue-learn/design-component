import {
	ButtonBaseProps,
	ButtonSize,
	ButtonType,
	ColorTokens,
	CornerRadiusTokens,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import {
	ActivityIndicator,
	Pressable,
	StyleSheet,
	Text,
} from 'react-native';

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
	labelColor = ColorTokens.Black,
	borderRadius = CornerRadiusTokens.BR4,
	paddingVertical = 8,
}) => {
	/**
	 * use type, size, buttonThemePros, colorMapping to full customise base component
	 * */

	console.log(paddingVertical);

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
			<Text style={{ color: labelColor }}>
				{label}
			</Text>
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
