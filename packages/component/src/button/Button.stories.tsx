import Button from './Button';
import {
	ButtonProps,
	ButtonTypeTokens,
	ButtonWidthTypeToken,
	IconTokens,
	WIDGET,
} from '@blue-learn/schema';
import { CommonWidgetProps } from '../mock';

export default {
	title: 'Component/Button',
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
	width: ButtonWidthTypeToken.CONTENT,
	// icon: {
	// 	name: IconTokens.Google,
	// 	size: IconSizeTokens.MD,
	// 	align: IconAlignmentTokens.left,
	// },
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
