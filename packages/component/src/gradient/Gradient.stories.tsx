import {
	GradientProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import { CommonWidgetProps } from '../mock';
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
	return CommonWidgetProps.renderItem({
		id: 'test_id',
		type: WIDGET.GRADIENT,
		props: { ...args },
	});
};

export const LinearGradientComponent =
	Template.bind({});

LinearGradientComponent.args = {
	renderItem: CommonWidgetProps.renderItem,
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
