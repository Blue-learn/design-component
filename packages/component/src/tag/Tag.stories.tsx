import { TagProps } from '@blue-learn/schema';
import React from 'react';
import Tag from './Tag';
import * as Mock from './Tag.mock';

export default {
	title: 'Component/Tag',
	component: Tag,
};

const Template = (args: TagProps) => (
	<Tag {...args} />
);

export const TagComponent = Template.bind({});

TagComponent.args = {
	...Mock.args,
};

TagComponent.argTypes = {
	...Mock.argTypes,
};
