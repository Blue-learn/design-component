import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { SizeTypeTokens } from '../size';

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
	label?: string | null;
	nameText?: string;
	avatarUrl?: string;
	timeStamp?: string;
	linkUrl?: string;
	onPress?: Function;
	onPressProfile?: Function;
	file?: File | null;
	duration?: string;
};

export type ChatCardBaseProps = {
	label?: string;
	bgColor?: ColorTokens;
	labelColor?: ColorTokens;
	userLabelColor?: ColorTokens;
	nameText?: string;
	avatarUrl?: string;
	timeStamp?: string;
	borderRadius?: BorderRadiusTokens;
	padding?: SizeTypeTokens;
	linkUrl?: string;
	onPress?: Function;
	onPressProfile?: Function;
	file?: File;
	duration?: string;
};

export type ChatCardThemeProps = {
	labelColor: ColorTokens;
	userLabelColor?: ColorTokens;
	bgColor: ColorTokens;
	borderRadius?: BorderRadiusTokens;
	padding?: SizeTypeTokens;
};

export type ChatCardTypeTokensMap = {
	[key in ChatCardTypeTokens]: ChatCardThemeProps;
};
