import {
	ButtonBaseProps,
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	ShadowThemeProps,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';
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
		// position: 'absolute',
		// right: 8,
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
	shadow,
	borderColor,
}) => {
	/**
	 * use type, size, buttonThemePros, colorMapping to full customise base component
	 * */

	const theme = ThemeProvider.getTheme();

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const borderColorValue =
		theme.colors[borderColor];

	const backgroundColorValue =
		theme.colors[bgColor];

	const labelColorValue: ColorTokensMap =
		theme.colors[labelColor];

	const paddingValue: ColorTokensMap =
		theme.space[paddingVertical];

	const shadowValue: ShadowThemeProps =
		theme.shadow[shadow];

	return (
		<Pressable
			style={[
				styles.container,
				{
					backgroundColor: backgroundColorValue,
					borderRadius: borderRadiusValue,
					paddingVertical: paddingValue,
					borderColor: borderColorValue,
					borderWidth: borderColor ? 1 : 0,
					shadowOffset: shadowValue?.shadowOffset || {
						height: 0,
						width: 0,
					},
					shadowOpacity:
						shadowValue?.shadowOpacity || 0,
					shadowRadius: shadowValue?.shadowRadius || 0,
				},
			]}
			onPress={onPress}
		>
			{label && (
				<Text
					style={{
						color: labelColorValue,
						fontWeight: 600,
					}}
				>
					{label}
				</Text>
			)}
			{loading && (
				<ActivityIndicator
					style={styles.indicator}
					animating
					color={labelColorValue}
				/>
			)}
		</Pressable>
	);
};
export default memo(ButtonBase);
export { ButtonBase };
