import {
	ButtonBaseProps,
	ColorTokens,
	BorderRadiusTokens,
	FontFamilyTokens,
	IconAlignmentTokens,
	IconSizeTokens,
	ShadowThemeProps,
	SizeTypeTokens,
	StackAlignItems,
	StackJustifyContent,
	StackType,
	TextAlignTokens,
	WidgetProps,
	ButtonWidthTypeToken,
	IconTokens,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';
import React, { memo } from 'react';
import {
	ActivityIndicator,
	Platform,
	View,
} from 'react-native';
import Icon from '../icon/Icon';
import Space from '../space/Space';
import Typography from '../typography/Typography';
import { Component as Stack } from '../stack';
import Ripple from './Ripple';

/**
 * Raw Component with Derived props + Theme
 */
const ButtonBase: React.FunctionComponent<
	ButtonBaseProps & WidgetProps
> = ({
	onPress,
	label,
	loading = false,
	bgColor = ColorTokens.Primary_500,
	labelColor = ColorTokens.Grey_500,
	borderRadius = BorderRadiusTokens.BR4,
	paddingVertical = SizeTypeTokens.LG,
	shadow,
	borderColor,
	fontSize,
	iconAlignment,
	iconName,
	width = ButtonWidthTypeToken.CONTENT,
	icon,
	paddingHorizontal = SizeTypeTokens.XXXXL,
	triggerAction,
	action,
	stack = {
		type: StackType.row,
		justifyContent: StackJustifyContent.center,
		alignItems: StackAlignItems.center,
	},
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

	const iconDetails = {
		align:
			icon?.name || iconName
				? IconAlignmentTokens.right
				: null,
		...icon,
	};

	const styleProps = React.useMemo(
		() => ({
			backgroundColor: backgroundColorValue,
			borderRadius: borderRadiusValue,
			paddingVertical: paddingValue,
			borderColor: borderColorValue,
			borderWidth: borderColor ? 1 : 0,
			shadowOffset: shadowValue?.shadowOffset || {
				height: 0,
				width: 0,
			},
			shadowOpacity: shadowValue?.shadowOpacity || 0,
			shadowRadius: shadowValue?.shadowRadius || 0,
			paddingHorizontal: paddingHorizontalValue,
		}),
		[
			borderRadiusValue,
			borderColorValue,
			backgroundColorValue,
			labelColorValue,
			paddingValue,
			shadowValue,
			paddingHorizontalValue,
			width,
		],
	);

	const widthStyleProps = React.useMemo(
		() =>
			Platform.OS === 'web'
				? {
						width:
							width === ButtonWidthTypeToken.CONTENT
								? 'fit-content'
								: '100%',
				  }
				: {
						alignSelf:
							width === ButtonWidthTypeToken.CONTENT
								? 'flex-start'
								: 'stretch',
				  },
		[width],
	);

	const handleAction = () => {
		onPress && onPress();
		action &&
			triggerAction &&
			triggerAction(action);
	};
	const _renderIcon = React.useMemo(
		() =>
			!loading &&
			(iconName || icon) && (
				<Icon
					{...icon}
					name={iconName || icon.name}
					size={icon?.size || IconSizeTokens[fontSize]}
					color={labelColor || icon.color}
				/>
			),
		[icon, fontSize, iconName],
	);

	return (
		<Ripple
			onPress={handleAction}
			style={[styleProps, widthStyleProps]}
		>
			<Stack {...stack}>
				{(iconAlignment === 'left' ||
					iconDetails?.align ===
						IconAlignmentTokens.left) &&
					_renderIcon}
				{(iconAlignment === 'left' ||
					iconDetails?.align ===
						IconAlignmentTokens.left) &&
					label && <Space size={SizeTypeTokens.MD} />}
				<View
					style={
						(icon?.name || iconName) ===
						IconTokens.Google
							? { flex: 1 }
							: {}
					}
				>
					<Typography
						label={label ? label : ''}
						color={labelColor}
						fontSize={fontSize}
						textAlign={TextAlignTokens.center}
						fontFamily={FontFamilyTokens.InterMedium}
					/>
				</View>

				{loading && (
					<ActivityIndicator
						style={{ marginLeft: label ? 8 : 0 }}
						animating
						color={labelColorValue}
					/>
				)}

				{(iconAlignment === 'right' ||
					iconDetails?.align ===
						IconAlignmentTokens.right) &&
					label && <Space size={SizeTypeTokens.MD} />}
				{(iconAlignment === 'right' ||
					iconDetails?.align ===
						IconAlignmentTokens.right) &&
					(iconName || icon) &&
					!loading &&
					_renderIcon}
			</Stack>
		</Ripple>
	);
};
export default memo(ButtonBase);
export { ButtonBase };
