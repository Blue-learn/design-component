import { PaddingProps } from '../padding';
import { Action } from '../types';
import { UserCardProps } from '../userCard';
import { ColorTokens } from '../colors';

export type CommentCardProps = {
	margin?: PaddingProps;
	padding?: PaddingProps;
	bgColor?: ColorTokens;
	/**
	 * Header
	 */
	user: UserCardProps;
	onPress?: Function;
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
