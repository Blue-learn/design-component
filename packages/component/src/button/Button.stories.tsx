import React from 'react';
import Button from './Button';
import {
	ButtonProps,
	ButtonType,
	ButtonTypeTokens,
} from '@blue-learn/schema';

export default {
	title: 'Example/Button',
	component: Button,
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
	type: ButtonTypeTokens.LargeFilled,
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
