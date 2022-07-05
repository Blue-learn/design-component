import {
	ChipProps,
	ColorTokens,
	FontSizeTokens,
	IconSizeTokens,
	IconTokens,
} from '@blue-learn/schema';
import React from 'react';
import Chip from './Chip';

export default {
	title: 'Example/Chip',
	component: Chip,
};

const Template = (args: ChipProps) => (
	<Chip {...args} />
);

export const SpaceComponent = Template.bind({});

SpaceComponent.args = {
	label: 'Chip',
	bgColor: ColorTokens.Black,
	labelColor: ColorTokens.Grey_100,
	icon: {
		name: IconTokens.Sparkling,
		color: ColorTokens.Grey_100,
		size: IconSizeTokens.sm,
	},
	fontSize: FontSizeTokens.lg,
};

SpaceComponent.argTypes = {
	bgColor: {
		control: 'select',
		options: [
			...Object.values(ColorTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	labelColor: {
		control: 'select',
		options: [
			...Object.values(ColorTokens).filter(
				(k) => typeof k === 'string',
			),
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
};
