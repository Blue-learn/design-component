import { MemberCardProps } from '@blue-learn/schema';
import React from 'react';
import MemberCard from './MemberCard';

export default {
	title: 'Component/MemberCard',
	component: MemberCard,
};

const Template = (args: MemberCardProps) => (
	<MemberCard {...args} />
);

export const MemberCardComponent = Template.bind(
	{},
);

MemberCardComponent.args = {
	title: 'Saidatta Sahu',
	subtitle: 'Software Engineer',
	avatar:
		'https://reactnative.dev/img/tiny_logo.png',
	headline: 'lorem ipsum dolor sit amet',
	chipsTitle: 'Talk to me about',
	location: 'Bangalore, India',
	chips: [
		'aiml',
		'anime',
		'art',
		'commerce',
		'content_creation',
		'crypto',
		'entrepreneurship',
		'internships',
		'uiux',
	],
};

MemberCardComponent.argTypes = {};
