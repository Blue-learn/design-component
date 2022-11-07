import {
	ApplicantCardProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import ApplicantCard from './ApplicantCard';
import * as Mock from './ApplicantCard.mock';

export default {
	title: WIDGET.APPLICANTCARD,
	component: ApplicantCard,
};

const Template = (args: ApplicantCardProps) => (
	<ApplicantCard {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
