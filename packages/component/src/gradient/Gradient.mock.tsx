import {
	ColorTokens,
	GradientProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import { View } from 'react-native';

export const args: GradientProps = {
	colors: [
		ColorTokens.Blue_800,
		ColorTokens.Blue_100,
	],
	children: [
		<View
			style={{
				backgroundColor: '#fff000',
				height: 50,
				width: 100,
				marginBottom: 20,
			}}
		/>,
	],
	widgetItems: [
		{
			id: 'button',
			type: WIDGET.BUTTON,
			props: {
				label: 'hello stack',
			},
		},
	],
};
export const argTypes = {};
