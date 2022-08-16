import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { PaddingProps } from '../padding';

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
	bgColor?: ColorTokens;
	borderRadius?: BorderRadiusTokens;

	imageURL?: string;
	URL?: string;
	title: string;
	subtitle?: string;
	source?: SourceProps;
	timeStamp?: string;
	likeState?: LikeStateTokens;
	onPress?: Function;
	likeAction?: Function;
	discussAction?: Function;
	discussActionLabel?: string;
	MoreAction?: Function;
};
