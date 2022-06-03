import React from 'react';
import {
	ChatCardProps,
	ChatCardTypeTokens,
} from '@blue-learn/schema';
import ChatCard from './ChatCard';

export default {
	title: 'Example/ChatCard',
	component: ChatCard,
	argTypes: {
		type: ChatCardTypeTokens.sender,
	},
};

const Template = (args: ChatCardProps) => (
	<ChatCard {...args} />
);

export const TextBox = Template.bind({});
TextBox.args = {
	label:
		'This link https://github.com/flyerhq can be extracted from the text',
	type: ChatCardTypeTokens.receiver,
	timeStamp: '12:00 AM',
};

TextBox.argTypes = {
	type: {
		control: 'radio',
		options: [
			...Object.values(ChatCardTypeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
