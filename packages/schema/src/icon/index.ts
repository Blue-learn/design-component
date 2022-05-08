import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';
import { ShadowTypeTokens } from '../shadow';
import { SpaceTypeTokens } from '../space';

/**
 * exposed to outside as props
 */
export type IconProps = {
	name: string;

	size?: number;

	color?: ColorTokens;
};

export enum IconTokens {
	Chat = 'chat',
	Edit = 'edit',
}

/**
 * Internal Props for Theme
 * */
export type IconTypeTokensMap = {
	[key in IconTokens]: any;
};
