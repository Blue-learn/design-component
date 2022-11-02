import { GradientColorTokens } from '../colors';
import { PaddingProps } from '../padding';
import { TagProps } from '../tag';
import { Action } from '../types';

export enum DiscussionStateTokens {
	SEEN = 'SEEN',
	UNSEEN = 'UNSEEN',
}

export type Skill = {
	skill: string;
	skill_id: number;
	confidence: number;
	skill_image: string;
	fk_student_id: number;
};

export type DiscussionCardProps = {
	gradientColor?: GradientColorTokens;
	margin?: PaddingProps;
	/**
	 * Header
	 */
	userLabel: string;
	userAvatarURL: string;
	tags?: TagProps[];
	/**
	 * body
	 */
	title: string;
	subtitle?: string;
	clubTitle?: string;
	skills?: Skill[];
	/**
	 * Footer
	 */
	state: DiscussionStateTokens;
	participants?: string[];
	participantsLabel?: string;
	ctaText?: string;
	profileAction?: Action;
	onPress?: Function;
};
