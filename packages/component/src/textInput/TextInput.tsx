import {
	TextInputProps,
	InputThemeProps,
	inputTypeToken,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import { TextInputBase } from './TextInput.base';
import ThemeProvider from '@blue-learn/theme';

/**
 * Primary UI component for user interaction
 */

const TextInput: React.FunctionComponent<
	TextInputProps
> = ({
	type = inputTypeToken.default,
	...props
}) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	const theme = ThemeProvider.getTheme();

	const buttonThemeProps: InputThemeProps =
		theme.textInput[type];

	return (
		<TextInputBase
			{...buttonThemeProps}
			{...props}
		/>
	);
};

export default memo(TextInput);
export { TextInput };
