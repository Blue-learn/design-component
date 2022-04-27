import {
	FontFamilyTokens,
	FontTokens,
	FontWeightTokens,
	TypographyDecoration,
	TypographyProps,
	TypographyTransform,
} from '@blue-learn/schema';
import React from 'react';
import Typography from './Typography';

export default {
	title: 'Example/Typography',
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
	label:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	fontSize: FontTokens.sm,
	fontWeight: FontWeightTokens.normal,
	textTransform: TypographyTransform.uppercase,
	textDecorationLine:
		TypographyDecoration.underline,
};
