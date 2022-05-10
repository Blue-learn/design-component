import {
	ButtonBaseProps,
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	FontSizeTokens,
	FontWeightTokens,
	IconSizeTokens,
	ShadowThemeProps,
	SpaceTypeTokens,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';
import React, { memo } from 'react';
import {
	ActivityIndicator,
	Pressable,
	StyleSheet,
	Text,
} from 'react-native';
import Icon from '../icon/Icon';
import Space from '../space/Space';
import Typography from '../typography/Typography';

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
	label,
	loading = false,
	bgColor = ColorTokens.Aqua_10,
	labelColor = ColorTokens.Black,
	borderRadius = CornerRadiusTokens.BR4,
	paddingVertical = SpaceTypeTokens.LG,
	shadow,
	borderColor,
	fontSize = FontSizeTokens.lg,
	iconAlignment = 'left',
	iconName,
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

	const labelColorValue = theme.colors[labelColor];

	const paddingValue =
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
			{iconAlignment === 'left' &&
				!loading &&
				iconName && (
					<>
						<Icon
							name={iconName}
							size={fontSize as any}
							color={labelColor}
						/>
						<Space size={8} />
					</>
				)}

			{label && (
				<Typography
					label={label}
					color={labelColor}
					fontWeight={FontWeightTokens['semi-bold']}
					fontSize={fontSize}
				/>
			)}

			{loading && (
				<ActivityIndicator
					style={styles.indicator}
					animating
					color={labelColorValue}
				/>
			)}

			{iconAlignment === 'right' &&
				iconName &&
				!loading && (
					<>
						<Space size={8} />
						<Icon
							name={iconName}
							size={fontSize as any}
							color={labelColor}
						/>
					</>
				)}
		</Pressable>
	);
};
export default memo(ButtonBase);
export { ButtonBase };
