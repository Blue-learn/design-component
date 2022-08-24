import {
	ColorTokens,
	GradientColorTokens,
} from '@blue-learn/schema';

export const args = {
	title: 'Saidatta Sahu',
	subtitle: 'Software Engineer',
	ctaText: 'Reply',
	gradient: { colors: GradientColorTokens.IB_1 },
	bgColor: ColorTokens.Grey_600,
};

export const argTypes = {
	bgColor: {
		control: 'select',
		options: [null, ...Object.values(ColorTokens)],
	},
};
