import React from 'react';
import { TabsProps } from '@blue-learn/schema';

export const args: TabsProps = {
	options: [
		{ label: 'Tab 1' },
		{ label: 'Tab 2' },
	],
	components: ['Tab 1 contents', 'Tab 2 contents'],
};
export const argTypes = {};
