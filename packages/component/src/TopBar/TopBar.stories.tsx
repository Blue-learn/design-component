import {
	TopBarProps,
	topBarTypeToken,
} from '@blue-learn/schema';
import React from 'react';
import TopBar from './TopBar';

export default {
	title: 'Example/TopBar',
	component: TopBar,
	argTypes: {
		topBarType: topBarTypeToken.mainpage,
	},
};

const Template = (args: TopBarProps) => (
	<TopBar {...args} />
);

export const TopBars = Template.bind({});
TopBars.args = {
	topBarType: topBarTypeToken.mainpage,
};

TopBars.argTypes = {
	topBarType: {
		control: { type: 'radio' },
		options: [
			...Object.values(topBarTypeToken).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
