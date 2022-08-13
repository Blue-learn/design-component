import {
	inputTypeToken,
	TextInputProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import TextInput from './TextInput';
import * as Mock from './TextInput.mock';

export default {
	title: WIDGET.INPUT,
	component: TextInput,
	argTypes: {
		type: inputTypeToken.default,
		title: 'Lorem',
	},
};

const Template = (args: TextInputProps) => (
	<TextInput {...args} />
);

export const Input = Template.bind({});
Input.args = {
	...Mock.args,
};

Input.argTypes = {
	...Mock.argTypes,
};
