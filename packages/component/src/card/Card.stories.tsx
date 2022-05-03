import React from 'react';
import Button from './Card';
import {
	CardProps,
	CardTypeTokens,
	WIDGET,
} from '@blue-learn/schema';
import { CommonWidgetProps } from '../mock';

export default {
	title: 'Example/Card',
	component: Button,
	argTypes: {
		label: 'Default Button',
	},
};

const Template = (args: CardProps) =>
	CommonWidgetProps.renderItem({
		id: 'card_id',
		type: WIDGET.CARD,
		props: { ...args, heading: args.heading, description: args.description },
	});

export const CardTest = Template.bind({});
CardTest.args = {
	heading: '',
	description: '',
	loading: false,
	type: CardTypeTokens.Normal,
	onButtonPress: null,
};
CardTest.argTypes = {
	type: {
		control: 'select',
		options: [
			...Object.values(CardTypeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
};
