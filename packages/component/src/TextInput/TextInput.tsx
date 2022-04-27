import {
	TextInputProps,
	inputTypeToken,
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	cornerRadiusTokensMap,
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
	const findType = (type) => {
		switch (type) {
			case inputTypeToken.success:
				return ColorTokens.Green_50;
			case inputTypeToken.error:
				return ColorTokens.Red_50;
			case inputTypeToken.focused:
				return ColorTokens.Grey_30;
			case inputTypeToken.default:
				return ColorTokens.Grey_20;
			case inputTypeToken.disabled:
				return ColorTokens.Grey_10;
			default:
				return ColorTokens.Black;
		}
	};
	const borderColor = findType(inputType);
	if (leftElement || rightElement) {
		return (
			<View
				style={[
					styles.container,
					{
						borderColor: colorMapping[borderColor],
						borderWidth: 1,
						backgroundColor:
							colorMapping[ColorTokens.Blue_50],
						borderRadius:
							inputType === 'chat'
								? cornerRadiusTokensMap['corner-circular']
								: cornerRadiusTokensMap['corner-sharp'],
					},
				]}
			>
				{leftElement ? leftElement : null}
				<TextInputBase {...props} />
				{rightElement ? rightElement : null}
			</View>
		);
	} else {
		return (
			<View
				style={[
					styles.container,
					{
						borderColor: colorMapping[borderColor],
						borderWidth: 1,
						borderRadius:
							inputType === 'chat'
								? cornerRadiusTokensMap['corner-circular']
								: cornerRadiusTokensMap['corner-sharp'],
					},
				]}
			>
				<TextInputBase {...props} />
			</View>
		);
	}
};

export default memo(TextInput);
export { TextInput };
