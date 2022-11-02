import { ColorTokens } from '@blue-learn/schema';

export const args = {
	title: 'Read this',
	subtitle:
		'Your gig post will be active for 7 days and we’ll send you a reminder to either close the listing or extend it for another 7 days',
};

export const argTypes = {
	bgColor: {
		control: 'select',
		options: [null, ...Object.values(ColorTokens)],
	},
};
