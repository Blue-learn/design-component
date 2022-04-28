import React, { memo } from 'react';
import { TextInput } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokensMap,
	TextInputBaseProps,
	ColorTokens,
	FontTokens,
	FontWeightTokens,
	FontFamilyTokens,
	FontFamilyTokensMap,
	CornerRadiusTokens,
	SpaceTypeTokens,
	SpaceTypeTokensMap,
} from '@blue-learn/schema';

/**
 * Raw Component with Derived props + Theme
 */

const TextInputBase: React.FunctionComponent<
	TextInputBaseProps
> = ({
	placeholder = 'lorem ipsum',
	borderRadius = CornerRadiusTokens.BR4,
	borderColor = ColorTokens.Grey_200,
	color = ColorTokens.Black,
	isDisabled = false,
	size = FontTokens.md,
	bgColor = ColorTokens.White,
	fontWeight = FontWeightTokens.normal,
	fontFamily = FontFamilyTokens.openSans,
	paddingVertical = SpaceTypeTokens.LG,
	...props
}) => {
	const theme = ThemeProvider.getTheme();
	const colorMapping: ColorTokensMap =
		theme.colors;

	const fontFamilyMapping: FontFamilyTokensMap =
		theme.fontFamily;

	const spaceTokenMapping: SpaceTypeTokensMap =
		theme.spaces;

	/**
	 * use fontSize,fontWeight to full customise base component
	 * */
	console.log(isDisabled);

	return (
		<TextInput
			isDisabled={isDisabled}
			editable={!isDisabled}
			placeholder={placeholder}
			style={{
				flex: 1,
				color: colorMapping[color],
				fontSize: size,
				fontWeight: FontWeightTokens[fontWeight],
				fontFamily: fontFamilyMapping[fontFamily],
				borderRadius: borderRadius,
				paddingHorizontal:
					spaceTokenMapping[SpaceTypeTokens.LG],
				paddingVertical:
					spaceTokenMapping[SpaceTypeTokens.LG],
				borderColor: colorMapping[borderColor],
				borderWidth: 1,
			}}
			textAlign='vertical'
			{...props}
		/>
	);
};
export default memo(TextInputBase);
export { TextInputBase };
