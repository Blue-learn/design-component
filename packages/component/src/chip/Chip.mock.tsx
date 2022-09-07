import {
	ChipProps,
	ChipTypeTokens,
	ImageSizeTokens,
} from '@blue-learn/schema';

export const args: ChipProps = {
	label: 'Chip',
	type: ChipTypeTokens.SMALL_UNSELECTED,
	image: {
		size: ImageSizeTokens.XXS,
		uri: 'https://reactnative.dev/img/tiny_logo.png',
	},
};

export const argTypes = {
	type: {
		control: 'select',
		options: [...Object.values(ChipTypeTokens)],
	},
};
