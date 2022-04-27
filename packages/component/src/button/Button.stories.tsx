import React from 'react';
import Button from './Button';
import {
	ButtonProps,
	ButtonType,
	ButtonTypeTokens,
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
		props: { ...args, label: 'Hello World' },
	});

export const Primary = Template.bind({});
Primary.args = {
	label: 'Primary Button X',
	type: ButtonType.Filled,
};
export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
	label: 'Primary Loading Button',
	loading: true,
	type: ButtonTypeTokens.BigFilled,
};

export const Secondary = Template.bind({});
Secondary.args = {
	label: 'Secondary Button',
	loading: false,
	type: ButtonTypeTokens.SmallFilled,
};
export const SecondaryLoading = Template.bind({});
SecondaryLoading.args = {
	label: 'Secondary Loading Button',
	loading: true,
	type: ButtonTypeTokens.SmallFilled,
};
