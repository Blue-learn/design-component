import {
	LottieProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import Lottie from './Lottie';
import * as Mock from './Lottie.mock';

export default {
	title: WIDGET.LOTTIE,
	component: Lottie,
};

const Template = (args: LottieProps) => (
	<Lottie {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
