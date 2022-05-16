import { HStackProps } from '@blue-learn/schema';
import React from 'react';
import { View } from 'react-native';
import HStack from './HStack';

export default {
	title: 'Example/Stack/HStack',
	component: HStack,
};

const Template = (args: HStackProps) => (
	<HStack {...args}>
		<View
			style={{
				backgroundColor: '#000',
				height: 50,
				width: 50,
				marginRight: 4,
			}}
		/>
		<View
			style={{
				backgroundColor: '#000',
				height: 10,
				width: 50,
				marginRight: 4,
			}}
		/>
		<View
			style={{
				backgroundColor: '#000',
				height: 80,
				width: 50,
				marginRight: 4,
			}}
		/>
	</HStack>
);

// const Template = (args: HStackProps) =>
// 	CommonWidgetProps.renderItem({
// 		id: '1',
// 		type: WIDGET.HSTACK,
// 		props: {
// 			childrenTemplate: [
// 				{
// 					id: 'button1',
// 					type: WIDGET.BUTTON,
// 					props: { label: 'Button 1' },
// 				},
// 				{
// 					id: 'space',
// 					type: WIDGET.SPACE,
// 				},
// 				{
// 					id: 'button2',
// 					type: WIDGET.BUTTON,
// 					props: { label: 'Button 1' },
// 				},
// 			],
// 		},
// 	});

export const HStackComponent = Template.bind({});

HStackComponent.argTypes = {
	justifyContent: {
		control: 'select',
		options: [
			'space-between',
			'space-around',
			'space-evenly',
			'flex-start',
			'flex-end',
			'center',
		],
	},
	alignItems: {
		control: 'select',
		options: [
			'stretch',
			'baseline',
			'flex-start',
			'flex-end',
			'center',
		],
	},
	wrap: {
		control: 'radio',
		options: [true, false],
	},
};
