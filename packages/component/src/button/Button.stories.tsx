import React from 'react';
import Button from './Button';
import {
	ButtonProps,
	ButtonTypeTokens,
	WIDGET,
} from '@blue-learn/schema';
import { CommonWidgetProps } from '../mock';

export default {
	title: 'Example/Button',
	component: CommonWidgetProps.renderItem({
		type: WIDGET.BUTTON,
		id: 'button',
		props: {
			label: 'All Buttons',
			loading: false,
			type: ButtonTypeTokens.LargeFilled,
		},
	}),

	argTypes: {
		label: 'Default Button',
	},
};

const Template = (args: ButtonProps) => (
	<Button {...args} />
);

export const ButtonTypes = Template.bind({});
ButtonTypes.args = {
	label: 'All Buttons',
	loading: false,
	type: ButtonTypeTokens.SmallFilled,
};
ButtonTypes.argTypes = {
	type: {
		control: 'select',
		options: [
			...Object.values(ButtonTypeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
