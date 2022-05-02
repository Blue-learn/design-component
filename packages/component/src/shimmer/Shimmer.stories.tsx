import { ShimmerProps } from '@blue-learn/schema';
import React from 'react';
import { Shimmer } from './Shimmer';

export default {
	title: 'Shimmer',
	component: Shimmer,
};
const Template = (args: ShimmerProps) => <Shimmer {...args} />;
export const Default = Template.bind({});
Default.args = {
	width: 400,
	height: 400,
	borderRadius: 10,
};
