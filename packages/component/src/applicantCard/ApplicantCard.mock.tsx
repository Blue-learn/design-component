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
	status: 'Rejected',
	applicationUpdateStatus: 'Applied 2 days ago',
	chatCTA: () => {
		console.log('Chat CTA');
	},
};

export const argTypes = {
	state: {
		control: 'select',
		options: [
			...Object.values(ApplicationStateTokens),
		],
	},
};
