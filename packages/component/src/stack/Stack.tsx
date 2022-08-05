import {
	StackAlignItems,
	StackFlexWrap,
	StackJustifyContent,
	StackProp,
	StackType,
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
	alignX,
	alignY,
	widgetItems = [],
	renderItem,
	alignItems = StackAlignItems.flexStart,
	justifyContent = StackJustifyContent.flexStart,
	flexWrap = StackFlexWrap.nowrap,
}) => {
	return (
		<View
			style={{
				flexDirection: type,
				justifyContent: alignX || justifyContent,
				alignItems: alignY || alignItems,
				flexWrap,
			}}
		>
			{children}
			{renderItem && widgetItems.map(renderItem)}
		</View>
	);
};

export default memo(Stack);
export { Stack };
