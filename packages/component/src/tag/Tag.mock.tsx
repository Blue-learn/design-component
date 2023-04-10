import {
	ColorTokens,
	GradientColorTokens,
	IconAlignmentTokens,
	IconSizeTokens,
	IconTokens,
	ImageSizeTokens,
	SizeTypeTokens,
	TagProps,
	TagTypeTokens,
} from '@blue-learn/schema';

export const args: TagProps = {
	label: 'Tag',
	type: TagTypeTokens.DEFAULT,
	bgColor: ColorTokens.Secondary_100,
	icon: {
		name: IconTokens.Fire,
		size: IconSizeTokens.XS,
		align: IconAlignmentTokens.left,
	},
	image: {
		size: ImageSizeTokens.XXXS,
		uri: 'https://reactnative.dev/img/tiny_logo.png',
	},
	margin: {
		right: SizeTypeTokens.LG,
		bottom: SizeTypeTokens.MD,
	},
};

export const argTypes = {
	type: {
		control: 'select',
		options: [...Object.values(TagTypeTokens)],
	},
	bgColor: {
		control: 'select',
		options: [...Object.values(ColorTokens)],
	},
	gradientColor: {
		control: 'select',
		options: [
			null,
			...Object.values(GradientColorTokens),
		],
	},
};
