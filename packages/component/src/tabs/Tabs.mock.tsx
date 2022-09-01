import React from 'react';
import { TabsProps } from '@blue-learn/schema';
import Typography from '../typography/Typography';

export const args: TabsProps = {
	options: [
		{ label: 'Tab 1' },
		{ label: 'Tab 2' },
	],
	components: [
		<Typography label={'1st Tab'} />,
		<Typography label={'2nd Tab'} />,
	],
};
export const argTypes = {};
