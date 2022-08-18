import {
	GradientProps,
	WidgetProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import ThemeProvider from '@blue-learn/theme';
import LinearGradient from 'react-native-linear-gradient';

/**
 * @description
 * LinearGradient supports children as React Component and widgetItems as WidgetItem Type[order by children -> widgetItems]
 * Note: renderItem should be passed to render WidgetItem
 **/
const Gradient: React.FC<
	GradientProps & WidgetProps
> = ({
	children = <></>,
	widgetItems = [],
	colors = [],
	start = { x: 0, y: 0 },
	end = { x: 1, y: 0 },
	renderItem,
	style,
}) => {
	const theme = ThemeProvider.getTheme();

	const colorsMap = React.useMemo(() => {
		if (typeof(colors)!=='string'&& colors.length > 1) {
			const map = colors.map(color => theme.colors[color]);
			return map;
		}	
		else if(typeof(colors)==='string') return theme.gradientColor[colors]
	}, [colors]);

	return (
		<LinearGradient
			start={start}
			end={end}
			colors={colorsMap}
			//@ts-ignore
			style={style}
		>
			{children}
			{renderItem && widgetItems.map(renderItem)}
		</LinearGradient>
	);
};

export default memo(Gradient);
export { Gradient };
