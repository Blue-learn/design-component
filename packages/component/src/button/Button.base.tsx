import {
	ButtonBaseProps,
	ColorTokens,
	CornerRadiusTokens,
	FontFamilyTokens,
	FontSizeTokens,
	FontWeightTokens,
	ShadowThemeProps,
	SpaceTypeTokens,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';
import React, { memo } from 'react';
import {
	ActivityIndicator,
	Pressable,
	StyleSheet,
	View,
} from 'react-native';
import Icon from '../icon/Icon';
import Space from '../space/Space';
import Typography from '../typography/Typography';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		userSelect: 'none',
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
	width = 'content',
	paddingHorizontal = SpaceTypeTokens['4XL'],
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

	const paddingHorizontalValue =
		theme.space[paddingHorizontal];

	return (
		<View
			style={
				width === 'content'
					? {
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
					  }
					: {}
			}
		>
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
						shadowRadius:
							shadowValue?.shadowRadius || 0,
						paddingHorizontal: paddingHorizontalValue,
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
							{label && <Space size={8} />}
						</>
					)}

				{label && (
					<Typography
						label={label}
						color={labelColor}
						fontWeight={FontWeightTokens.bold}
						fontSize={fontSize}
					/>
				)}

				{loading && (
					<ActivityIndicator
						style={{ marginLeft: label ? 8 : 0 }}
						animating
						color={labelColorValue}
					/>
				)}

				{iconAlignment === 'right' &&
					iconName &&
					!loading && (
						<>
							{label && <Space size={8} />}

							<Icon
								name={iconName}
								size={fontSize as any}
								color={labelColor}
							/>
						</>
					)}
			</Pressable>
		</View>
	);
};
export default memo(ButtonBase);
export { ButtonBase };
