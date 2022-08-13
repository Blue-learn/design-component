import {
	MemberCardProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import MemberCard from './MemberCard';
import * as Mock from './MemberCard.mock';

export default {
	title: WIDGET.MEMBERCARD,
	component: MemberCard,
};

const Template = (args: MemberCardProps) => (
	<MemberCard {...args} />
);

export const MemberCardComponent = Template.bind(
	{},
);

MemberCardComponent.args = {
	...Mock.args,
};

MemberCardComponent.argTypes = {};
