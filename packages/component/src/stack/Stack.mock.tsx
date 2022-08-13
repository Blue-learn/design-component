import {
	StackAlignItems,
	StackJustifyContent,
	StackProps,
	StackType,
	WIDGET,
	WidgetProps,
} from '@blue-learn/schema';
import React from 'react';
import { View } from 'react-native';

export const args: StackProps = {
	type: StackType.row,
	justifyContent: StackJustifyContent.center,
	alignItems: StackAlignItems.center,
	children: [
		<View
			style={{
				backgroundColor: '#000',
				height: 50,
				width: 100,
			}}
		/>,
	],
	widgetItems: [
		{
			id: 'button',
			type: WIDGET.BUTTON,
			props: {
				label: 'hello stack',
			},
		},
	],
};

export const argTypes = {
	type: {
		control: 'select',
		options: [...Object.values(StackType)],
	},
	justifyContent: {
		control: 'select',
		options: [
			...Object.values(StackJustifyContent),
		],
	},
	alignItems: {
		control: 'select',
		options: [...Object.values(StackAlignItems)],
	},
};
