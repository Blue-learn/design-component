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
		'Are bro how was the video? Hope you had fun watching it. It was wildd',
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
