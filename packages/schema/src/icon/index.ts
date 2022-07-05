import { ColorTokens } from '../colors';

/**
 * exposed to outside as props
 */
export type IconProps = {
	name: string;

	size?: IconSizeTokens;

	color?: ColorTokens;
};

export enum IconTokens {
	Chat = 'chat',
	Edit = 'edit',
	Search = 'search',
	Upload = 'upload',
	Attachment = 'attachment',
	Back = 'back',
	PlusCircle = 'plus-circle',
	Cross = 'cross',
	Play = 'play',
	CheckTwo = 'check-two',
	ThreeDots = 'three-dots',
	LocationPin = 'location-pin',
	RightArrow = 'right-arrow',
	DownArrow = 'down-arrow',
	Quotes = 'quotes',
	Plus = 'plus',
	Shuffle = 'shuffle',
	MinusCircle = 'minus-circle',
	InfoStatic = 'info-static',
	Calendar = 'calendar',
	Cake = 'cake',
	BriefCase = 'briefcase',
	Book = 'book',
	DoubleMessage = 'double-message',
	Info = 'info',
	Lighting = 'lighting',
	Notification = 'notification',
	Download = 'download',
	Mic = 'mic',
	PDF = 'pdf',
	Gallery = 'gallery',
	Video = 'video',
	SendSolid = 'send-solid',
	RightAngle = 'right-angle',
	Fire = 'fire',
	Newspaper = 'newspaper',
	Share = 'share',
	Google = 'google',
	Messages = 'messages',
	Star = 'star',
	Sparkling = 'sparkling',
}

export enum IconSizeTokens {
	'2xs' = '2xs',
	'xs' = 'xs',
	'sm' = 'sm',
	'md' = 'md',
	'lg' = 'lg',
	'xl' = 'xl',
	'2xl' = '2xl',
	'3xl' = '3xl',
	'4xl' = '4xl',
	'5xl' = '5xl',
	'6xl' = '6xl',
	'7xl' = '7xl',
}

export type IconSizeTokensMap = {
	[key in IconSizeTokens]: number;
};

/**
 * Internal Props for Theme
 * */
export type IconTypeTokensMap = {
	[key in IconTokens]: IconProps;
};
