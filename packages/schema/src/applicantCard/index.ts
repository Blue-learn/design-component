import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { PaddingProps } from '../padding';

export enum ApplicationStateTokens {
	SEEN = 'SEEN',
	UNSEEN = 'UNSEEN',
}

export type ApplicantCardProps = {
	padding?: PaddingProps;
	bgColor?: ColorTokens;
	borderRadius?: BorderRadiusTokens;
	state?: ApplicationStateTokens;
	avatar: string;
	title: string;
	subtitle: string | null;
	unreadCount?: number;
	onPress?: Function;
	chatCTA?: Function;
	margin?: PaddingProps;
	projectCTA?: Function;
	projectTitle?: string;
	projectImage?: string;
};
