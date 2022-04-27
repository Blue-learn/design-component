import React, { memo } from 'react';
import {
	ButtonBaseProps,
	ButtonSize,
	ButtonThemeProps,
	ButtonType,
	ButtonTypeTokens,
	ColorTokens,
	ColorTokensMap,
} from '@blue-learn/schema';
import {
	Pressable,
	Text,
	StyleSheet,
	ActivityIndicator,
	View,
} from 'react-native';
import ThemeProvider from '@blue-learn/theme';
const styles = StyleSheet.create({
	container: {
		height: 50,
		width: 300,
		justifyContent: 'center',
		alignItems: 'center',
	},
	indicator: {
		position: 'absolute',
		right: 8,
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
	size = ButtonSize.Big,
	loading = false,
	bgColor = ColorTokens.Blue_50,
	labelColor = ColorTokens.Black,
}) => {
	const theme = ThemeProvider.getTheme();
	const buttonThemeProps: ButtonThemeProps =
		theme.button[ButtonType.Filled];
	const colorMapping: ColorTokensMap =
		theme.colors;

	/**
	 * use type, size, buttonThemePros, colorMapping to full customise base component
	 * */

	return (
		<Pressable
			style={[
				styles.container,
				{ backgroundColor: colorMapping[bgColor] },
			]}
			onPress={onPress}
		>
			<Text
				style={{ color: colorMapping[labelColor] }}
			>
				{label}
			</Text>
			{loading && (
				<ActivityIndicator
					style={styles.indicator}
					animating
					color={bgColor}
				/>
			)}
		</Pressable>
	);
};
export default memo(ButtonBase);
export { ButtonBase };
