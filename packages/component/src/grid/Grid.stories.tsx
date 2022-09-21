import {
	GridProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import * as Mock from './Grid.mock';
import { Grid } from './Grid';
import { MockedWidgetProps } from '../mock';

export default {
	title: WIDGET.GRID,
	component: Grid,
};

const Template = (args: GridProps) => (
	<Grid {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
	renderItem: MockedWidgetProps.renderItem,
};

Component.argTypes = {
	...Mock.argTypes,
};
