import { StackBaseProps } from '@blue-learn/schema';
import React from 'react';
import { View } from 'react-native';
import { VStack } from './VStack';

export default {
	title: 'Example/Stack/VStack',
	component: VStack,
};

const Template = (args: StackBaseProps) => (
	<VStack {...args}>
		<View
			style={{
				backgroundColor: '#000',
				height: 50,
				width: 100,
			}}
		/>
		<View
			style={{
				backgroundColor: '#000',
				height: 10,
				width: 120,
				marginTop: 4,
			}}
		/>
		<View
			style={{
				backgroundColor: '#000',
				height: 80,
				width: 150,
				marginTop: 4,
			}}
		/>
	</VStack>
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

export const VStackComponent = Template.bind({});

VStackComponent.argTypes = {
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
