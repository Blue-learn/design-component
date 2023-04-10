import {
	ColorTokens,
	GradientColorTokens,
} from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { IconProps } from '../icon';
import { PaddingProps } from '../padding';
import { FontSizeTokens } from '../typography';
import { ImageProps } from '../image';

export type TagProps = {
	/**
	 * default type DEFAULT
	 */
	type?: TagTypeTokens;
	/**
	 * default lable tag
	 */
	label: String;
	/**
	 * Default Icon null
	 */
	image?: ImageProps;
	icon?: IconProps;
	gradientColor?: GradientColorTokens;
	bgColor?: ColorTokens;
	labelColor?: ColorTokens;
	margin?: PaddingProps;
};

export type TagBaseProps = {
	/**
	 * default lable tag
	 */
	label: String;
	/**
	 * Default Icon null
	 */
	image?: ImageProps;
	icon?: IconProps;
	gradientColor?: GradientColorTokens;
	borderRadius: BorderRadiusTokens;
	labelColor: ColorTokens;
	bgColor: ColorTokens;
	fontSize: FontSizeTokens;
	padding?: PaddingProps;
	margin?: PaddingProps;
};

export type TagThemeProps = {
	borderRadius: BorderRadiusTokens;
	labelColor: ColorTokens;
	bgColor: ColorTokens;
	fontSize: FontSizeTokens;
	padding?: PaddingProps;
};

export enum TagTypeTokens {
	SM = 'SM',
	MD = 'MD',
	/**
	 * @deprecated
	 */
	SECONDARY = 'SECONDARY',
	/**
	 * @deprecated
	 */
	GRADIENT = 'GRADIENT',
}

/**
 * Internal Props for Theme
 * */
export type TagTypeTokensMap = {
	[key in TagTypeTokens]: TagThemeProps;
};
