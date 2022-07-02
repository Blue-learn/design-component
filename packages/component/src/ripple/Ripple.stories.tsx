import { RippleProps } from '@blue-learn/schema';
import React from 'react';
import Ripple from './Ripple';

export default {
	title: 'Example/Ripple',
	component: Ripple,
};

const Template = (args: RippleProps) => (
	<Ripple {...args} />
);

export const RippleComponent = Template.bind({});
