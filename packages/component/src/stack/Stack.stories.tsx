import {
	StackProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import Stack from './Stack';
import { MockedWidgetProps } from '../mock';
import * as Mock from './Stack.mock';

export default {
	title: WIDGET.STACK,
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

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
	renderItem: MockedWidgetProps.renderItem,
};
Component.argTypes = Mock.argTypes;
