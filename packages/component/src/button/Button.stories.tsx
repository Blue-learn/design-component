import {
	ButtonProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import * as Mock from './Button.mock';
import { Button } from './Button';

export default {
	title: WIDGET.BUTTON,
	component: Button,
	...Mock.args,
};

const Template = (args: ButtonProps) => (
	<Button {...args} />
);

export const Component = Template.bind({});

Component.args = Mock.args;

Component.argTypes = {
	...Mock.argTypes,
};
