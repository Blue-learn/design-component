import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';
import { ShadowTypeTokens } from '../shadow';
import { SpaceTypeTokens } from '../space';

export enum ButtonType {
	Filled = 'FILLED',
	SoftFilled = 'SOFT-FILLED',
	Outline = 'OUTLINE',
	Ghost = 'GHOST',
	Elevated = 'Elevated',
}
export enum ButtonSize {
	Large = 'LARGE',
	Medium = 'MEDIUM',
	Small = 'SMALL',
	IconOnly = 'ICON-ONLY',
}

/**
 * exposed to outside as props
 */
export type ButtonProps = {
	/**
	 * Button Label default Button
	 */
	label: String;
	/**
	 * Button Type default ButtonType.Filled
	 */
	type: ButtonTypeTokens;
	/**
	 * Button Loading State default false
	 */
	loading?: boolean;
	/**
	 * Button onPress accepts function
	 */
	onPress?: Function;
};

/**
 * Only exposed to Main Component as Base props
 */
export type ButtonBaseProps = {
	/**
	 * Button Label default Button
	 */
	label?: String;
	labelColor?: string;
	iconName?: string;
	iconColor?: ColorTokens;
	iconAlignment?: 'left' | 'right';
	bgColor?: ColorTokens;
	borderColor?: ColorTokens;
	borderRadius?: CornerRadiusTokens;
	shadow?: ShadowTypeTokens;
	paddingVertical: SpaceTypeTokens;
	/**
	 * Button Loading State default false
	 */
	loading?: boolean;
	/**
	 * Button onPress accepts function
	 */
	onPress?: Function;
};

export type ButtonThemeProps = {
	borderRadius: CornerRadiusTokens;
	labelColor: ColorTokens;
	bgColor: ColorTokens;
	paddingVertical: SpaceTypeTokens;
	borderColor?: ColorTokens;
	shadow?: ShadowTypeTokens;
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
	// FloatingAction = 'floating-action',
	// Interaction = 'interaction',
}

/**
 * Internal Props for Theme
 * */
export type ButtonTypeTokensMap = {
	[key in ButtonTypeTokens]: ButtonThemeProps;
};
