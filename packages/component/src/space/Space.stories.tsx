import {
	SizeTypeTokens,
	SpaceProps,
} from '@blue-learn/schema';
import React from 'react';
import { Space } from './Space';
import { View } from 'react-native';

export default {
	title: 'Component/Space',
	component: Space,
};

const Template = (args: SpaceProps) => (
	<View style={{ flexDirection: 'row' }}>
		<View
			style={{
				backgroundColor: '#000',
				width: 50,
				height: 50,
			}}
		/>
		<Space {...args} />
		<View
			style={{
				backgroundColor: '#000',
				width: 50,
				height: 50,
			}}
		/>
	</View>
);

export const SpaceComponent = Template.bind({});

SpaceComponent.args = {
	size: SizeTypeTokens.SM,
};

SpaceComponent.argTypes = {
	size: {
		control: 'select',
		options: [...Object.values(SizeTypeTokens)],
	},
};
