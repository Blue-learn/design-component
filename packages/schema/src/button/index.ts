import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { IconProps, IconTokens } from '../icon';
import { ShadowTypeTokens } from '../shadow';
import { SizeTypeTokens } from '../size';
import {
	StackAlignType,
	StackProps,
} from '../stack';
import { FontSizeTokens } from '../typography';

/**
 * exposed to outside as props
 */
export type ButtonProps = {
	/**
	 * Button Label default Button
	 */
	label?: String;
	/**
	 * Button Type default ButtonTypeTokens.LargeFilled
	 */
	type: ButtonTypeTokens;
	/**
	 * Default Icon null
	 */
	icon?: IconProps;
	/**
	 * @deprecated
	 */
	iconName?: IconTokens;
	// Default iconAlignment - right
	/**
	 * @deprecated
	 */
	iconAlignment?: 'left' | 'right';
	// Default width - content
	width?: ButtonWidthTypeToken;
	labelColor?: ColorTokens;
	/**
	 * Button Loading State default false
	 */
	loading?: boolean;
	/**
	 * Button onPress accepts function
	 */
	onPress?: Function;
	/**
	 * Button flex accepts the stack align types
	 */
	/** @deprecated
	 *
	 */
	flex?: StackAlignType;
};

export enum ButtonWidthTypeToken {
	FULL = 'FULL',
	CONTENT = 'CONTENT',
}
/**
 * Only exposed to Main Component as Base props
 */
export type ButtonBaseProps = {
	/**
	 * Button Label default Button
	 */
	label?: String;
	labelColor?: ColorTokens;
	icon?: IconProps;
	/**
	 * @deprecated
	 */
	iconName?: IconTokens;
	/**
	 * @deprecated
	 */
	iconColor?: ColorTokens;
	iconAlignment?: 'left' | 'right';
	bgColor?: ColorTokens;
	borderColor?: ColorTokens;
	borderRadius?: BorderRadiusTokens;
	shadow?: ShadowTypeTokens;
	paddingVertical: SizeTypeTokens;
	fontSize?: FontSizeTokens;
	width?: ButtonWidthTypeToken;
	paddingHorizontal: SizeTypeTokens;
	/**
	 * Button Loading State default false
	 */
	loading?: boolean;
	/**
	 * Button onPress accepts function
	 */
	onPress?: Function;
	/**
	 * Button flex accepts the stack align types
	 */
	flex?: StackAlignType;
	stack?: StackProps;
};

export type ButtonThemeProps = {
	borderRadius: BorderRadiusTokens;
	labelColor: ColorTokens;
	bgColor: ColorTokens;
	paddingVertical: SizeTypeTokens;
	borderColor?: ColorTokens;
	shadow?: ShadowTypeTokens;
	fontSize?: FontSizeTokens;
	paddingHorizontal: SizeTypeTokens;
};

//--todo add more Diff Combination for Button
export enum ButtonTypeTokens {
	LargeFilled = 'large-filled',
	MediumFilled = 'medium-filled',
	SmallFilled = 'small-filled',
	IconFilled = 'icon-filled',
	LargeSoftFilled = 'large-soft-filled',
	MediumSoftFilled = 'medium-soft-filled',
	SmallSoftFilled = 'small-soft-filled',
	IconSoftFilled = 'icon-soft-filled',
	LargeOutline = 'large-outline',
	MediumOutline = 'medium-outline',
	SmallOutline = 'small-outline',
	IconOutline = 'icon-outline',
	LargeGhost = 'large-ghost',
	MediumGhost = 'medium-ghost',
	SmallGhost = 'small-ghost',
	IconGhost = 'icon-ghost',
	LargeElevated = 'large-elevated',
	MediumElevated = 'medium-elevated',
	SmallElevated = 'small-elevated',
	IconElevated = 'icon-elevated',
	GoogleLargeFilled = 'google-large-filled',
	// FloatingAction = 'floating-action',
	// Interaction = 'interaction',
}

/**
 * Internal Props for Theme
 * */
export type ButtonTypeTokensMap = {
	[key in ButtonTypeTokens]: ButtonThemeProps;
};
