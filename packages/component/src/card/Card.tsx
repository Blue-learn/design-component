import {
	CardProps,
	ShadowThemeProps,
	SpaceTypeTokens,
	WidgetItem,
	WidgetProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import { View } from 'react-native';
import ThemeProvider from '@blue-learn/theme';

/**
 * @description
 * Stack supports children as React Component and widgetItems as WidgetItem Type[order by children -> widgetItems]
 * Note: renderItem should be passed to render WidgetItem
 **/
const Card: React.FC<CardProps & WidgetProps> = ({
	header = { children: <></>, widgetItems: [] },
	body = { children: <></>, widgetItems: [] },
	footer = { children: <></>, widgetItems: [] },
	flex,
	bgColor,
	padding = {
		top: SpaceTypeTokens.LG,
		right: SpaceTypeTokens.LG,
		left: SpaceTypeTokens.LG,
		bottom: SpaceTypeTokens.LG,
	},
	paddingHorizontal = SpaceTypeTokens.LG,
	paddingVertical = SpaceTypeTokens.LG,
	borderRadius = SpaceTypeTokens.LG,
	shadow,
	renderItem,
}) => {
	const theme = ThemeProvider.getTheme();

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const backgroundColor = theme.colors[bgColor];

	const shadowValue: ShadowThemeProps =
		theme.shadow[shadow];

	const paddingTop =
		theme.space[paddingVertical || padding.top];

	const paddingBottom =
		theme.space[paddingVertical || padding.bottom];

	const paddingLeft =
		theme.space[paddingHorizontal || padding.left];

	const paddingRight =
		theme.space[paddingHorizontal || padding.right];

	return (
		<View
			style={{
				justifyContent: flex,
				backgroundColor: backgroundColor,
				shadowOffset: shadowValue?.shadowOffset || {
					height: 0,
					width: 0,
				},
				shadowOpacity:
					shadowValue?.shadowOpacity || 0,
				shadowRadius: shadowValue?.shadowRadius || 0,
				paddingTop: paddingTop,
				paddingBottom: paddingBottom,
				paddingLeft: paddingLeft,
				paddingRight: paddingRight,
				borderRadius: borderRadiusValue,
			}}
		>
			{header?.children}
			{renderItem &&
				header?.widgetItems?.length > 0 &&
				header?.widgetItems.map(
					(widgetItem: WidgetItem) =>
						renderItem(widgetItem),
				)}
			{body?.children}
			{renderItem &&
				body?.widgetItems?.length > 0 &&
				body?.widgetItems.map(
					(widgetItem: WidgetItem) =>
						renderItem(widgetItem),
				)}
			{footer?.children}
			{renderItem &&
				footer?.widgetItems?.length > 0 &&
				footer?.widgetItems.map(
					(widgetItem: WidgetItem) =>
						renderItem(widgetItem),
				)}
		</View>
	);
};

export default memo(Card);
export { Card };
