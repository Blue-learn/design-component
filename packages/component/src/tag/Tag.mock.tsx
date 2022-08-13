import {
	IconAlignmentTokens,
	IconSizeTokens,
	IconTokens,
	TagProps,
	TagTypeTokens,
} from '@blue-learn/schema';
import React from 'react';
import Tag from './Tag';

export const args: TagProps = {
	label: 'Tag',
	type: TagTypeTokens.DEFAULT,
	icon: {
		name: IconTokens.Fire,
		size: IconSizeTokens.XS,
		align: IconAlignmentTokens.left,
	},
};

export const argTypes = {
	type: {
		control: 'select',
		options: [...Object.values(TagTypeTokens)],
	},
};
