import React from 'react';
import {
	ChatCardProps,
	ChatCardTypeTokens,
	WIDGET,
} from '@blue-learn/schema';
import ChatCard from './ChatCard';
import { Mock } from '.';

export default {
	title: WIDGET.CHATCARD,
	component: ChatCard,
};

const Template = (args: ChatCardProps) => (
	<ChatCard {...args} />
);

export const Component = Template.bind({});
Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
