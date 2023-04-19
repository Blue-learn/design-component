import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { PaddingProps } from '../padding';

export enum ApplicationSeenTokens {
	SEEN = 'SEEN',
	UNSEEN = 'UNSEEN',
}

export type ApplicantCardProps = {
	padding?: PaddingProps;
	bgColor?: ColorTokens;
	margin?: PaddingProps;
	borderRadius?: BorderRadiusTokens;
	state?: ApplicationSeenTokens;
	powState?: ApplicationSeenTokens;
	assignmentState?: ApplicationSeenTokens;
	tagColor?: ColorTokens;
	status?: string;
	avatar: string;
	title: string;
	subtitle: string | null;
	description?: string;
	unreadCount?: number;
	onPress?: Function;
};
