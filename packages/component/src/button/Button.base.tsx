import {
	ButtonBaseProps,
	ColorTokens,
	CornerRadiusTokens,
	FontFamilyTokens,
	IconSizeTokens,
	ShadowThemeProps,
	SpaceTypeTokens,
	StackAlignType,
	TextAlignTokens,
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
		alignItems: 'center',
		flexDirection: 'row',
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
	bgColor = ColorTokens.Blue_600,
	labelColor = ColorTokens.Grey_500,
	borderRadius = CornerRadiusTokens.BR4,
	paddingVertical = SpaceTypeTokens.LG,
	shadow,
	borderColor,
	fontSize,
	iconAlignment = 'right',
	iconName,
	width = 'content',
	icon,
	paddingHorizontal = SpaceTypeTokens['4XL'],
	flex = StackAlignType.center,
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
						justifyContent: flex,
					},
				]}
				onPress={onPress}
			>
				{iconAlignment === 'left' &&
					!loading &&
					(iconName || icon) && (
						<>
							<Icon
								{...icon}
								name={iconName || icon.name}
								size={
									icon?.size || IconSizeTokens[fontSize]
								}
								color={labelColor || icon.color}
							/>
							{label && <Space size={8} />}
						</>
					)}

				{label && (
					<View
						style={
							flex == StackAlignType.spaceBetween
								? { flex: 1 }
								: {}
						}
					>
						<Typography
							label={label}
							color={labelColor}
							fontSize={fontSize}
							textAlign={TextAlignTokens.center}
							fontFamily={
								FontFamilyTokens.manropeSemiBold
							}
						/>
					</View>
				)}

				{loading && (
					<ActivityIndicator
						style={{ marginLeft: label ? 8 : 0 }}
						animating
						color={labelColorValue}
					/>
				)}

				{iconAlignment === 'right' &&
					(iconName || icon) &&
					!loading && (
						<>
							{label && <Space size={8} />}
							<Icon
								{...icon}
								name={iconName || icon?.name}
								size={
									icon?.size || IconSizeTokens[fontSize]
								}
								color={labelColor || icon?.color}
							/>
						</>
					)}
			</Pressable>
		</View>
	);
};
export default memo(ButtonBase);
export { ButtonBase };
