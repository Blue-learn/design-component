import {
	IconSizeTokens,
	inputTypeToken,
	TextInputProps,
} from '@blue-learn/schema';
import React from 'react';
import Icon from '../icon/Icon';
import TextInput from './TextInput';

export default {
	title: 'Example/TextInput',
	component: TextInput,
	argTypes: {
		inputType: inputTypeToken.default,
	},
};

const Template = (args: TextInputProps) => (
	<TextInput {...args} />
);

export const Input = Template.bind({});
Input.args = {
	inputType: inputTypeToken.default,
};

Input.argTypes = {
	inputType: {
		control: { type: 'radio' },
		options: [
			...Object.values(inputTypeToken).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};

export const InputWithIcon = Template.bind({});

InputWithIcon.args = {
	inputType: inputTypeToken.chat,
	leftElement: (
		<Icon name='search' size={IconSizeTokens.sm} />
	),
	rightElement: (
		<Icon name='cross' size={IconSizeTokens.lg} />
	),
};

InputWithIcon.argTypes = {
	inputType: {
		control: { type: 'radio' },
		options: [
			...Object.values(inputTypeToken).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
