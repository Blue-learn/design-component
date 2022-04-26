import { TextInputProps } from '@blue-learn/schema';
import React from 'react';
import TextInput from './TextInput';

export default {
	title: 'Example/TextInput',
	component: TextInput,
	argTypes: {
		// value: 'Lorem ipsum dolor sit.',
	},
};

const Template = (args: TextInputProps) => (
	<TextInput {...args} />
);

export const PrimaryInput = Template.bind({});
PrimaryInput.args = {
	placeholder: 'Enter text',
	// value:
	// 	'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	// fontSize: 'xl',
	// fontWeight: 'bold',
	// textTransform: 'uppercase',
	// textDecorationLine: 'lineThrough',
};

export const ChatInput = Template.bind({});
ChatInput.args = {
	placeholder: 'Type your message here',
	// value:
	// 	'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
	// fontSize: 'xl',
	// fontWeight: 'bold',
	// textTransform: 'uppercase',
	// textDecorationLine: 'lineThrough',
};
