import { ShimmerProps } from '@blue-learn/schema';
import React from 'react';
import { Shimmer } from './Shimmer';
import * as Mock from './Shimmer.mock';

export default {
	title: 'SHIMMER',
	component: Shimmer,
};
const Template = (args: ShimmerProps) => (
	<Shimmer {...args} />
);
export const Default = Template.bind({});
Default.args = {
	...Mock.args,
};
