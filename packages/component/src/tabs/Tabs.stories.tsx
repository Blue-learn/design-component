import React from 'react';
import {
	TabsProps,
	WIDGET,
} from '@blue-learn/schema';
import Tabs from './Tabs';
import * as Mock from './Tabs.mock';

export default {
	title: WIDGET.TABS,
	component: Tabs,
};

const Template = (args: TabsProps) => (
	<Tabs {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
