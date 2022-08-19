import {
	DividerProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import { Divider } from './Divider';
import * as Mock from './Divider.mock';

export default {
	title: WIDGET.DIVIDER,
	component: Divider,
};

const Template = (args: DividerProps) => (
	<Divider {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
