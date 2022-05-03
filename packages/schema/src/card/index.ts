import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';
import { SpaceTypeTokens } from '../space';

/**
 * exposed to outside as props
 */
export type CardProps = {
	/**
	 * Button Label default Button
	 */
	heading: String;
	/**
	 * Button Label default Button
	 */
	description: String;
	/**
	 * Button Type default ButtonType.Filled
	 */
	type: CardTypeTokens;
	/**
	 * Button Loading State default false
	 */
	loading?: boolean;
	/**
	 * Button onPress accepts function
	 */
	onButtonPress?: Function;
};

/**
 * Only exposed to Main Component as Base props
 */
export type CardBaseProps = {
	/**
	* Button Label default Button
	*/
	heading?: String;
	description?: String;
	bgColor?: ColorTokens;
	borderColor?: ColorTokens;
	headingColor?: ColorTokens;
	descriptionColor?: ColorTokens;
	borderRadius?: CornerRadiusTokens;
	elevation?: any;
	padding?: SpaceTypeTokens;
	buttonText?: String;
	/**
	 * Button Loading State default false
	 */
	loading?: boolean;
	/**
	 * Button onPress accepts function
	 */
	onButtonPress?: Function;
};

export type CardThemeProps = {
	borderRadius: CornerRadiusTokens;
	bgColor: ColorTokens;
	padding: SpaceTypeTokens;
};

//--todo add more Diff Combination for Button
export enum CardTypeTokens {
	Normal = 'normal'
}

/**
 * Internal Props for Theme
 * */
export type CardTypeTokensMap = {
	[key in CardTypeTokens]: CardThemeProps;
};
