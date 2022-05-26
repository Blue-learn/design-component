import {
	AvatarProps,
	avatarSizeTokens,
	ColorTokens,
	CornerRadiusTokens,
	DividerProps,
	IconProps,
	SpaceTypeTokens,
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
	thickness: 1,
};

DividerComponent.argTypes = {
	marginVertical: {
		control: 'select',
		options: [
			null,
			...Object.values(SpaceTypeTokens),
		],
	},
	paddingHorizontal: {
		control: 'select',
		options: [
			null,
			...Object.values(SpaceTypeTokens),
		],
	},
	color: {
		control: 'select',
		options: [null, ...Object.values(ColorTokens)],
	},
};
