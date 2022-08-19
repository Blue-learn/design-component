import {
	ImageProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import Image from './Image';
import * as Mock from './Image.mock';

export default {
	title: WIDGET.IMAGE,
	component: Image,
};

const Template = (args: ImageProps) => (
	<Image {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
