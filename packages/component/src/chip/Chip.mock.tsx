import {
	AvatarSizeTokens,
	ChipProps,
	ChipStateTokens,
	ColorTokens,
	IconAlignmentTokens,
	IconSizeTokens,
	IconTokens,
} from '@blue-learn/schema';

export default {
	uri: 'https://reactnative.dev/img/tiny_logo.png',
	size: AvatarSizeTokens.LG,
};

export const args: ChipProps = {
	data: [
		{
			label: 'Chip1',
			state: ChipStateTokens.DEFAULT,
			icon: {
				name: IconTokens.Sparkling,
				color: ColorTokens.Grey_100,
				size: IconSizeTokens.XXS,
				align: IconAlignmentTokens.left,
			},
		},
		{
			label: 'Chip2',
			state: ChipStateTokens.ACTIVE,
			icon: {
				name: IconTokens.Sparkling,
				color: ColorTokens.Grey_100,
				size: IconSizeTokens.XXS,
				align: IconAlignmentTokens.left,
			},
		},
	],
};

export const argTypes = {};
