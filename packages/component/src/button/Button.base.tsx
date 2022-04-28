import {
	ButtonBaseProps,
	ButtonSize,
	ButtonType,
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	CornerRadiusTokensMap,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import {
	ActivityIndicator,
	Pressable,
	StyleSheet,
	Text,
} from 'react-native';
import ThemeProvider from '@blue-learn/theme';

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
	loading = false,
	bgColor = ColorTokens.Blue_600,
	labelColor = ColorTokens.Black,
	borderRadius = CornerRadiusTokens.BR4,
	paddingVertical = CornerRadiusTokens.BR4,
}) => {
	/**
	 * use type, size, buttonThemePros, colorMapping to full customise base component
	 * */

	const theme = ThemeProvider.getTheme();

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const backgroundColorValue =
		theme.colors[bgColor];

	const labelColorValue: ColorTokensMap =
		theme.colors[labelColor];

	const paddingValue: ColorTokensMap =
		theme.space[paddingVertical];

	return (
		<Pressable
			style={[
				styles.container,
				{
					backgroundColor: backgroundColorValue,
					borderRadius: borderRadiusValue,
					paddingVertical: paddingValue,
				},
			]}
			onPress={onPress}
		>
			<Text
				style={{
					color: labelColorValue,
					fontWeight: 600,
				}}
			>
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
