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

const Template = (args: TabsProps) => {
	return <Tabs {...args} />;
};

export const TabbedView = Template.bind({
	...Mock.args,
});
