import {
	avatarSizeTokens,
	ListItemProps,
} from '@blue-learn/schema';
import React from 'react';
import ListItem from './ListItem';

export default {
	title: 'Example/ListItem',
	component: ListItem,
};

const Template = (args: ListItemProps) => (
	<ListItem {...args} />
);

export const ListItemComponent = Template.bind(
	{},
);

ListItemComponent.args = {
	title: 'List Item',
	subTitle: 'description',
	avatarSize: avatarSizeTokens.LG,
	avatarUri:
		'https://reactnative.dev/img/tiny_logo.png',
};
