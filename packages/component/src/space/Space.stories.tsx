import {
	SpaceProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import { Space } from './Space';
import { View } from 'react-native';
import * as Mock from './Space.mock';

export default {
	title: WIDGET.SPACE,
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

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};

Component.argTypes = {
	...Mock.argTypes,
};
