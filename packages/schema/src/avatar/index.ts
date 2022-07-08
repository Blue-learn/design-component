import { BorderRadiusTokens } from '../borderRadius';
import { ColorTokens } from '../colors';

export interface AvatarProps {
	size: avatarSizeTokens;
	uri: string;
	borderRadius?: BorderRadiusTokens;
	borderColor?: ColorTokens;
	borderWidth?: number;
}

export interface AvatarGroupProps {
	uris: string[];
}

export enum avatarSizeTokens {
	XS = 'XS',
	SM = 'SM',
	MD = 'MD',
	LG = 'LG',
	XL = 'XL',
	XXL = 'XXL',
	XXXL = 'XXL',
}

export type AvatarTypeTokensMap = {
	[key in avatarSizeTokens]: number;
};
