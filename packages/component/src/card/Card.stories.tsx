import {
	CardProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import { MockedWidgetProps } from '../mock';
import Card from './Card';
import * as Mock from './Card.mock';

export default {
	title: WIDGET.CARD,
	component: Card,
};

const Template = (args: CardProps) => {
	return MockedWidgetProps.renderItem({
		id: WIDGET.CARD,
		type: WIDGET.CARD,
		props: { ...args },
	});
};

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
	renderItem: MockedWidgetProps.renderItem,
};
Component.argTypes = {
	...Mock.argTypes,
};
