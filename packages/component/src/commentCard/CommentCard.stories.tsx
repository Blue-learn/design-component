import {
	CommentCardProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import * as Mock from './CommentCard.mock';
import { CommentCard } from './CommentCard';

export default {
	title: WIDGET.COMMENTCARD,
	component: CommentCard,
};

const Template = (args: CommentCardProps) => (
	<CommentCard {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
