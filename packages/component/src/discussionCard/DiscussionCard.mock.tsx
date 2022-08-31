import {
	GradientColorTokens,
	IconAlignmentTokens,
	IconSizeTokens,
	IconTokens,
	TagTypeTokens,
} from '@blue-learn/schema';

export const args = {
	gradientColor: GradientColorTokens.D_5,

	userLabel: 'Saidatta Sahu',
	userAvatarURL:
		'https://dev.files.bluelearn.in/STUDENT_PROFILE/AVATARS/MALE/2022-05-05T13%3A21%3A02%2B05%3A30-328.png',
	tag: [
		{
			type: TagTypeTokens.SECONDARY,
			label: 'Hot',
			icon: {
				name: IconTokens.Fire,
				size: IconSizeTokens.XS,
				align: IconAlignmentTokens.left,
			},
		},
	],
	clubTitle: 'Startup Club',
	title:
		'Figma config 2022: What’s new in Figma lorem ipsum?',
	subTitle: 'Subtitle Lorem Ipsums',
	participants: [
		'https://reactnative.dev/img/tiny_logo.png',
		'https://reactnative.dev/img/tiny_logo.png',
		'https://reactnative.dev/img/tiny_logo.png',
	],
	participantsLabel: ' 12 Participants',
	ctaText: '9+ Messages ->',
};

export const argTypes = {};
