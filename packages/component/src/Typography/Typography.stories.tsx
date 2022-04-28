import {
	FontTokens,
	FontWeightTokens,
	TypographyDecorationToken,
	TypographyProps,
	TypographyTransformToken,
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
	textTransform:
		TypographyTransformToken.uppercase,
	textDecorationLine:
		TypographyDecorationToken.underline,
};
