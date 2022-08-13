import {
	ChipProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import Chip from './Chip';
import * as Mock from './Chip.mock';

export default {
	title: WIDGET.CHIP,
	component: Chip,
	...Mock.args,
};

const Template = (args: ChipProps) => (
	<Chip {...args} />
);

export const Component = Template.bind({});

Component.args = Mock.args;
