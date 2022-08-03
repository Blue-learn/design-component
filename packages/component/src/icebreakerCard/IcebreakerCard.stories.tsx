import { IcebreakerCardProps } from '@blue-learn/schema';
import React from 'react';
import IcebreakerCard from './IcebreakerCard';

export default {
	title: 'Component/IcebreakerCard',
	component: IcebreakerCard,
};

const Template = (args: IcebreakerCardProps) => (
	<IcebreakerCard {...args} />
);

export const IcebreakerCardCompoent =
	Template.bind({});

IcebreakerCardCompoent.args = {
	title: 'Saidatta Sahu',
	subtitle: 'Software Engineer',
	ctaText: 'Reply',
};

IcebreakerCardCompoent.argTypes = {};
