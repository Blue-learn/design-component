import {
	TextInputProps,
	inputTypeToken,
	ColorTokensMap,
	InputThemeProps,
	SpaceTypeTokensMap,
	SpaceTypeTokens,
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
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 1,
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

	const spaceTokenMapping: SpaceTypeTokensMap =
		theme.space;

	if (leftElement || rightElement) {
		return (
			<View
				style={[
					styles.container,
					{
						backgroundColor:
							colorMapping[buttonThemeProps.bgColor],
						borderRadius: buttonThemeProps.borderRadius,
						borderColor: buttonThemeProps.borderColor,
						paddingLeft: leftElement
							? spaceTokenMapping[SpaceTypeTokens.LG]
							: 0,
						paddingRight: rightElement
							? spaceTokenMapping[SpaceTypeTokens.LG]
							: 0,
					},
				]}
			>
				{leftElement ? leftElement : null}
				<TextInputBase
					isDisabled={
						inputType === inputTypeToken.disabled
					}
					{...buttonThemeProps}
					{...props}
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
					isDisabled={
						inputType === inputTypeToken.disabled
					}
					{...buttonThemeProps}
					{...props}
				/>
			</View>
		);
	}
};

export default memo(TextInput);
export { TextInput };
