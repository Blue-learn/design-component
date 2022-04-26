import React, { memo } from 'react';
import { Text } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokens,
	ColorTokensMap,
	FontTokens,
	TypographyBaseProps,
	TypographyDecoration,
	TypographyTransform,
} from '@blue-learn/schema';

/**
 * Raw Component with Derived props + Theme
 */

const TypographyBase: React.FunctionComponent<
	TypographyBaseProps
> = ({
	value = 'Lorem ipsum dolor sit amet.',
	color = ColorTokens.Grey_70,
	fontSize = FontTokens.sm,
	fontWeight = 400,
	textDecorationLine = TypographyDecoration.none,
	textTransform = TypographyTransform.none,
	fontFamily = 'Open Sans',
	letterSpacing = 0,
}) => {
	const theme = ThemeProvider.getTheme();
	const colorMapping: ColorTokensMap =
		theme.colors;
	/**
	 * use fontSize,fontWeight to full customise base component
	 * */
	return (
		<Text
			style={{
				fontFamily: fontFamily,
				fontWeight: fontWeight,
				color: colorMapping[color],
				fontSize: FontTokens[fontSize],
				textTransform: textTransform,
				textDecorationLine: textDecorationLine,
				letterSpacing: letterSpacing,
			}}
		>
			{value}
		</Text>
	);
};
export default memo(TypographyBase);
export { TypographyBase };
