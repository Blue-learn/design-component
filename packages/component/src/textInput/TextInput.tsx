import {
	TextInputProps,
	InputThemeProps,
	inputTypeToken,
	WidgetProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import { TextInputBase } from './TextInput.base';
import ThemeProvider from '@blue-learn/theme';
import debounce from 'lodash-es/debounce';

/**
 * Primary UI component for user interaction
 */

const TextInput: React.FunctionComponent<
	TextInputProps & WidgetProps
> = ({
	type = inputTypeToken.default,
	action,
	triggerAction,
	onChangeText,
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
			onChangeText={(text: any) => {
				if (onChangeText) {
					onChangeText(text);
				}
				if (action && triggerAction) {
					// debounce(() => {
					// 	triggerAction({
					// 		...action,
					// 		...{ payload: { value: text } },
					// 	});
					// }, 300);

					triggerAction({
						...action,
						...{ payload: { value: text } },
					});
				}
			}}
			{...buttonThemeProps}
			{...props}
		/>
	);
};

export default memo(TextInput);
export { TextInput };
