import {
	AvatarProps,
	avatarSizeTokens,
	ColorTokens,
	BorderRadiusTokens,
	AvatarTypeTokens,
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
	uris: [
		'https://reactnative.dev/img/tiny_logo.png',
		'https://reactnative.dev/img/tiny_logo.png',
		'https://reactnative.dev/img/tiny_logo.png',
		'https://reactnative.dev/img/tiny_logo.png',
	],
	uri: 'https://reactnative.dev/img/tiny_logo.png',
	type: AvatarTypeTokens.MULTIPLE,
	size: avatarSizeTokens.LG,
	borderWidth: 3,
	borderColor: ColorTokens.Grey_100,
};

AvatarComponent.argTypes = {
	size: {
		control: 'select',
		options: [...Object.values(avatarSizeTokens)],
	},
	type: {
		control: 'select',
		options: [...Object.values(AvatarTypeTokens)],
	},
	borderRadius: {
		control: 'select',
		options: [...Object.values(BorderRadiusTokens)],
	},
	borderColor: {
		control: 'select',
		options: [null, ...Object.values(ColorTokens)],
	},
};
