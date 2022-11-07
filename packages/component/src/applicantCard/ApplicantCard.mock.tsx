import {
	ApplicantCardProps,
	ApplicationStateTokens,
} from '@blue-learn/schema';

export const args: ApplicantCardProps = {
	title: 'Saidatta Sahu',
	subtitle: 'Software Engineer',
	avatar:
		'https://reactnative.dev/img/tiny_logo.png',
	projectTitle: 'Project Title',
	projectImage:
		'https://reactnative.dev/img/tiny_logo.png',
	unreadCount: 2,
	state: ApplicationStateTokens.SEEN,
};

export const argTypes = {
	state: {
		control: 'select',
		options: [
			...Object.values(ApplicationStateTokens),
		],
	},
};
