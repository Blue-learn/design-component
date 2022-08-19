import {
	LikeStateTokens,
	NewsCardProps,
} from '@blue-learn/schema';

export const args: NewsCardProps = {
	title:
		'This is the Title of this particular News Article.',
	subtitle:
		'And this is the optional description of this blank dummy news article.',
	timeStamp: '5 mins ago',
	imageURL:
		'https://images.unsplash.com/photo-1652680882466-e83b0cccab34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2153&q=50',
	source: {
		image:
			'https://reactnative.dev/img/tiny_logo.png',
		name: 'India Today',
	},
	likeState: LikeStateTokens.NOT_SELECTED,
	discussActionLabel: 'Discuss',
};

export const argTypes = {
	likeState: {
		control: 'select',
		options: [...Object.values(LikeStateTokens)],
	},
};
