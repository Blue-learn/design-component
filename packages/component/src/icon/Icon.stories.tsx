import {
	ButtonProps,
	ColorTokens,
	IconProps,
	IconTokens,
} from '@blue-learn/schema';
import React from 'react';
import Icon from './Icon';

export default {
	title: 'Example/Icon',
	component: Icon,
	color: '#fff',
};

const Template = (args: IconProps) => (
	<Icon {...args} />
);

export const IconComponent = Template.bind({});

IconComponent.args = {
	name: 'chat',
	size: 24,
	color: '#fff',
};

IconComponent.argTypes = {
	name: {
		control: 'select',
		options: [...Object.values(IconTokens)],
		default: 'chat',
	},
	size: {
		control: {
			type: 'number',
			min: 1,
			max: 60,
			step: 1,
		},
	},
};
