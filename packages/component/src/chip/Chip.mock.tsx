import {
	ChipHighlightTokens,
	ChipProps,
	ChipTypeTokens,
	IconAlignmentTokens,
	IconTokens,
	ImageSizeTokens,
	SizeTypeTokens,
} from '@blue-learn/schema';

export const args: ChipProps = {
	label: 'Chip',
	type: ChipTypeTokens.SMALL_UNSELECTED,
	image: {
		size: ImageSizeTokens.XXXS,
		uri: 'https://reactnative.dev/img/tiny_logo.png',
	},
	factor: 1,
	highlight: ChipHighlightTokens.HIGHLIGHTED,
	icon: {
		name: IconTokens.Cross,
		align: IconAlignmentTokens.right,
	},
	margin: {
		right: SizeTypeTokens.LG,
		bottom: SizeTypeTokens.MD,
	},
	onPress: () => {},
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
