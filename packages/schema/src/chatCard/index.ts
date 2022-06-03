import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';
import { SpaceTypeTokens } from '../space';

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
	nameText?: string;
	avatarUrl?: string;
	timeStamp?: string;
	borderRadius?: CornerRadiusTokens;
	padding?: SpaceTypeTokens;
	linkUrl?: string;
	onPress?: Function;
	onPressProfile?: Function;
	file?: File;
	duration?: string;
};

export type ChatCardThemeProps = {
	labelColor: ColorTokens;
	bgColor: ColorTokens;
	borderRadius?: CornerRadiusTokens;
	padding?: SpaceTypeTokens;
};

export type ChatCardTypeTokensMap = {
	[key in ChatCardTypeTokens]: ChatCardThemeProps;
};
