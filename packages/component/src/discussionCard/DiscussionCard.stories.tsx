import {
	DiscussionCardProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import DiscussionCard from './DiscussionCard';
import * as Mock from './DiscussionCard.mock';
import DiscussionCardShimmer from './DiscussionCard.shimmer';

export default {
	title: WIDGET.DISCUSSIONCARD,
	component: DiscussionCard,
};

const Template = (args: DiscussionCardProps) => (
	<DiscussionCard {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};

const ShimmerTemplate = () => (
	<DiscussionCardShimmer />
);

export const Shimmer = ShimmerTemplate.bind({});
