import {
	ChipProps,
	ColorTokens,
	IconAlignmentTokens,
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

export const ChipComponent = Template.bind({});

ChipComponent.args = {
	data: [
		{
			label: 'Chip1',
			bgColor: ColorTokens.Black,
			labelColor: ColorTokens.Grey_100,
			icon: {
				name: IconTokens.Sparkling,
				color: ColorTokens.Grey_100,
				size: IconSizeTokens.XXS,
				align: IconAlignmentTokens.left,
			},
		},
		{
			label: 'Chip2',
			bgColor: ColorTokens.Grey_600,
			labelColor: ColorTokens.Grey_100,
			icon: {
				name: IconTokens.Sparkling,
				color: ColorTokens.Grey_100,
				size: IconSizeTokens.XXS,
				align: IconAlignmentTokens.left,
			},
		},
	],
};
