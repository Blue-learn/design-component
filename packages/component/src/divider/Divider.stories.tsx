import {
	ColorTokens,
	DividerProps,
	SizeTypeTokens,
	DividerSizeTokens,
} from '@blue-learn/schema';
import React from 'react';
import { Divider } from './Divider';

export default {
	title: 'Example/Divider',
	component: Divider,
};

const Template = (args: DividerProps) => (
	<Divider {...args} />
);

export const DividerComponent = Template.bind({});

DividerComponent.args = {
	size: DividerSizeTokens.MD,
	margin: {
		vertical: SizeTypeTokens.SM,
		horizontal: SizeTypeTokens.SM,
	},
};

DividerComponent.argTypes = {
	size: {
		control: 'select',
		options: [...Object.values(DividerSizeTokens)],
	},
	margin: {
		vertical: {
			control: 'select',
			options: [...Object.values(SizeTypeTokens)],
		},
		horizontal: {
			control: 'select',
			options: [...Object.values(SizeTypeTokens)],
		},
	},
	color: {
		control: 'select',
		options: [...Object.values(ColorTokens)],
	},
};
