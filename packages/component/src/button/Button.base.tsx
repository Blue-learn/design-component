import {
	ButtonBaseProps,
	ButtonSize,
	ButtonType,
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	FontTokens,
	TypographyDecorationToken,
	TypographyTransformToken,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import {
	ActivityIndicator,
	Pressable,
	StyleSheet,
	Text,
} from 'react-native';
import Typography from '../Typography/Typography';
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

	// console.log(ColorTokens.labelColor);
	const theme = ThemeProvider.getTheme();
	const colorMapping: ColorTokensMap =
		theme.colors;
	console.log(colorMapping[labelColor]);
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
				color={colorMapping[labelColor]}
				label={label}
				fontSize={FontTokens.xl}
				textDecorationLine={
					TypographyDecorationToken.none
				}
				textTransform={
					TypographyTransformToken.uppercase
				}
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
