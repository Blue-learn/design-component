import {
	AvatarProps,
	AvatarSizeTokens,
	AvatarTypeTokens,
	BorderRadiusTokens,
	ButtonProps,
	ButtonTypeTokens,
	ButtonWidthTypeToken,
	CardProps,
	ChatCardProps,
	ChatCardTypeTokens,
	ChipProps,
	ColorTokens,
	IconAlignmentTokens,
	IconSizeTokens,
	IconTokens,
	SizeTypeTokens,
	StackAlignItems,
	StackJustifyContent,
	WIDGET,
	WidgetProps,
} from '@blue-learn/schema';
import { MockedWidgetProps } from '../mock';
import React from 'react';
import { Typography } from '../typography/Typography';

export default {
	uri: 'https://reactnative.dev/img/tiny_logo.png',
	size: AvatarSizeTokens.LG,
};

export const args: ChatCardProps = {
	label:
		'This link https://github.com/flyerhq can be extracted from the text',
	type: ChatCardTypeTokens.receiver,
	timeStamp: '12:00 AM',
};

export const argTypes = {
	type: {
		control: 'radio',
		options: [
			...Object.values(ChatCardTypeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
