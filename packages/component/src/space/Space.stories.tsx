import {
	inputTypeToken,
	SpaceProps,
	TextInputProps,
} from '@blue-learn/schema';
import React from 'react';
import { Space } from './Space';
import { View } from 'react-native';

export default {
	title: 'Example/space',
	component: Space,
};

// Use the <Stack /> once it's completed
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
	size: 2,
};
