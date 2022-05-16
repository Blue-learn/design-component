import { CornerRadiusTokens } from '../cornerRadius';
import { ColorTokens } from '../colors';

export interface AvatarProps {
	size: avatarSizeTokens;
	uri: string;
	borderRadius?: CornerRadiusTokens;
	borderColor?: ColorTokens;
	borderWidth?: number;
}

export interface AvatarGroupProps {
	uris: string[];
}

export enum avatarSizeTokens {
	XS = 'xs',
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
	XL = 'xl',
	'2XL' = '2xl',
	'3XL' = '3xl',
}

export type AvatarTypeTokensMap = {
	[key in avatarSizeTokens]: number;
};
