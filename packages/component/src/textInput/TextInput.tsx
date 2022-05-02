import {
	TextInputProps,
	inputTypeToken,
	ColorTokens,
	ColorTokensMap,
	InputThemeProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInputBase } from './TextInput.base';
import ThemeProvider from '@blue-learn/theme';

/**
 * Primary UI component for user interaction
 */

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		overflow: 'hidden',
	},
});

const TextInput: React.FunctionComponent<
	TextInputProps
> = ({
	inputType,
	leftElement,
	rightElement,
	...props
}) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	const theme = ThemeProvider.getTheme();
	const colorMapping: ColorTokensMap =
		theme.colors;
	const buttonThemeProps: InputThemeProps =
		theme.textInput[inputType];

	if (leftElement || rightElement) {
		return (
			<View
				style={[
					styles.container,
					{
						backgroundColor: ColorTokens.Transparent,
						borderRadius: buttonThemeProps.borderRadius,
						borderColor: buttonThemeProps.borderColor,
						borderWidth: 1,
					},
				]}
			>
				{leftElement ? leftElement : null}
				<TextInputBase
					{...props}
					{...buttonThemeProps}
					isDisabled={
						inputType === inputTypeToken.disabled
					}
				/>
				{rightElement ? rightElement : null}
			</View>
		);
	} else {
		return (
			<View
				style={[
					styles.container,
					{
						backgroundColor:
							colorMapping[buttonThemeProps.bgColor],
						borderRadius: buttonThemeProps.borderRadius,
						borderColor: buttonThemeProps.borderColor,
					},
				]}
			>
				<TextInputBase
					{...props}
					{...buttonThemeProps}
					isDisabled={
						inputType === inputTypeToken.disabled
					}
				/>
			</View>
		);
	}
};

export default memo(TextInput);
export { TextInput };
