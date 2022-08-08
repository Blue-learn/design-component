import { UserCardProps } from '@blue-learn/schema';
import React from 'react';
import UserCard from './UserCard';

export default {
	title: 'Component/UserCard',
	component: UserCard,
};

const Template = (args: UserCardProps) => (
	<UserCard {...args} />
);

export const UserCardCompoent = Template.bind({});

UserCardCompoent.args = {
	title: 'Saidatta Sahu',
	subtitle: 'Software Engineer',
	avatar:
		'https://reactnative.dev/img/tiny_logo.png',
	location: 'Bangalore, India',
};

UserCardCompoent.argTypes = {};
