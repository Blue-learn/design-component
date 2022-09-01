import { GradientColorTokens } from '../colors';
import { PaddingProps } from '../padding';
import { TagProps } from '../tag';
import { Action } from '../types';

export type DiscussionCardProps = {
	gradientColor?: GradientColorTokens;
	margin?: PaddingProps;
	/**
	 * Header
	 */
	userLabel: string;
	userAvatarURL: string;
	tag?: TagProps[];
	/**
	 * body
	 */
	title: string;
	subtitle?: string;
	clubTitle?: string;
	/**
	 * Footer
	 */
	participants?: string[];
	participantsLabel?: string;
	ctaText?: string;
	profileAction?: Action;
	onPress?: Function;
};
