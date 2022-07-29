import {
	IconAlignmentTokens,
	IconSizeTokens,
	IconTokens,
	inputTypeToken,
	TextInputProps,
} from '@blue-learn/schema';
import React from 'react';
import TextInput from './TextInput';

export default {
	title: 'Component/TextInput',
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
	leftIcon: {
		name: IconTokens.Search,
		size: IconSizeTokens.LG,
		align: IconAlignmentTokens.left,
	},
	rightIcons: [
		{
			name: IconTokens.Cross,
			size: IconSizeTokens.XL,
			align: IconAlignmentTokens.left,
		},
	],
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
