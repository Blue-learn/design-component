import {
	StackAlignType,
	StackProp,
	StackType,
	WidgetItem,
	WidgetProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import { View } from 'react-native';

/**
 * @description
 * Stack supports children as React Component and widgetItems as WidgetItem Type[order by children -> widgetItems]
 * Note: renderItem should be passed to render WidgetItem
 **/
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
			{renderItem && widgetItems.map(renderItem)}
		</View>
	);
};

export default memo(Stack);
export { Stack };
