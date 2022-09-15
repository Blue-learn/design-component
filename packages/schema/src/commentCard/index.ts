import { PaddingProps } from '../padding';
import { UserCardProps } from '../userCard';
import { ColorTokens } from '../colors';
import { LikeStateTokens } from '../newsCard';
import { Action } from '../types';

export type CommentCardProps = {
	margin?: PaddingProps;
	padding?: PaddingProps;
	bgColor?: ColorTokens;
	/**
	 * Header
	 */
	user: UserCardProps;
	time?: string;
	/**
	 * body
	 */
	title: string;
	/**
	 * Footer
	 */
	likeState?: LikeStateTokens;
	likeCount?: string;
	likeAction?: Action;
	profileAction?: Action;
};
