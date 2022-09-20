import {
	GridStateTokens,
	ImageSizeTokens,
	WIDGET,
} from '@blue-learn/schema';

export const args = {
	numColumns: 4,
	data: [
		{
			state: GridStateTokens.NOT_SELECTED,
			item: {
				type: WIDGET.IMAGE,
				props: {
					uri: 'https://reactnative.dev/img/tiny_logo.png',
					size: ImageSizeTokens.LG,
				},
			},
		},
		{
			state: GridStateTokens.NOT_SELECTED,
			item: {
				type: WIDGET.IMAGE,
				props: {
					uri: 'https://reactnative.dev/img/tiny_logo.png',
					size: ImageSizeTokens.LG,
				},
			},
		},
		{
			state: GridStateTokens.SELECTED,
			item: {
				type: WIDGET.IMAGE,
				props: {
					uri: 'https://reactnative.dev/img/tiny_logo.png',
					size: ImageSizeTokens.LG,
				},
			},
		},
		{
			state: GridStateTokens.SELECTED,
			item: {
				type: WIDGET.IMAGE,
				props: {
					uri: 'https://reactnative.dev/img/tiny_logo.png',
					size: ImageSizeTokens.LG,
				},
			},
		},
		{
			state: GridStateTokens.NOT_SELECTED,
			item: {
				type: WIDGET.IMAGE,
				props: {
					uri: 'https://reactnative.dev/img/tiny_logo.png',
					size: ImageSizeTokens.LG,
				},
			},
		},
		{
			state: GridStateTokens.NOT_SELECTED,
			item: {
				type: WIDGET.IMAGE,
				props: {
					uri: 'https://reactnative.dev/img/tiny_logo.png',
					size: ImageSizeTokens.LG,
				},
			},
		},
	],
};

export const argTypes = {};
