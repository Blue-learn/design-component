import {
	ButtonProps,
	ButtonTypeTokens,
	ButtonWidthTypeToken,
	IconTokens,
	WidgetProps,
} from '@blue-learn/schema';

export const args: ButtonProps & WidgetProps = {
	label: 'All Buttons',
	loading: false,
	type: ButtonTypeTokens.LargeFilled,
	width: ButtonWidthTypeToken.CONTENT,
};

export const argTypes = {
	type: {
		control: 'select',
		options: [
			...Object.values(ButtonTypeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	width: {
		control: 'select',
		options: [
			...Object.values(ButtonWidthTypeToken),
		],
	},
	icon: {
		default: null,
		control: 'object',
		options: [...Object.values(IconTokens)],
	},
	iconName: {
		control: 'select',
		options: [
			null,
			...Object.values(IconTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	iconAlignment: {
		control: 'select',
		options: [null, 'left', 'right'],
		default: 'left',
	},
	onPress: { action: 'clicked' },
};
