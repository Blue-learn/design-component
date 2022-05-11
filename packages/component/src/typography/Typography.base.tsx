import React, { memo } from 'react';
import { Text } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokens,
	ColorTokensMap,
	FontFamilyTokens,
	FontFamilyTokensMap,
	FontSizeTokens,
	FontWeightTokens,
	TypographyBaseProps,
	FontDecorationToken,
	FontTransformToken,
	FontSizeTokensMap,
} from '@blue-learn/schema';

/**
 * Raw Component with Derived props + Theme
 */

const TypographyBase: React.FunctionComponent<
	TypographyBaseProps
> = ({
	label = 'Lorem ipsum dolor sit amet',
	color = ColorTokens.Black,
	fontSize = FontSizeTokens.sm,
	fontWeight = FontWeightTokens.normal,
	fontFamily = FontFamilyTokens.manropeRegular,
	textDecorationLine = FontDecorationToken.none,
	textTransform = FontTransformToken.none,
	ellipsizeMode,
	numberOfLines = 0,
	...props
}) => {
	const theme = ThemeProvider.getTheme();
	const colorMapping: ColorTokensMap =
		theme.colors;
	const fontFamilyMapping: FontFamilyTokensMap =
		theme.fontFamily;

	const fontSizeMapping: FontSizeTokensMap =
		theme.fontSize;
	/**
	 * use fontSize,fontWeight, textDecorationLine, textTransform to full customise base component
	 * */

	return (
		<Text
			style={{
				fontFamily: fontFamilyMapping[fontFamily],
				fontWeight: FontWeightTokens[fontWeight],
				color: colorMapping[color],
				fontSize: fontSizeMapping[fontSize],
				textTransform: textTransform,
				textDecorationLine: textDecorationLine,
			}}
			numberOfLines={numberOfLines}
			{...props}
		>
			{label}
		</Text>
	);
};
export default memo(TypographyBase);
export { TypographyBase };
