import {
	WIDGET,
	InfoCardProps,
} from '@blue-learn/schema';
import React from 'react';
import InfoCard from './InfoCard';
import * as Mock from './InfoCard.mock';

export default {
	title: WIDGET.INFOCARD,
	component: InfoCard,
};

const Template = (args: InfoCardProps) => (
	<InfoCard {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
