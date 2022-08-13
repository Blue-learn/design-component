import {
	TypographyProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import Typography from './Typography';
import * as Mock from './Typography.mock';

export default {
	title: WIDGET.TEXT,
	component: Typography,
	argTypes: {
		label: 'Lorem ipsum dolor sit.',
	},
};

const Template = (args: TypographyProps) => (
	<Typography {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	...Mock.args,
};

Primary.argTypes = {
	...Mock.argTypes,
};
