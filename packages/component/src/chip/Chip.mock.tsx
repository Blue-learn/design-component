import {
	AvatarSizeTokens,
	ChipProps,
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
			bgColor: ColorTokens.Black,
			labelColor: ColorTokens.Grey_100,
			icon: {
				name: IconTokens.Sparkling,
				color: ColorTokens.Grey_100,
				size: IconSizeTokens.XXS,
				align: IconAlignmentTokens.left,
			},
		},
		{
			label: 'Chip2',
			bgColor: ColorTokens.Grey_600,
			labelColor: ColorTokens.Grey_100,
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
