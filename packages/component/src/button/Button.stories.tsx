import React from 'react';
import Button from './Button';
import {
	ButtonProps,
	ButtonType,
	ButtonTypeTokens,
	IconTokens,
	WIDGET,
} from '@blue-learn/schema';
import { CommonWidgetProps } from '../mock';

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		label: 'Default Button',
	},
};

const Template = (args: ButtonProps) =>
	CommonWidgetProps.renderItem({
		id: 'id____',
		type: WIDGET.BUTTON,
		props: {
			...args,
		},
	});

export const Large = Template.bind({});
Large.args = {
	label: 'All Buttons',
	loading: false,
	type: ButtonTypeTokens.LargeFilled,
};
Large.argTypes = {
	type: {
		control: 'select',
		options: [
			...Object.values(ButtonTypeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	iconName: {
		control: 'select',
		options: [
			null,
			...Object.values(IconTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	iconAlignment: {
		control: 'radio',
		options: ['left', 'right'],
		default: 'left',
	},
};
