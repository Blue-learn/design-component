import React from 'react';
import {
	ColorTokens,
	ProgressIndicatorProps,
} from '@blue-learn/schema';

export const args: ProgressIndicatorProps = {
	size: 3,
	activeIndex: 1,
	color: ColorTokens.Primary_500,
};

export const argTypes = {
	color: {
		control: 'select',
		options: [...Object.values(ColorTokens)],
	},
};
