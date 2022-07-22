import { ProgressIndicatorProps } from '@blue-learn/schema';
import React from 'react';
import ProgressIndicator from './ProgressIndicator';

export default {
	title: 'Component/Progress Indicator',
	component: ProgressIndicator,
};

const Template = (
	args: ProgressIndicatorProps,
) => <ProgressIndicator {...args} />;

export const ProgessIndicatorComponent =
	Template.bind({});

ProgessIndicatorComponent.args = {
	size: 3,
	activeIndex: 1,
};
