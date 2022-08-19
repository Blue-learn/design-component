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
};

const Template = (args: TypographyProps) => (
	<Typography {...args} />
);

export const Component = Template.bind({});
Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
