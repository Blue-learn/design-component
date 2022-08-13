import {
	SizeTypeTokens,
	SpaceProps,
} from '@blue-learn/schema';
import React from 'react';

export const args: SpaceProps = {
	size: SizeTypeTokens.SM,
};

export const argTypes = {
	size: {
		control: 'select',
		options: [...Object.values(SizeTypeTokens)],
	},
};
