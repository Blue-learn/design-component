import { ColorTokens } from '../colors';
import {
	FontFamilyTokens,
	FontSizeTokens,
	FontWeightTokens,
} from '../typography';

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
	// --todo
	leftElement?: JSX.Element | JSX.Element[];
	// --todo
	rightElement?: JSX.Element | JSX.Element[];
};

export type TextInputBaseProps = {
	// shadow?: any;
	placeholder?: string;
	isDisabled?: boolean;
	size?: FontSizeTokens;
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
	size?: FontSizeTokens;
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
