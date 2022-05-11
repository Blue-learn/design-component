import React from 'react';
import Chips from './Chips';
import {
	ChipsProps,
	ChipTypeTokens,
	WIDGET,
} from '@blue-learn/schema';
import { CommonWidgetProps } from '../mock';

export default {
	title: 'Atoms/Chips',
	component: Chips,
};

const Template = (args: ChipsProps) =>
	CommonWidgetProps.renderItem({
		id: 'id____',
		type: WIDGET.CHIPS,
		props: {
			...args,
			options: [
				{ value: 1, label: 'Foo' },
				{ value: 2, label: 'Bar' },
			],
		},
	});

export const Default = Template.bind({});
Default.args = {
	selectable: false,
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

export const SelectableSingle = Template.bind({});
SelectableSingle.args = {
	selectable: true,
	multiple: false,
};
export const SelectableMultiple = Template.bind(
	{},
);
SelectableMultiple.args = {
	selectable: true,
	multiple: true,
};
