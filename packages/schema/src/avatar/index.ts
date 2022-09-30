import { BorderRadiusTokens } from '../borderRadius';
import { ColorTokens } from '../colors';

export enum AvatarTypeTokens {
	SINGLE = 'SINGLE',
	MULTIPLE = 'MULTIPLE',
}

export enum ActiveStateTokens {
	ACTIVE = 'ACTIVE',
	INACTIVE = 'INACTIVE',
}

export interface AvatarProps {
	size: AvatarSizeTokens;
	uri?: string;
	uris?: string[];
	borderRadius?: BorderRadiusTokens;
	borderColor?: ColorTokens;
	borderWidth?: number;
	type?: AvatarTypeTokens;
	active?: ActiveStateTokens;
}

export interface AvatarBaseProps {
	size: AvatarSizeTokens;
	uri: string;
	overlap?: boolean;
	borderRadius?: BorderRadiusTokens;
	borderColor?: ColorTokens;
	borderWidth?: number;
	active?: ActiveStateTokens;
}

export enum AvatarSizeTokens {
	XS = 'XS',
	SM = 'SM',
	MD = 'MD',
	LG = 'LG',
	XL = 'XL',
	XXL = 'XXL',
	XXXL = 'XXXL',
}

export type AvatarTypeTokensMap = {
	[key in AvatarSizeTokens]: number;
};
