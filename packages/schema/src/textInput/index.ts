import { AvatarProps } from '../avatar';
import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { ShadowTypeTokens } from '../shadow';
import { SizeTypeTokens } from '../size';
import {
	FontFamilyTokens,
	FontSizeTokens,
} from '../typography';
import { IconProps } from '../icon';
import { WidgetItem } from '../types';

export enum inputTypeToken {
	default = 'default',
	search = 'search',
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
	leftIcon?: IconProps;
	rightIcons?: WidgetItem[];
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
	leftIcon?: IconProps;
	rightIcons?: WidgetItem[];
	avatar?: AvatarProps;
	fontSize?: FontSizeTokens;
	bgColor?: ColorTokens;
	color?: ColorTokens;
	fontFamily?: FontFamilyTokens;
	borderRadius?: BorderRadiusTokens;
	borderColor?: ColorTokens;
	paddingVertical?: SizeTypeTokens;
	paddingHorizontal?: SizeTypeTokens;
	shadow?: ShadowTypeTokens;
};

export type InputThemeProps = {
	fontSize?: FontSizeTokens;
	borderRadius?: BorderRadiusTokens;
	borderColor?: ColorTokens;
	color?: ColorTokens;
	placeholderTextColor?: ColorTokens;
	bgColor?: ColorTokens;
	paddingVertical?: SizeTypeTokens;
	paddingHorizontal?: SizeTypeTokens;
	shadow?: ShadowTypeTokens;
};

export type InputTypeTokensMap = {
	[key in inputTypeToken]: InputThemeProps;
};
