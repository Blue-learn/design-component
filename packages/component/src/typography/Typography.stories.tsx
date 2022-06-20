import {
	FontSizeTokens,
	FontDecorationToken,
	TypographyProps,
	FontTransformToken,
	EllipsizeModeTokens,
	TextAlignTokens,
	FontFamilyTokens,
	TypographyTypeTokens,
} from '@blue-learn/schema';
import React from 'react';
import Typography from './Typography';

export default {
	title: 'Example/typography',
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
	fontSize: FontSizeTokens.sm,
	fontFamily: FontFamilyTokens.manropeRegular,
	ellipsizeMode: EllipsizeModeTokens.tail,
	numberOfLines: 0,
};

Primary.argTypes = {
	type: {
		control: 'select',
		options: [
			...Object.values(TypographyTypeTokens),
		],
	},
	fontSize: {
		control: 'select',
		options: [
			...Object.values(FontSizeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	fontFamily: {
		control: 'select',
		options: [...Object.values(FontFamilyTokens)],
	},
	textAlign: {
		control: 'select',
		options: [...Object.values(TextAlignTokens)],
	},
	textTransform: {
		control: 'select',
		options: [...Object.values(FontTransformToken)],
	},
	textDecorationLine: {
		control: 'select',
		options: [
			...Object.values(FontDecorationToken),
		],
	},
	ellipsizeMode: {
		control: 'select',
		options: [
			...Object.values(EllipsizeModeTokens),
		],
	},
};
