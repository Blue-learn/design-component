import {
	AvatarSizeTokens,
	ButtonTypeTokens,
	ColorTokens,
	IconSizeTokens,
	IconTokens,
	inputTypeToken,
	WIDGET,
} from '@blue-learn/schema';

export const args = {
	type: inputTypeToken.default,
	title: 'Title',
	caption: 'This is a caption',
	// leftIcon: {
	// 	name: IconTokens.Search,
	// 	size: IconSizeTokens.LG,
	// 	align: IconAlignmentTokens.left,
	// },
	avatar: {
		uri: 'https://reactnative.dev/img/tiny_logo.png',
		size: AvatarSizeTokens.MD,
	},
	rightIcons: [
		{
			id: 'cross',
			type: WIDGET.BUTTON,
			props: {
				type: ButtonTypeTokens.IconGhost,
				icon: {
					name: IconTokens.Cross,
					size: IconSizeTokens.LG,
					color: ColorTokens.Grey_100,
				},
			},
		},
	],
};

export const argTypes = {
	type: {
		control: { type: 'radio' },
		options: [
			...Object.values(inputTypeToken).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
