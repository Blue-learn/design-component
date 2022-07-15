import { BorderRadiusTokens } from '../borderRadius';
import { ColorTokens } from '../colors';

export enum AvatarTypeTokens {
	SINGLE = 'SINGLE',
	MULTIPLE = 'MULTIPLE',
}
export interface AvatarProps {
	size: avatarSizeTokens;
	uri?: string;
	uris?: string[];
	borderRadius?: BorderRadiusTokens;
	borderColor?: ColorTokens;
	borderWidth?: number;
	type?: AvatarTypeTokens;
}

export interface AvatarBaseProps {
	size: avatarSizeTokens;
	uri: string;
	overlap?: boolean;
	borderRadius?: BorderRadiusTokens;
	borderColor?: ColorTokens;
	borderWidth?: number;
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
