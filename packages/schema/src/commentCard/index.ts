import { PaddingProps } from '../padding';
import { UserCardProps } from '../userCard';
import { ColorTokens } from '../colors';
import { LikeStateTokens } from '../newsCard';

export type CommentCardProps = {
	margin?: PaddingProps;
	padding?: PaddingProps;
	bgColor?: ColorTokens;
	/**
	 * Header
	 */
	user: UserCardProps;
	onPressProfile?: Function;
	time?: string;
	/**
	 * body
	 */
	title: string;
	/**
	 * Footer
	 */
	likeState?: LikeStateTokens;
	likeCount?: number;
	onPressLike?: Function;
};
