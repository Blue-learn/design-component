import {
	StackAlignItems,
	StackJustifyContent,
	StackProps,
	StackType,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import Stack from './Stack';
import { MockedWidgetProps } from '../mock';
import { View } from 'react-native';

export default {
	title: 'Component/Stack',
	component: Stack,
};

const Template = (args: StackProps) => {
	/**
	 *  Dynamic way
	 * */
	return MockedWidgetProps.renderItem({
		id: 'test_id',
		type: WIDGET.STACK,
		props: { ...args },
	});
};

export const StackComponent = Template.bind({});

StackComponent.args = {
	type: StackType.row,
	justifyContent: StackJustifyContent.center,
	alignItems: StackAlignItems.center,
	renderItem: MockedWidgetProps.renderItem,
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
StackComponent.argTypes = {
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
