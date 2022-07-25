import React, { memo } from 'react';
import { Text } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokensMap,
	FontFamilyTokensMap,
	TypographyBaseProps,
	FontDecorationToken,
	FontTransformToken,
	FontSizeTokensMap,
	TextAlignTokens,
} from '@blue-learn/schema';

/**
 * Raw Component with Derived props + Theme
 */

const TypographyBase: React.FunctionComponent<
	TypographyBaseProps
> = ({
	label = 'Lorem ipsum dolor sit amet',
	color,
	fontSize,
	fontFamily,
	textDecorationLine = FontDecorationToken.none,
	textTransform = FontTransformToken.none,
	textAlign = TextAlignTokens.auto,
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

	return (
		<Text
			style={{
				fontFamily: fontFamilyMapping[fontFamily],
				color: colorMapping[color],
				fontSize: fontSizeMapping[fontSize],
				textTransform: textTransform,
				textDecorationLine: textDecorationLine,
				textAlign: textAlign,
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
