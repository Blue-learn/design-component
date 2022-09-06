import { PaddingProps } from '../padding';
import { Action } from '../types';
import { UserCardProps } from '../userCard';

export type CommentCardProps = {
	margin?: PaddingProps;
	/**
	 * Header
	 */
	user: UserCardProps;
	time: string;
	/**
	 * body
	 */
	title: string;
	/**
	 * Footer
	 */
	likeCount: number;
	likeAction: Action;
};
