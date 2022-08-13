import { DividerProps } from '@blue-learn/schema';
import React from 'react';
import { Divider } from './Divider';
import * as Mock from './Divider.mock';

export default {
	title: 'Component/Divider',
	component: Divider,
};

const Template = (args: DividerProps) => (
	<Divider {...args} />
);

export const DividerComponent = Template.bind({});

DividerComponent.args = {
	...Mock.args,
};

DividerComponent.argTypes = {
	...Mock.argTypes,
};
