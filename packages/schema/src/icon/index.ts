import { ColorTokens } from '../colors';

/**
 * exposed to outside as props
 */
export enum IconAlignmentTokens {
	left = 'left',
	center = 'center',
	right = 'right',
}

export type IconProps = {
	name: string;

	size?: IconSizeTokens;

	color?: ColorTokens;

	align?: IconAlignmentTokens;
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
	Calendar = 'calendar',
	Cake = 'cake',
	BriefCase = 'briefcase',
	Book = 'book',
	DoubleMessage = 'double-message',
	Info = 'info',
	InfoFilled = 'info-filled',
	InfoStatic = 'info-static',
	Lighting = 'lighting',
	Notification = 'notification',
	NotificationFilled = 'notification-filled',
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
	Bookmark = 'bookmark',
	BookmarkFilled = 'bookmark-filled',
	Page = 'page',
	Sticker = 'sticker',
	Bluelearn = 'bluelearn',
	TwoUsers = 'two-users',
	TwoUsersFilled = 'two-users-filled',
	Check = 'check',
	Dot = 'dot',
	BulbFilled = 'bulb-filled',
	BulbOutline = 'bulb-outline',
	Delete = 'delete',
	AddUser = 'add-user',
	CheckCircle = 'check-circle',
	Clock = 'clock',
	UserClock = 'user-clock',
	Like = 'like',
	LikeFilled = 'like-filled',
	Comment = 'comment',
	StarOutline = 'star-outline',
	Link = 'link',
	Diamond = 'diamond',
	Gift = 'gift',
	Circle = 'circle',
	CheckFilled = 'check-filled',
	InvertedComma = 'inverted-comma',
	WarningInfo = 'warning-info',
	Online = 'online',
	EmptyCircle = 'EmptyCircle',
	Work = 'work',
	WorkFilled = 'work-filled',
	PositiveVote = 'PositiveVote',
	Filter = 'filter',
	Sort = 'sort',
	GroupOutline = 'group-outline',
	GroupFilled = 'group-filled',
	HomeOutline = 'home-outline',
	HomeFilled = 'home-filled',
	Phone = 'phone',
	Whatsapp = 'whatsapp',
	InfoOutline = 'info-outline',
	Guideline = 'guideline',
	Money = 'money',
	Save = 'save',
	Camera = 'camera',
	NorthWestArrow = 'north-west-arrow',
	ExternalLink = 'external-link',
	Earth = 'earth',
	AddChat = 'add-chat',
	Confetti = 'confetti',
	CameraOutline = 'camera-outline',
	Document = 'document',
	DiscussionFilled = 'discussion-filled',
	DiscussionOutline = 'discussion-outline',
	CalendarFilled = 'calendar-filled',
	UpArrow = 'up-arrow',
	Assignment = 'assignment',
	DocumentFilled = 'document-filled',
	POW = 'proof-of-work',
	Lock = 'lock',
	QuestionMark = 'question-mark',
	Refresh = 'refresh',
	LocationAim = 'location-aim',
	Apple = 'apple',
	Smile = 'smile',
	Hat = 'hat',
}

export enum IconSizeTokens {
	XXS = 'XXS',
	XS = 'XS',
	SM = 'SM',
	MD = 'MD',
	LG = 'LG',
	XL = 'XL',
	XXL = 'XXL',
	XXXL = 'XXXL',
	XXXXL = 'XXXXl',
	XXXXXL = 'XXXXXl',
	XXXXXXL = 'XXXXXXl',
	XXXXXXXL = 'XXXXXXXl',
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
