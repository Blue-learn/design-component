import React, { memo } from 'react';
import { Text } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokens,
	ColorTokensMap,
	FontFamilyTokens,
	FontFamilyTokensMap,
	FontTokens,
	FontWeightTokens,
	TypographyBaseProps,
	TypographyDecorationToken,
	TypographyTransformToken,
} from '@blue-learn/schema';

/**
 * Raw Component with Derived props + Theme
 */

const TypographyBase: React.FunctionComponent<
	TypographyBaseProps
> = ({
	label = 'Lorem ipsum dolor sit amet',
	color = ColorTokens.Black,
	fontSize = FontTokens.sm,
	fontWeight = FontWeightTokens.normal,
	fontFamily = FontFamilyTokens.openSans,
	textDecorationLine = TypographyDecorationToken.none,
	textTransform = TypographyTransformToken.none,
}) => {
	const theme = ThemeProvider.getTheme();
	const colorMapping: ColorTokensMap =
		theme.colors;
	const fontFamilyMapping: FontFamilyTokensMap =
		theme.fontFamily;
	/**
	 * use fontSize,fontWeight, textDecorationLine, textTransform to full customise base component
	 * */
	console.log('text', colorMapping[color]);
	return (
		<Text
			style={{
				fontFamily: fontFamilyMapping[fontFamily],
				fontWeight: FontWeightTokens[fontWeight],
				color: colorMapping[color],
				fontSize: fontSize,
				textTransform: textTransform,
				textDecorationLine: textDecorationLine,
			}}
		>
			{label}
		</Text>
	);
};
export default memo(TypographyBase);
export { TypographyBase };
