import {
	AvatarProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import { Avatar } from './Avatar';
import * as Mock from './Avatar.mock';

export default {
	title: WIDGET.AVATAR,
	component: Avatar,
	...Mock.args,
};

const Template = (args: AvatarProps) => (
	<Avatar {...args} />
);

export const Component = Template.bind({});

Component.args = Mock.args;

Component.argTypes = {
	...Mock.argTypes,
};
