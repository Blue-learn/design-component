import {
	IcebreakerCardProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import IcebreakerCard from './IcebreakerCard';
import * as Mock from './IcebreakerCard.mock';

export default {
	title: WIDGET.ICEBREAKERCARD,
	component: IcebreakerCard,
};

const Template = (args: IcebreakerCardProps) => (
	<IcebreakerCard {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
