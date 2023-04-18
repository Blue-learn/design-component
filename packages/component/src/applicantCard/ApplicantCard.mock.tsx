import {
	ApplicantCardProps,
	ApplicationSeenTokens,
} from '@blue-learn/schema';

export const args: ApplicantCardProps = {
	title: 'Saidatta Sahu',
	subtitle: 'Software Engineer',
	description:
		'Has proof-of-work' +
		' • ' +
		'2' +
		' out of ' +
		4 +
		' skills matching this gig',
	avatar:
		'https://reactnative.dev/img/tiny_logo.png',
	unreadCount: 2,
	state: ApplicationSeenTokens.SEEN,
	powState: ApplicationSeenTokens.SEEN,
	assignmentState: ApplicationSeenTokens.SEEN,
	status: 'Rejected',
	onPress: () => {},
};

export const argTypes = {
	state: {
		control: 'select',
		options: [
			...Object.values(ApplicationSeenTokens),
		],
	},
	powState: {
		control: 'select',
		options: [
			...Object.values(ApplicationSeenTokens),
		],
	},
	assignmentState: {
		control: 'select',
		options: [
			...Object.values(ApplicationSeenTokens),
		],
	},
};
