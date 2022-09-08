import {
	GradientColorTokens,
	IconAlignmentTokens,
	IconSizeTokens,
	IconTokens,
	TagProps,
	TagTypeTokens,
} from '@blue-learn/schema';

export const args: TagProps = {
	label: 'Tag',
	type: TagTypeTokens.DEFAULT,
	icon: {
		name: IconTokens.Fire,
		size: IconSizeTokens.XS,
		align: IconAlignmentTokens.left,
	},
};

export const argTypes = {
	type: {
		control: 'select',
		options: [...Object.values(TagTypeTokens)],
	},
	gradientColor: {
		control: 'select',
		options: [
			null,
			...Object.values(GradientColorTokens),
		],
	},
};
