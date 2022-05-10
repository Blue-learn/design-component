import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';
import { ShadowTypeTokens } from '../shadow';
import { SpaceTypeTokens } from '../space';

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
	ThreeDot = 'three-dot',
	Download = 'download',
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
