import {
	CommentCardProps,
	LikeStateTokens,
} from '@blue-learn/schema';

export const args: CommentCardProps = {
	user: {
		avatar:
			'https://dev.files.bluelearn.in/STUDENT_PROFILE/AVATARS/MALE/2022-05-05T13%3A21%3A02%2B05%3A30-328.png',
		title: 'John Doe',
	},
	title:
		'This is an example of comment on a post.',
	likeCount: '4',
	time: '5 day',
	likeState: LikeStateTokens.NOT_SELECTED,
	onPressLike: () => {},
	onPressProfile: () => {},
};

export const argTypes = {
	likeState: {
		control: 'select',
		options: [...Object.values(LikeStateTokens)],
	},
};
