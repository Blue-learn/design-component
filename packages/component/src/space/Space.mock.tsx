import {
	SizeTypeTokens,
	SpaceProps,
} from '@blue-learn/schema';

export const args: SpaceProps = {
	size: SizeTypeTokens.SM,
};

export const argTypes = {
	size: {
		control: 'select',
		options: [...Object.values(SizeTypeTokens)],
	},
};
