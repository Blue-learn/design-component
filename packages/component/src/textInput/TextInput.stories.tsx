import {
	ButtonTypeTokens,
	ColorTokens,
	IconAlignmentTokens,
	IconSizeTokens,
	IconTokens,
	inputTypeToken,
	TextInputProps,
	WIDGET,
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
			id: 'cross-icon',
			type: WIDGET.BUTTON,
			props: {
				type: ButtonTypeTokens.IconGhost,
				icon: {
					name: IconTokens.Cross,
					size: IconSizeTokens.LG,
					color: ColorTokens.Grey_100,
				},
			},
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
