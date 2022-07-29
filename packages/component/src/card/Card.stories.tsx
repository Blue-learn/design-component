import {
	ButtonTypeTokens,
	CardProps,
	ColorTokens,
	SizeTypeTokens,
	StackAlignItems,
	StackJustifyContent,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import { MockedWidgetProps } from '../mock';
import Typography from '../typography/Typography';
import Card from './Card';

export default {
	title: 'Component/Card',
	component: Card,
};

const Template = (args: CardProps) => {
	return MockedWidgetProps.renderItem({
		id: 'test_id',
		type: WIDGET.CARD,
		props: { ...args },
	});
};

export const CardComponent = Template.bind({});

CardComponent.args = {
	renderItem: MockedWidgetProps.renderItem,
	header: {
		children: (
			<Typography
				label={'header'}
				color={ColorTokens.Grey_100}
			/>
		),
		widgetItems: [
			{
				id: 'button',
				type: WIDGET.BUTTON,
				props: {
					type: ButtonTypeTokens.SmallFilled,
					label: 'hello stack',
				},
			},
		],
	},
	body: {
		children: (
			<Typography
				label={'header'}
				color={ColorTokens.Grey_300}
			/>
		),
	},
	footer: {
		children: (
			<Typography
				label={'header'}
				color={ColorTokens.Blue_300}
			/>
		),
	},
	bgColor: ColorTokens.Grey_600,
	padding: {
		top: SizeTypeTokens.LG,
		bottom: SizeTypeTokens.LG,
		left: SizeTypeTokens.XL,
		right: SizeTypeTokens.XL,
	},
	alignItems: StackAlignItems.center,
	justifyContent: StackJustifyContent.center,
};
CardComponent.argTypes = {
	bgColor: {
		control: 'select',
		options: [
			...Object.values(ColorTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	alignItems: {
		control: 'select',
		options: [...Object.values(StackAlignItems)],
	},
	justifyContent: {
		control: 'select',
		options: [
			...Object.values(StackJustifyContent),
		],
	},
};
