import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { PaddingProps } from '../padding';
import { Action } from '../types';

export type MemberCardProps = {
	padding?: PaddingProps;
	bgColor?: ColorTokens;
	borderRadius?: BorderRadiusTokens;
	avatar: string;
	title: string;
	subtitle: string | null;
	location?: string;
	onPress?: Function;
	cta?: Function;
	headline?: string;
	chips?: string[];
	chipsTitle?: string;
	ctaAction?: Action;
	margin?: PaddingProps;
};
