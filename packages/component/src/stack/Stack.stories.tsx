import {
	StackAlignType,
	StackProp,
	StackType,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import Stack from './Stack';
import { CommonWidgetProps } from '../mock';
import { View } from 'react-native';

export default {
	title: 'Example/Stack',
	component: Stack,
};

const Template = (args: StackProp) => {
	/**
	 *  Dynamic way
	 * */
	return CommonWidgetProps.renderItem({
		id: 'test_id',
		type: WIDGET.STACK,
		props: {
			type: StackType.row,
			alignX: StackAlignType.flexStart,
			alignY: StackAlignType.flexStart,
			children: [
				<View
					style={{
						backgroundColor: '#000',
						height: 50,
						width: 100,
					}}
				/>,
			],
			renderItem: CommonWidgetProps.renderItem,
			widgetItems: [
				{
					id: 'button',
					type: WIDGET.BUTTON,
					props: {
						label: 'hello stack',
					},
				},
			],
		},
	});

	/**
	 *  Static way
	 * */
	return (
		<Stack {...args}>
			<View
				style={{
					backgroundColor: '#000',
					height: 50,
					width: 100,
				}}
			/>
			<View
				style={{
					backgroundColor: '#000',
					height: 10,
					width: 120,
					marginTop: 4,
				}}
			/>
			<View
				style={{
					backgroundColor: '#000',
					height: 80,
					width: 150,
					marginTop: 4,
				}}
			/>
		</Stack>
	);
};

export const StackComponent = Template.bind({});

StackComponent.args = {
	type: StackType.column,
	alignX: StackAlignType.flexStart,
	alignY: StackAlignType.flexStart,
	children: [],
};
StackComponent.argTypes = {
	type: {
		control: 'select',
		options: [...Object.values(StackType)],
	},
	alignX: {
		control: 'select',
		options: [...Object.values(StackAlignType)],
	},
	alignY: {
		control: 'select',
		options: [...Object.values(StackAlignType)],
	},
};
