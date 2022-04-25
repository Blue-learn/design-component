import { TypographyProps } from '@blue-learn/schema';
import React from 'react';
import Typography from './Typography';

export default {
	title: 'Example/Typography',
	component: Typography,
	argTypes: {
		value: 'Lorem ipsum dolor sit.',
	},
};

const Template = (args: TypographyProps) => (
	<Typography {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	value:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
};
