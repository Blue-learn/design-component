import { AvatarProps } from '../avatar';
import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';
import { IconProps } from '../icon';
import { ShadowTypeTokens } from '../shadow';
import { SpaceTypeTokens } from '../space';
import {
	FontFamilyTokens,
	FontSizeTokens,
	FontWeightTokens,
} from '../typography';

export enum inputTypeToken {
	default = 'default',
	chat = 'chat',
	success = 'success',
	error = 'error',
}

export enum keyboardTypeToken {
	default = 'default',
	numberPad = 'number-pad',
	decimalPad = 'decimal-pad',
	numeric = 'numeric',
	email = 'email-address',
	phone = 'phone-pad',
	url = 'url',
}

export type TextInputProps = {
	type?: inputTypeToken;
	value?: string;
	title?: string;
	caption?: string;
	placeholder?: string;
	onChangeText?: Function;
	keyboardType?: keyboardTypeToken;
	maxLength?: number;
	multiline?: boolean;
	numberOfLines?: number;
	isDisabled?: boolean;
	iconAlignment?: 'left' | 'right';
	icon?: JSX.Element | JSX.Element[];
	avatar?: AvatarProps;
};

export type TextInputBaseProps = {
	value?: string;
	title?: string;
	caption?: string;
	placeholder?: string;
	onChangeText?: Function;
	keyboardType?: keyboardTypeToken;
	maxLength?: number;
	multiline?: boolean;
	numberOfLines?: number;
	isDisabled?: boolean;
	iconAlignment?: 'left' | 'right';
	icon?: JSX.Element | JSX.Element[];
	avatar?: AvatarProps;
	fontSize?: FontSizeTokens;
	bgColor?: ColorTokens;
	color?: ColorTokens;
	fontWeight?: FontWeightTokens;
	fontFamily?: FontFamilyTokens;
	borderRadius?: CornerRadiusTokens;
	borderColor?: ColorTokens;
	paddingVertical?: SpaceTypeTokens;
	paddingHorizontal?: SpaceTypeTokens;
	shadow?: ShadowTypeTokens;
};

export type InputThemeProps = {
	fontSize?: FontSizeTokens;
	borderRadius?: CornerRadiusTokens;
	borderColor?: ColorTokens;
	color?: ColorTokens;
	placeholderTextColor?: ColorTokens;
	bgColor?: ColorTokens;
	paddingVertical?: SpaceTypeTokens;
	paddingHorizontal?: SpaceTypeTokens;
	shadow?: ShadowTypeTokens;
};

export type InputTypeTokensMap = {
	[key in inputTypeToken]: InputThemeProps;
};
