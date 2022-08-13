import React from 'react';
import {
	LinkPreviewProps,
	WIDGET,
} from '@blue-learn/schema';
import LinkPreview from './LinkPreview';
import * as Mock from './LinkPreview.mock';

export default {
	title: WIDGET.LINKPREVIEW,
	component: LinkPreview,
	text: 'https://www.bluelearn.in',
};

const Template = (args: LinkPreviewProps) => (
	<LinkPreview {...args} />
);

export const Component = Template.bind({});

Component.args = {
	...Mock.args,
};
