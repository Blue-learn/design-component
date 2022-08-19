import {
	ColorTokens,
	IconProps,
	IconSizeTokens,
	IconTokens,
} from '@blue-learn/schema';

export const args: IconProps = {
	name: 'chat',
};

export const argTypes = {
	name: {
		control: 'select',
		options: [...Object.values(IconTokens)].sort(),
	},
	size: {
		control: 'select',
		options: [...Object.values(IconSizeTokens)],
	},
	color: {
		control: 'select',
		options: [...Object.values(ColorTokens)],
	},
};
