import {
	GradientColorTokens,
	DiscussionStateTokens,
	ColorTokens,
} from '@blue-learn/schema';

export const args = {
	gradientColor: GradientColorTokens.D_5,
	state: DiscussionStateTokens.UNSEEN,

	userLabel: 'Saidatta Sahu',
	userAvatarURL:
		'https://dev.files.bluelearn.in/STUDENT_PROFILE/AVATARS/MALE/2022-05-05T13%3A21%3A02%2B05%3A30-328.png',
	tags: [
		{
			label: 'Revenue Split',
			bgColor: ColorTokens.Grey_100,
		},
		{
			bgColor: ColorTokens.Accent_100,
			label: 'New',
		},
	],
	title:
		'Figma config 2022: What’s new in Figma lorem ipsum?',
	skills: [
		{
			skill: 'SQL',
			skill_id: 140,
			skill_image:
				'https://dev.files.bluelearn.in/SKILLS/1/2022-10-13T05%3A51%3A53%2B00%3A00-2022-03-27T12_29_39%2B00_00-Snapchat-2040241127-01.jpeg',
		},
		{
			skill: 'Angular',
			skill_id: 141,
			skill_image:
				'https://dev.files.bluelearn.in/SKILLS/1/2022-10-13T05%3A52%3A56%2B00%3A00-2022-03-27T12_29_39%2B00_00-Snapchat-2040241127-01.jpeg',
		},
		{
			skill: 'Nodejs',
			skill_id: 143,
			skill_image:
				'https://dev.files.bluelearn.in/SKILLS/1/2022-10-13T06%3A03%3A02%2B00%3A00-nodejs.png',
		},
		{
			skill: ' JS',
			skill_id: 146,
			skill_image:
				'https://dev.files.bluelearn.in/SKILLS/1/2022-10-13T06%3A34%3A58%2B00%3A00-nodejs.png',
		},
		{
			skill: 'Docker',
			skill_id: 151,
			skill_image:
				'https://dev.files.bluelearn.in/SKILLS/1/2022-10-13T06%3A48%3A46%2B00%3A00-nodejs.png',
		},
	],
	subtitle:
		'This is the description of the Card. It can go upto 2 lines and then three dots lorem ipsum dolor sit amet',
	participants: [
		'https://reactnative.dev/img/tiny_logo.png',
		'https://reactnative.dev/img/tiny_logo.png',
		'https://reactnative.dev/img/tiny_logo.png',
	],
	participantsLabel: ' 12 Participants',
	ctaText: '9+ Messages ->',
	timeStamp: '2 day',
};

export const argTypes = {
	gradientColor: {
		control: 'select',
		options: [
			null,
			...Object.values(GradientColorTokens),
		],
	},
	state: {
		control: 'select',
		options: [
			...Object.values(DiscussionStateTokens),
		],
	},
};
