import {
	UserCardProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import UserCard from './UserCard';
import * as Mock from './UserCard.mock';

export default {
	title: WIDGET.USERCARD,
	component: UserCard,
};

const Template = (args: UserCardProps) => (
	<UserCard {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = { ...Mock.argTypes };
