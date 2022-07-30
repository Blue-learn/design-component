import {
	CardProps,
	ShadowThemeProps,
	SizeTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import ThemeProvider from '@blue-learn/theme';
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
	gradient = {
		colors: [],
		start: { x: 0, y: 0 },
		end: { x: 1, y: 0 },
	},
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

	return (
		<Gradient style={[styleProps]} {...gradient}>
			{header?.children}
			{renderItem &&
				header?.widgetItems?.length > 0 &&
				header?.widgetItems.map(renderItem)}
			{body?.children}
			{renderItem &&
				body?.widgetItems?.length > 0 &&
				body?.widgetItems.map(renderItem)}
			{footer?.children}
			{renderItem &&
				footer?.widgetItems?.length > 0 &&
				footer?.widgetItems.map(renderItem)}
		</Gradient>
	);
};

export default memo(Card);
export { Card };
