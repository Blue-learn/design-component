import {
	AspectRatioToken,
	ImageSizeTokens,
} from '@blue-learn/schema';
import React from 'react';

export const args = {
	uri: 'https://images.unsplash.com/photo-1652680882466-e83b0cccab34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2153&q=50',
	size: ImageSizeTokens.XL,
	aspectRatio: AspectRatioToken.A1_1,
};

export const argTypes = {
	size: {
		control: 'select',
		options: [...Object.values(ImageSizeTokens)],
	},
	aspectRatio: {
		control: 'select',
		options: [
			...Object.values(AspectRatioToken).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
