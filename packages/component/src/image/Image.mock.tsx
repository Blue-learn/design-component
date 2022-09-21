import {
	AspectRatioToken,
	BorderRadiusTokens,
	ColorTokens,
	ImageSizeTokens,
	ResizeModeToken,
} from '@blue-learn/schema';

export const args = {
	uri: 'https://images.unsplash.com/photo-1652680882466-e83b0cccab34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2153&q=50',
	size: ImageSizeTokens.XL,
	aspectRatio: AspectRatioToken.A1_1,
	borderRadius: BorderRadiusTokens.BR1,
};

export const argTypes = {
	size: {
		control: 'select',
		options: [...Object.values(ImageSizeTokens)],
	},
	borderRadius: {
		control: 'select',
		options: [...Object.values(BorderRadiusTokens)],
	},
	aspectRatio: {
		control: 'select',
		options: [
			...Object.values(AspectRatioToken).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	borderTopRadius: {
		control: 'select',
		options: [...Object.values(BorderRadiusTokens)],
	},
	borderBottomRadius: {
		control: 'select',
		options: [...Object.values(BorderRadiusTokens)],
	},
	borderColor: {
		control: 'select',
		options: [...Object.values(ColorTokens)],
	},
	resizeMode: {
		control: 'select',
		options: [...Object.values(ResizeModeToken)],
	},
};
