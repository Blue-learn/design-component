import {
	FeedCardProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import * as Mock from './FeedCard.mock';
import FeedCardShimmer from './FeedCard.shimmer';
import { FeedCard } from './FeedCard';

export default {
	title: WIDGET.FEEDCARD,
	component: FeedCard,
};

const Template = (args: FeedCardProps) => (
	<FeedCard {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};

const ShimmerTemplate = () => <FeedCardShimmer />;

export const Shimmer = ShimmerTemplate.bind({});
