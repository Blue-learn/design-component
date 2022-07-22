import {
	AvatarProps,
	AvatarSizeTokens,
	ColorTokens,
	BorderRadiusTokens,
	AvatarTypeTokens,
} from '@blue-learn/schema';
import React from 'react';
import { Avatar } from './Avatar';

export default {
	title: 'Component/Avatar',
	component: Avatar,
	uri: 'https://reactnative.dev/img/tiny_logo.png',
	size: AvatarSizeTokens.LG,
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
	size: AvatarSizeTokens.LG,
	borderWidth: 3,
	borderColor: ColorTokens.Grey_100,
	BorderRadius: BorderRadiusTokens.BR4,
};

AvatarComponent.argTypes = {
	size: {
		control: 'select',
		options: [...Object.values(AvatarSizeTokens)],
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
		options: [...Object.values(ColorTokens)],
	},
};
