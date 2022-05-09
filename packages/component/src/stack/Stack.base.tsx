import React from 'react';
import { View } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import { StackBaseProps } from '@blue-learn/schema';
import { memo } from 'react';

const StackBase: React.FunctionComponent<
	StackBaseProps
> = ({
	alignItems,
	bgColor,
	borderRadius,
	direction,
	justifyContent,
	wrap,
	children,
}) => {
	const theme = ThemeProvider.getTheme();
	const bgColorValue = theme.colors[bgColor];
	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	return (
		<View
			style={{
				justifyContent,
				alignItems,
				backgroundColor: bgColorValue,
				borderRadius: borderRadiusValue,
				flexDirection: direction,
				wrap,
			}}
		>
			{children}
		</View>
	);
};

export default memo(StackBase);
export { StackBase };
