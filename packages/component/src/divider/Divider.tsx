import {
	ColorTokens,
	DividerProps,
	DividerSizeTokens,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';
import React, { memo } from 'react';
import { View } from 'react-native';

const Divider: React.FunctionComponent<
	DividerProps
> = ({
	color = ColorTokens.Grey_600,
	size = DividerSizeTokens.SM,
	margin,
}) => {
	const theme = ThemeProvider.getTheme();
	const height = theme.dividerSize[size];
	const bgColor = theme.colors[color];
	const marginTop =
		theme.space[margin?.vertical || margin?.top];
	const marginBottom =
		theme.space[margin?.vertical || margin?.bottom];
	const marginLeft =
		theme.space[margin?.horizontal || margin?.left];
	const marginRight =
		theme.space[
			margin?.horizontal || margin?.right
		];

	return (
		<View
			style={{
				backgroundColor: bgColor,
				height: height,
				marginTop: marginTop,
				marginBottom: marginBottom,
				marginLeft: marginLeft,
				marginRight: marginRight,
			}}
		/>
	);
};

export default memo(Divider);
export { Divider };
