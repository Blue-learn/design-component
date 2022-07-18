import {
	ColorTokens,
	IconSizeTokens,
	IconTokens,
	inputTypeToken,
	TextInputProps,
} from '@blue-learn/schema';
import React from 'react';
import Icon from '../icon/Icon';
import TextInput from './TextInput';

export default {
	title: 'Example/textInput',
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
	type: inputTypeToken.default,
	title: 'Title',
	caption: 'This is a caption',
};

Input.argTypes = {
	type: {
		control: { type: 'radio' },
		options: [
			...Object.values(inputTypeToken).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
