import {
	ImageProps,
	ImageSizeTokens,
} from '@blue-learn/schema';
import React from 'react';
import Image from './Image';

export default {
	title: 'Example/Image',
	component: Image,
	uri: 'https://images.unsplash.com/photo-1652680882466-e83b0cccab34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2153&q=80',
	size: ImageSizeTokens.lg,
};

const Template = (args: ImageProps) => (
	<Image {...args} />
);

export const ImageComponent = Template.bind({});

ImageComponent.args = {
	uri: 'https://images.unsplash.com/photo-1652680882466-e83b0cccab34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2153&q=50',
	size: ImageSizeTokens.xl,
};

ImageComponent.argTypes = {
	size: {
		control: 'select',
		options: [...Object.values(ImageSizeTokens)],
	},
};
