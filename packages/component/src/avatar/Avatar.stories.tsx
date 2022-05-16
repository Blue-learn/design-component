import {
	AvatarProps,
	avatarSizeTokens,
	ColorTokens,
	CornerRadiusTokens,
	IconProps,
} from '@blue-learn/schema';
import React from 'react';
import { Avatar } from './Avatar';

export default {
	title: 'Example/Avatar',
	component: Avatar,
	uri: 'https://reactnative.dev/img/tiny_logo.png',
	size: avatarSizeTokens.LG,
};

const Template = (args: AvatarProps) => (
	<Avatar {...args} />
);

export const AvatarComponent = Template.bind({});

AvatarComponent.args = {
	uri: 'https://reactnative.dev/img/tiny_logo.png',
	size: avatarSizeTokens.LG,
	borderWidth: 0,
};

AvatarComponent.argTypes = {
	size: {
		control: 'select',
		options: [...Object.values(avatarSizeTokens)],
	},
	borderRadius: {
		control: 'select',
		options: [...Object.values(CornerRadiusTokens)],
	},
	borderColor: {
		control: 'select',
		options: [null, ...Object.values(ColorTokens)],
	},
};
