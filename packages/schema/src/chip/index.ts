import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { IconProps } from '../icon';
import { OpacityTypeTokens } from '../opacity';
import { PaddingProps } from '../padding';
import { FontSizeTokens } from '../typography';
import { ImageProps } from '../image';

export enum ChipStateTokens {
	DEFAULT = 'DEFAULT',
	ACTIVE = 'ACTIVE',
}

export type ChipItemProps = {
	state?: ChipStateTokens;
	label?: String;
	/**
	 * Default Icon null
	 */
	image?: ImageProps;
	icon?: IconProps;
	bgColor?: ColorTokens;
	labelColor?: ColorTokens;
	fontSize?: FontSizeTokens;
	borderRadius?: BorderRadiusTokens;
	opacity?: OpacityTypeTokens;
	padding?: PaddingProps;
	onPress?: Function;
};

export type ChipProps = {
	data?: ChipItemProps[];
};
