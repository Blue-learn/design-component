import React, { memo } from 'react';
import { TextInput } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokensMap,
	TextInputBaseProps,
} from '@blue-learn/schema';

/**
 * Raw Component with Derived props + Theme
 */

const TextInputBase: React.FunctionComponent<
	TextInputBaseProps
> = ({
	placeholder = 'lorem ipsum',
	// value = 'Lorem ipsum dolor sit amet.',
	// color = ColorTokens.Grey_70,
	// fontSize = FontTokens.sm,
	// fontWeight = 400,
	// textDecorationLine = TypographyDecoration.none,
	// textTransform = TypographyTransform.none,
	// fontFamily,
	// letterSpacing,
	// borderRadius = '4px',
}) => {
	const theme = ThemeProvider.getTheme();
	const colorMapping: ColorTokensMap =
		theme.colors;
	/**
	 * use fontSize,fontWeight to full customise base component
	 * */
	return (
		<TextInput
			placeholder={placeholder}
			style={{
				borderWidth: 1,
				// borderRadius: borderRadius,
				paddingHorizontal: '12px',
				paddingVertical: '8px',
			}}
		/>
	);
};
export default memo(TextInputBase);
export { TextInputBase };
