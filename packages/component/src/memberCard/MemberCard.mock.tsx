import {
	BorderRadiusTokens,
	ColorTokens,
	MemberCardProps,
	SizeTypeTokens,
} from '@blue-learn/schema';

export const args: MemberCardProps = {
	title: 'Saidatta Sahu',
	subtitle: 'Software Engineer',
	avatar:
		'https://reactnative.dev/img/tiny_logo.png',
	headline: 'lorem ipsum dolor sit amet',
	chipsTitle: 'Talk to me about',
	location: 'Bangalore, India',
	chips: ['aiml', 'anime', 'art', 'commerce'],
	margin: {
		bottom: SizeTypeTokens.XL,
	},
	padding: {
		vertical: SizeTypeTokens.LG,
		horizontal: SizeTypeTokens.LG,
	},
	bgColor: ColorTokens.Grey_50,
	borderRadius: BorderRadiusTokens.BR2,
	onPress: () => {},
	cta: () => {},
};

export const argTypes = {};
