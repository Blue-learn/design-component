import {
	IconProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import Icon from './Icon';
import * as Mock from './Icon.mock';

export default {
	title: WIDGET.ICON,
	component: Icon,
	color: '#fff',
};

const Template = (args: IconProps) => (
	<Icon {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
