import {
	ColorTokens,
	IcebreakerCardProps,
} from '@blue-learn/schema';

export const args: IcebreakerCardProps = {
	title: 'Saidatta Sahu',
	subtitle: 'Software Engineer',
	ctaText: 'Reply',
	// gradient: { colors: GradientColorTokens.IB_1 },
	bgColor: ColorTokens.Primary_50,
	onPress: () => {},
};

export const argTypes = {
	bgColor: {
		control: 'select',
		options: [null, ...Object.values(ColorTokens)],
	},
};
