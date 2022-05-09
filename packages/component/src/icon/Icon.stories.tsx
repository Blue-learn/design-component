import {
	ButtonProps,
	ColorTokens,
	IconProps,
	IconSizeTokens,
	IconTokens,
} from '@blue-learn/schema';
import React from 'react';
import Icon from './Icon';

export default {
	title: 'Atoms/Icon',
	component: Icon,
	color: '#fff',
};

const Template = (args: IconProps) => (
	<Icon {...args} />
);

export const IconComponent = Template.bind({});

IconComponent.args = {
	name: 'chat',
};

IconComponent.argTypes = {
	name: {
		control: 'select',
		options: [...Object.values(IconTokens)],
	},
	size: {
		control: 'select',
		options: [...Object.values(IconSizeTokens)],
	},
	color: {
		control: 'select',
		options: [...Object.values(ColorTokens)],
	},
};
