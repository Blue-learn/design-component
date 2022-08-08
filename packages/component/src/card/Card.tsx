import {
	CardProps,
	ShadowThemeProps,
	SizeTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import ThemeProvider from '@blue-learn/theme';
import { View, Pressable } from 'react-native';
import Gradient from '../gradient/Gradient';

const Card: React.FC<CardProps & WidgetProps> = ({
	header = { children: <></>, widgetItems: [] },
	body = { children: <></>, widgetItems: [] },
	footer = { children: <></>, widgetItems: [] },
	justifyContent,
	alignItems,
	bgColor,
	padding = {
		vertical: SizeTypeTokens.LG,
		horizontal: SizeTypeTokens.LG,
	},
	borderRadius = SizeTypeTokens.LG,
	shadow,
	gradient,
	onPress,
	action,
	triggerAction,
	renderItem,
}) => {
	const theme = ThemeProvider.getTheme();

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const backgroundColor = theme.colors[bgColor];

	const shadowValue: ShadowThemeProps =
		theme.shadow[shadow];

	const paddingTop =
		theme.space[padding?.vertical || padding?.top];

	const paddingBottom =
		theme.space[
			padding?.vertical || padding?.bottom
		];

	const paddingLeft =
		theme.space[
			padding?.horizontal || padding?.left
		];

	const paddingRight =
		theme.space[
			padding?.horizontal || padding?.right
		];

	const styleProps = React.useMemo(
		() => ({
			justifyContent,
			alignItems,
			backgroundColor: backgroundColor,
			shadowOffset: shadowValue?.shadowOffset || {
				height: 0,
				width: 0,
			},
			shadowOpacity: shadowValue?.shadowOpacity || 0,
			shadowRadius: shadowValue?.shadowRadius || 0,
			paddingTop: paddingTop,
			paddingBottom: paddingBottom,
			paddingLeft: paddingLeft,
			paddingRight: paddingRight,
			borderRadius: borderRadiusValue,
		}),
		[
			justifyContent,
			alignItems,
			shadow,
			bgColor,
			padding,
			borderRadius,
		],
	);
	const handleAction = () => {
		onPress && onPress();
		action &&
			triggerAction &&
			triggerAction(action);
	};
	const child = [
		header?.children,
		renderItem &&
			header?.widgetItems?.length > 0 &&
			header?.widgetItems.map(renderItem),
		body?.children,
		renderItem &&
			body?.widgetItems?.length > 0 &&
			body?.widgetItems.map(renderItem),
		footer?.children,
		renderItem &&
			footer?.widgetItems?.length > 0 &&
			footer?.widgetItems.map(renderItem),
	];

	const childWithBackground =
		gradient?.colors?.length > 1 ? (
			<Gradient style={[styleProps]} {...gradient}>
				{child}
			</Gradient>
		) : (
			<View style={[styleProps]}>{child}</View>
		);

	return onPress ? (
		<Pressable onPress={handleAction}>
			{childWithBackground}
		</Pressable>
	) : (
		childWithBackground
	);
};

export default memo(Card);
export { Card };
