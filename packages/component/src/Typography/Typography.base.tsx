import React, { memo } from 'react';
import { Text } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokens,
	ColorTokensMap,
	FontTokens,
	TypographyBaseProps,
} from '@blue-learn/schema';

/**
 * Raw Component with Derived props + Theme
 */

const TypographyBase: React.FunctionComponent<
	TypographyBaseProps
> = ({
	value = 'Lorem ipsum dolor sit amet.',
	color = ColorTokens.Black,
	fontSize = FontTokens.sm,
	fontWeight = 400,
	fontFamily,
	letterSpacing,
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
				fontWeight: fontWeight,
				color: colorMapping[color],
				fontSize: FontTokens[fontSize],
			}}
		>
			{value}
		</Text>
	);
};
export default memo(TypographyBase);
export { TypographyBase };
