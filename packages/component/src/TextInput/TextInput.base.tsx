import React, { memo } from 'react';
import { TextInput } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokensMap,
	CornerRadiusTokens,
	TextInputBaseProps,
	CornerRadiusTokensMap,
	ColorTokens,
	FontTokens,
	FontWeightTokens,
	FontFamilyTokens,
	FontFamilyTokensMap,
	cornerRadiusTokensMap,
} from '@blue-learn/schema';

/**
 * Raw Component with Derived props + Theme
 */

const TextInputBase: React.FunctionComponent<
	TextInputBaseProps
> = ({
	placeholder = 'lorem ipsum',
	borderRadius = cornerRadiusTokensMap[
		'corner-sharp'
	],
	color = ColorTokens.Black,
	borderColor = ColorTokens.Black,
	isDisabled = false,
	size = FontTokens.md,
	bgColor = ColorTokens.Transparent,
	fontWeight = FontWeightTokens.normal,
	fontFamily = FontFamilyTokens['open-sans'],
	borderWidth = 0,
	...props
}) => {
	const theme = ThemeProvider.getTheme();
	const colorMapping: ColorTokensMap =
		theme.colors;

	const fontFamilyMapping: FontFamilyTokensMap =
		theme.fontFamily;

	/**
	 * use fontSize,fontWeight to full customise base component
	 * */
	return (
		<TextInput
			isDisabled={isDisabled}
			placeholder={placeholder}
			style={{
				flex: 1,
				color: colorMapping[color],
				borderWidth: borderWidth,
				fontSize: size,
				backgroundColor: colorMapping[bgColor],
				borderColor: colorMapping[borderColor],
				fontWeight: FontWeightTokens[fontWeight],
				fontFamily: fontFamilyMapping[fontFamily],
				borderRadius: borderRadius,
				paddingHorizontal: '12px',
				paddingVertical: '8px',
			}}
			textAlign='vertical'
			{...props}
		/>
	);
};
export default memo(TextInputBase);
export { TextInputBase };
