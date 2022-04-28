import { ColorTokens } from '../colors';
import {
	FontFamilyTokens,
	FontTokens,
	FontWeightTokens,
} from '../TextStyle';

export enum inputTypeToken {
	default = 'default',
	chat = 'chat',
	disabled = 'disabled',
	success = 'success',
	error = 'error',
}

export type TextInputProps = {
	inputType?: inputTypeToken;
	/**
	 * If given, adds the provided element to the left/right of the input.
	 */
	leftElement?: JSX.Element | JSX.Element[];
	rightElement?: JSX.Element | JSX.Element[];
};

export type TextInputBaseProps = {
	// shadow?: any;
	placeholder?: string;
	isDisabled?: boolean;
	size?: FontTokens;
	bgColor?: ColorTokens;
	color?: ColorTokens;
	fontWeight?: FontWeightTokens;
	fontFamily?: FontFamilyTokens;
	borderRadius?: number;
	borderColor?: ColorTokens;
	borderWidth?: number;
	paddingVertical?: number;
};

export type InputThemeProps = {
	size?: FontTokens;
	borderRadius?: number;
	borderColor?: ColorTokens;
	color?: ColorTokens;
	bgColor?: ColorTokens;
	paddingVertical?: number;
};

/**
 * Internal Props for Theme
 * */
export type InputTypeTokensMap = {
	[key in inputTypeToken]: InputThemeProps;
};
