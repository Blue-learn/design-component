import {
	ChipHighlightTokens,
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
	factor: 0.5,
	highlight: ChipHighlightTokens.HIGHLIGHTED,
};

export const argTypes = {
	type: {
		control: 'select',
		options: [...Object.values(ChipTypeTokens)],
	},
	highlight: {
		control: 'select',
		options: [
			...Object.values(ChipHighlightTokens),
		],
	},
};
