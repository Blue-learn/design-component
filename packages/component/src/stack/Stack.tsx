import {
	StackAlignType,
	StackProp,
	StackType,
	WidgetItem,
	WidgetProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import { View } from 'react-native';

const Stack: React.FC<
	StackProp & WidgetProps
> = ({
	type = StackType.column,
	children = <></>,
	alignX = StackAlignType.flexStart,
	alignY = StackAlignType.flexStart,
	widgetItems = [],
	renderItem,
}) => {
	return (
		<View
			style={{
				flexDirection: type,
				justifyContent: alignX,
				alignItems: alignY,
			}}
		>
			{children}
			{renderItem &&
				widgetItems.map((widgetItem: WidgetItem) =>
					renderItem(widgetItem),
				)}
		</View>
	);
};

export default memo(Stack);
export { Stack };
