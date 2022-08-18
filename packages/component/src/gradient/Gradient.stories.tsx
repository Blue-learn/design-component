import {
	GradientProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import { MockedWidgetProps } from '../mock';
import Gradient from './Gradient';
import * as Mock from './Gradient.mock';

export default {
	title: WIDGET.GRADIENT,
	component: Gradient,
};

const Template = (args: GradientProps) => {
	/**
	 *  Dynamic way
	 * */
	return MockedWidgetProps.renderItem({
		id: WIDGET.GRADIENT,
		type: WIDGET.GRADIENT,
		props: { ...args },
	});
};

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
	renderItem: MockedWidgetProps.renderItem,
};

Component.argTypes = Mock.argTypes;
