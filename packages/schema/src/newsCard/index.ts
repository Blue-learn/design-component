import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { PaddingProps } from '../padding';
import { Action } from '../types';

export interface SourceProps {
	name: string;
	image?: string;
}

export enum LikeStateTokens {
	SELECTED = 'SELECTED',
	NOT_SELECTED = 'NOT_SELECTED',
}

export type NewsCardProps = {
	padding?: PaddingProps;
	margin?: PaddingProps;
	bgColor?: ColorTokens;
	borderRadius?: BorderRadiusTokens;

	imageURL?: string;
	URL?: string;
	title: string;
	subtitle: string | null;
	source: SourceProps | null;
	timeStamp?: string;
	likeState?: LikeStateTokens;
	onPress?: Function;
	likeAction?: Action;
	discussAction?: Action;
	MoreAction?: Action;
	discussActionLabel?: string;
};
