import {
	ColorTokens,
	SizeTypeTokens,
	DividerSizeTokens,
} from '@blue-learn/schema';

export const args = {
	size: DividerSizeTokens.MD,
	margin: {
		vertical: SizeTypeTokens.SM,
		horizontal: SizeTypeTokens.SM,
	},
};

export const argTypes = {
	size: {
		control: 'select',
		options: [...Object.values(DividerSizeTokens)],
	},
	margin: {
		vertical: {
			control: 'select',
			options: [...Object.values(SizeTypeTokens)],
		},
		horizontal: {
			control: 'select',
			options: [...Object.values(SizeTypeTokens)],
		},
	},
	color: {
		control: 'select',
		options: [...Object.values(ColorTokens)],
	},
};
