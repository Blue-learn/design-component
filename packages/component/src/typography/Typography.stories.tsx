import {
	FontSizeTokens,
	FontDecorationToken,
	TypographyProps,
	FontTransformToken,
	EllipsizeModeTokens,
	TextAlignTokens,
	FontFamilyTokens,
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
	textAlign: TextAlignTokens.auto,
	textTransform: FontTransformToken.uppercase,
	textDecorationLine:
		FontDecorationToken.underline,
	ellipsizeMode: EllipsizeModeTokens.tail,
	numberOfLines: 0,
};

Primary.argTypes = {
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
		options: [
			...Object.values(FontFamilyTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	textAlign: {
		control: 'select',
		options: [
			...Object.values(TextAlignTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	textTransform: {
		control: 'select',
		options: [
			...Object.values(FontTransformToken).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	textDecorationLine: {
		control: 'select',
		options: [
			...Object.values(FontDecorationToken).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	ellipsizeMode: {
		control: 'select',
		options: [
			...Object.values(EllipsizeModeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
