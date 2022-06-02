import { ColorTokens } from '../colors';

export enum ChatCardTypeTokens {
	sender = 'sender',
	receiver = 'receiver',
	reply = 'reply',
}

type File = {
	file_id: number;
	file_type: string;
	file_url: string;
	video_thumbnail?: string;
	file_name?: string;
	file_size?: number;
};

export type ChatCardProps = {
	type: ChatCardTypeTokens;
	label?: string;
	nameText?: string;
	avatarUrl?: string;
	timeStamp?: string;
	linkUrl?: string;
	onPress?: Function;
	file?: File;
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
	onPress?: Function;
	file?: File;
};
