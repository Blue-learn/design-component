import { LottieProps } from '@blue-learn/schema';
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
	width: 200,
	height: 200,
};
