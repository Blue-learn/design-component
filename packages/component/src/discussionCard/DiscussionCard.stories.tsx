import {
	DiscussionCardProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import DicussionCard from './DiscussionCard';
import * as Mock from './DiscussionCard.mock';

export default {
	title: WIDGET.DISCUSSIONCARD,
	component: DicussionCard,
};

const Template = (args: DiscussionCardProps) => (
	<DicussionCard {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
