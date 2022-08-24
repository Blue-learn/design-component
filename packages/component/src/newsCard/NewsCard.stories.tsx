import {
	NewsCardProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import NewsCard from './NewsCard';
import * as Mock from './NewsCard.mock';
import NewsCardShimmer from './NewsCard.shimmer';

export default {
	title: WIDGET.NEWSCARD,
	component: NewsCard,
};

const Template = (args: NewsCardProps) => (
	<NewsCard {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};

const ShimmerTemplate = () => <NewsCardShimmer />;

export const Shimmer = ShimmerTemplate.bind({});
