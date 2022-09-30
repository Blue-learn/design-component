import {
	ActiveStateTokens,
	AvatarProps,
	AvatarSizeTokens,
	AvatarTypeTokens,
	BorderRadiusTokens,
	ColorTokens,
} from '@blue-learn/schema';

export const args: AvatarProps = {
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
	borderRadius: BorderRadiusTokens.BR4,
};

export const argTypes = {
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
	active: {
		control: 'select',
		options: [...Object.values(ActiveStateTokens)],
	},
};
