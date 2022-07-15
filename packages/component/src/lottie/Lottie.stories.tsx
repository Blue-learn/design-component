import {
	AspectRatioToken,
	LottieProps,
	LottieSizeTokens,
} from '@blue-learn/schema';
import React from 'react';
import Lottie from './Lottie';

export default {
	title: 'Example/Lottie',
	component: Lottie,
	uri: require('./welcome.json'),
};

const Template = (args: LottieProps) => (
	<Lottie {...args} />
);

export const LottieComponent = Template.bind({});

LottieComponent.args = {
	uri: require('./welcome.json'),
	size: LottieSizeTokens.XXL,
};

LottieComponent.argTypes = {
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
