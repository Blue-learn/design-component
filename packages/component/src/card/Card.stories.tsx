import {
	ButtonTypeTokens,
	CardProps,
	ColorTokens,
	SpaceTypeTokens,
	StackAlignType,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import { CommonWidgetProps } from '../mock';
import Typography from '../typography/Typography';
import Card from './Card';

export default {
	title: 'Example/Card',
	component: Card,
};

const Template = (args: CardProps) => {
	return CommonWidgetProps.renderItem({
		id: 'test_id',
		type: WIDGET.CARD,
		props: { ...args },
	});
};

export const CardComponent = Template.bind({});

CardComponent.args = {
	renderItem: CommonWidgetProps.renderItem,
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
	gradient: {
		colors: [
			ColorTokens.Blue_300,
			ColorTokens.Blue_600,
		],
	},
	padding: {
		top: SpaceTypeTokens.LG,
		bottom: SpaceTypeTokens.LG,
		left: SpaceTypeTokens.XL,
		right: SpaceTypeTokens.XL,
	},
	flex: StackAlignType.flexStart,
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
	paddingHorizontal: {
		control: 'select',
		options: [
			...Object.values(SpaceTypeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	paddingVertical: {
		control: 'select',
		options: [
			...Object.values(SpaceTypeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
