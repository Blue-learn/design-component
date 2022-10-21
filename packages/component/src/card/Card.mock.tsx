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
import { Typography } from '../typography/Typography';

export const args: CardProps = {
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
	bgColor: ColorTokens.Grey_50,
	padding: {
		top: SizeTypeTokens.LG,
		bottom: SizeTypeTokens.LG,
		left: SizeTypeTokens.XL,
		right: SizeTypeTokens.XL,
	},
	alignItems: StackAlignItems.center,
	justifyContent: StackJustifyContent.center,
};

export const argTypes = {
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
