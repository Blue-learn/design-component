import {
	TagProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import Tag from './Tag';
import * as Mock from './Tag.mock';

export default {
	title: WIDGET.TAG,
	component: Tag,
};

const Template = (args: TagProps) => (
	<Tag {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
