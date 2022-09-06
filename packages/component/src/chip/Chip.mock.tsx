import {
	ChipProps,
	ChipStateTokens,
	IconAlignmentTokens,
	IconSizeTokens,
	IconTokens,
	ImageSizeTokens,
} from '@blue-learn/schema';

export const args: ChipProps = {
	data: [
		{
			label: 'Chip1',
			state: ChipStateTokens.DEFAULT,
			image: {
				size: ImageSizeTokens.XXS,
				uri: 'https://reactnative.dev/img/tiny_logo.png',
			},
		},
		{
			label: 'Chip2',
			state: ChipStateTokens.ACTIVE,
			icon: {
				name: IconTokens.Attachment,
				size: IconSizeTokens.XXS,
				align: IconAlignmentTokens.left,
			},
		},
	],
};

export const argTypes = {};
