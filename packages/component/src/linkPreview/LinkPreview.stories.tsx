import React from 'react';
import { LinkPreviewProps } from '@blue-learn/schema';
import LinkPreview from './LinkPreview';

export default {
	title: 'Component/Link Preview',
	component: LinkPreview,
	text: 'https://www.bluelearn.in',
};

const Template = (args: LinkPreviewProps) => (
	<LinkPreview {...args} />
);

export const LinkPreviewComponent = Template.bind(
	{},
);

LinkPreviewComponent.args = {
	text: 'https://www.bluelearn.in',
};
