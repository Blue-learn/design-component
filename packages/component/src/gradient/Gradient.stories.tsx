import {
	ColorTokens,
	GradientProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import { MockedWidgetProps } from '../mock';
import { View } from 'react-native';
import Gradient from './Gradient';

export default {
	title: 'Component/Gradient',
	component: Gradient,
};

const Template = (args: GradientProps) => {
	/**
	 *  Dynamic way
	 * */
	return MockedWidgetProps.renderItem({
		id: 'test_id',
		type: WIDGET.GRADIENT,
		props: { ...args },
	});
};

export const LinearGradientComponent =
	Template.bind({});

LinearGradientComponent.args = {
	renderItem: MockedWidgetProps.renderItem,
	colors: [
		ColorTokens.Blue_800,
		ColorTokens.Blue_100,
	],
	children: [
		<View
			style={{
				backgroundColor: '#fff000',
				height: 50,
				width: 100,
				marginBottom: 20,
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
