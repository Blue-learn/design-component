import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { IconProps } from '../icon';
import { PaddingProps } from '../padding';
import { FontSizeTokens } from '../typography';

export type TagProps = {
	/**
	 * default type DEFAULT
	 */
	type?: TagTypeTokens;
	/**
	 * default lable tag
	 */
	label?: String;
	/**
	 * Default Icon null
	 */
	icon?: IconProps;
	margin?: PaddingProps;
};

export type TagBaseProps = {
	/**
	 * default lable tag
	 */
	label?: String;
	/**
	 * Default Icon null
	 */
	icon?: IconProps;
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
	DEFAULT = 'DEFAULT',
	SECONDARY = 'SECONDARY',
}

/**
 * Internal Props for Theme
 * */
export type TagTypeTokensMap = {
	[key in TagTypeTokens]: TagThemeProps;
};
