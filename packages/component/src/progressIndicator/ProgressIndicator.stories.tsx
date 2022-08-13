import {
	ProgressIndicatorProps,
	WIDGET,
} from '@blue-learn/schema';
import React from 'react';
import ProgressIndicator from './ProgressIndicator';
import * as Mock from './ProgressIndicator.mock';

export default {
	title: WIDGET.PROGRESSINDICATOR,
	component: ProgressIndicator,
};

const Template = (
	args: ProgressIndicatorProps,
) => <ProgressIndicator {...args} />;

export const ProgessIndicatorComponent =
	Template.bind({});

ProgessIndicatorComponent.args = {
	...Mock.args,
};
