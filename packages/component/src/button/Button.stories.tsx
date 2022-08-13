import Button from './Button';
import {
	ButtonProps,
	WIDGET,
} from '@blue-learn/schema';
import { MockedWidgetProps } from '../mock';
import * as Mock from './Button.mock';

export default {
	title: WIDGET.BUTTON,
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
	MockedWidgetProps.renderItem({
		id: WIDGET.BUTTON,
		type: WIDGET.BUTTON,
		props: {
			...args,
		},
	});

export const Component = Template.bind({});
Component.args = {
	...Mock.args,
	renderItem: MockedWidgetProps.renderItem,
};
Component.argTypes = Mock.argTypes;
