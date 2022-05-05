import { ColorTokens } from '../colors';

export enum ChatCardTypeTokens {
	sender = 'sender',
	receiver = 'receiver',
	reply = 'reply',
}

export type ChatCardProps = {
	type?: ChatCardTypeTokens;
	label?: string;
	nameText?: string;
	avatarUrl?: string;
	timeStamp?: string;
	linkUrl?: string;
	imageUrl?: string[];
	audioUrl?: string;
	videoThumbnailUrl?: string;
	onPress?: Function;
};

export type ChatCardBaseProps = {
	label?: string;
	bgColor?: ColorTokens;
	labelColor?: ColorTokens;
	nameText?: string;
	avatarUrl?: string;
	timeStamp?: string;
	borderRadius?: number;
	padding?: number;
	linkUrl?: string;
	imageUrl?: string[];
	audioUrl?: string;
	videoThumbnailUrl?: string;
	onPress?: Function;
};
