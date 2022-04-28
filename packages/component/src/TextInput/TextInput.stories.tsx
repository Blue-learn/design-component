import {
	inputTypeToken,
	TextInputProps,
} from '@blue-learn/schema';
import React from 'react';
import TextInput from './TextInput';

export default {
	title: 'Example/textInput',
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
