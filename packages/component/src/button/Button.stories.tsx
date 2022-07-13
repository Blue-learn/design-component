import Button from './Button';
import {
	ButtonProps,
	ButtonTypeTokens,
	ButtonWidthTypeToken,
	IconSizeTokens,
	IconTokens,
	StackAlignType,
	WIDGET,
} from '@blue-learn/schema';
import { CommonWidgetProps } from '../mock';

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		label: 'Default Button',
	},
	parameters: {
		actions: {
			handles: ['click .btn'],
		},
	},
};

const Template = (args: ButtonProps) =>
	CommonWidgetProps.renderItem({
		id: 'id____',
		type: WIDGET.BUTTON,
		props: {
			...args,
		},
	});

export const ButtonStory = Template.bind({});
ButtonStory.args = {
	label: 'All Buttons',
	loading: false,
	type: ButtonTypeTokens.LargeFilled,
	icon: {
		name: IconTokens.RightArrow,
		size: IconSizeTokens.XS,
	},
};
ButtonStory.argTypes = {
	type: {
		control: 'select',
		options: [
			...Object.values(ButtonTypeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	icon: {
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
	flex: {
		control: 'select',
		options: [...Object.values(StackAlignType)],
	},
	iconAlignment: {
		control: 'radio',
		options: ['left', 'right'],
		default: 'left',
	},
	width: {
		control: 'select',
		options: [
			...Object.values(ButtonWidthTypeToken),
		],
	},
	onPress: { action: 'clicked' },
};
