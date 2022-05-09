import React from 'react';
import Chip from './Chip';
import {
	ChipProps,
	ChipTypeTokens,
	WIDGET,
} from '@blue-learn/schema';
import { CommonWidgetProps } from '../mock';

export default {
	title: 'Atoms/Chip',
	component: Chip,
	argTypes: {
		label: 'Default Chip',
	},
};

const Template = (args: ChipProps) =>
	CommonWidgetProps.renderItem({
		id: 'id____',
		type: WIDGET.CHIP,
		props: { ...args },
	});

export const Default = Template.bind({});
Default.args = {
	input: false,
	label: 'Chip label',
};
// Default.argTypes = {
// 	type: {
// 		control: 'select',
// 		options: [
// 			...Object.values(ChipTypeTokens).filter(
// 				(k) => typeof k === 'string',
// 			),
// 		],
// 	},
// };
export const Input = Template.bind({});
Input.args = {
	input: true,
	label: 'Chip label',
	checked: false,
};
