import {
	AspectRatioToken,
	LottieProps,
	LottieSizeTokens,
} from '@blue-learn/schema';

export const args: LottieProps = {
	uri: require('./welcome.json'),
	size: LottieSizeTokens.XXL,
};

export const argTypes = {
	size: {
		control: 'select',
		options: [...Object.values(LottieSizeTokens)],
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
