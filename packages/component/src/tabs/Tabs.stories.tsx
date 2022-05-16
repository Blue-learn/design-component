import React from 'react';
import {
	TabsProps,
	WIDGET,
} from '@blue-learn/schema';
import { CommonWidgetProps } from '../mock';
import Tabs from './Tabs';

export default {
	title: 'Example/Tabs',
	component: Tabs,
};

const Template = (args: TabsProps) => {
	console.log(args);
	let props = {
		...args,
		options: [
			{ label: 'Tab 1' },
			{ label: 'Tab 2' },
		],
		components: [
			'Tab 1 contents',
			'Tab 2 contents',
		],
	};
	return <Tabs {...props} />;
};

export const TabbedView = Template.bind({});
