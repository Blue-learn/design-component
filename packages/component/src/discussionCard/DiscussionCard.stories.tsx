import { DiscussionCardProps } from '@blue-learn/schema';
import React from 'react';
import DiscussionCard from './DiscussionCard';

export default {
	title: 'Example/DiscussionCard',
	component: DiscussionCard,
	argTypes: {
		lable:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, exercitationem!',
	},
};

const Template = (args: DiscussionCardProps) => (
	<DiscussionCard {...args} />
);

export const Discussion = Template.bind({});
Discussion.args = {
	label:
		'This link https://github.com/flyerhq can be extracted from the text',
};
