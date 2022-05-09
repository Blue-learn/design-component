import React from 'react';
import { View } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import { StackBaseProps } from '@blue-learn/schema';
import { memo } from 'react';
import { CommonWidgetProps } from '../mock';

const StackBase: React.FunctionComponent<
	StackBaseProps
> = ({
	alignItems = 'flex-start',
	bgColor,
	borderRadius,
	direction,
	justifyContent = 'flex-start',
	wrap = false,
	children,
	childrenTemplate,
}) => {
	const theme = ThemeProvider.getTheme();
	const bgColorValue = theme.colors[bgColor];
	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	if (childrenTemplate.length > 0) {
		return (
			<>
				{childrenTemplate.map((item) => {
					return CommonWidgetProps.renderItem(item);
				})}
			</>
		);
	}

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
