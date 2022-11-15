import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { IconProps } from '../icon';
import { OpacityTypeTokens } from '../opacity';
import { PaddingProps } from '../padding';
import { FontSizeTokens } from '../typography';
import { ImageProps } from '../image';

export enum ChipTypeTokens {
	SMALL_SELECTED = 'SMALL_SELECTED',
	SMALL_UNSELECTED = 'SMALL_UNSELECTED',
	MEDIUM_SELECTED = 'MEDIUM_SELECTED',
	MEDIUM_UNSELECTED = 'MEDIUM_UNSELECTED',
}

export enum ChipHighlightTokens {
	HIGHLIGHTED = 'HIGHLIGHTED',
	NOT_HIGHLIGHTED = 'NOT_HIGHLIGHTED',
}

export type ChipProps = {
	type?: ChipTypeTokens;
	label?: String;
	margin?: PaddingProps;
	image?: ImageProps;
	icon?: IconProps;
	onPress?: Function;
	factor?: number;
	highlight?: ChipHighlightTokens;
};

export type ChipBaseProps = {
	type?: ChipTypeTokens;
	label?: String;
	/**
	 * Default Icon null
	 */
	image?: ImageProps;
	icon?: IconProps;
	onPress?: Function;

	borderColor?: ColorTokens;
	labelColor?: ColorTokens;
	fontSize?: FontSizeTokens;
	borderRadius?: BorderRadiusTokens;
	opacity?: OpacityTypeTokens;
	padding?: PaddingProps;
	margin?: PaddingProps;
	factor?: number;
	highlight?: ChipHighlightTokens;
};

export type ChipThemeProps = {
	fontSize?: FontSizeTokens;
	borderRadius?: BorderRadiusTokens;
	borderColor?: ColorTokens;
	labelColor?: ColorTokens;
	padding?: PaddingProps;
};

export type ChipTypeTokensMap = {
	[key in ChipTypeTokens]: ChipThemeProps;
};
