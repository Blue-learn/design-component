import {
	IconAlignmentTokens,
	IconSizeTokens,
	IconTokens,
	TagProps,
	TagTypeTokens,
} from '@blue-learn/schema';
import React from 'react';
import Tag from './Tag';

export default {
	title: 'Component/Tag',
	component: Tag,
};

const Template = (args: TagProps) => (
	<Tag {...args} />
);

export const TagComponent = Template.bind({});

TagComponent.args = {
	label: 'Tag',
	type: TagTypeTokens.DEFAULT,
	icon: {
		name: IconTokens.Fire,
		size: IconSizeTokens.XS,
		align: IconAlignmentTokens.left,
	},
};

TagComponent.argTypes = {
	type: {
		control: 'select',
		options: [...Object.values(TagTypeTokens)],
	},
};
