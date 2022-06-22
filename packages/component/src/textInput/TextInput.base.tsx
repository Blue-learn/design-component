import React, { memo } from 'react';
import {
	TextInput,
	View,
	StyleSheet,
} from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokensMap,
	TextInputBaseProps,
	ColorTokens,
	FontSizeTokens,
	FontFamilyTokens,
	FontFamilyTokensMap,
	CornerRadiusTokens,
	SpaceTypeTokens,
	SpaceTypeTokensMap,
	FontSizeTokensMap,
} from '@blue-learn/schema';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import Space from '../space/Space';

/**
 * Raw Component with Derived props + Theme
 */
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderWidth: 1,
	},
});

const TextInputBase: React.FunctionComponent<
	TextInputBaseProps
> = ({
	placeholder = 'lorem ipsum',
	borderRadius = CornerRadiusTokens.BR1,
	borderColor = ColorTokens.Grey_200,
	color = ColorTokens.Grey_500,
	isDisabled = false,
	fontSize = FontSizeTokens.sm,
	bgColor = ColorTokens.Transparent,
	fontFamily = FontFamilyTokens.manropeRegular,
	paddingVertical = SpaceTypeTokens.LG,
	paddingHorizontal = SpaceTypeTokens.XL,
	title,
	caption,
	icon,
	...props
}) => {
	const theme = ThemeProvider.getTheme();
	const colorMapping: ColorTokensMap =
		theme.colors;

	const fontFamilyMapping: FontFamilyTokensMap =
		theme.fontFamily;

	const spaceTokenMapping: SpaceTypeTokensMap =
		theme.space;

	const fontSizeMapping: FontSizeTokensMap =
		theme.fontSize;

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	return (
		<Stack>
			{title ? (
				<Stack>
					<Typography
						label={title}
						fontSize={fontSize}
						color={color}
						fontFamily={
							FontFamilyTokens.manropeSemiBold
						}
					/>
					<Space size={8} />
				</Stack>
			) : (
				<></>
			)}

			<View
				style={[
					styles.container,
					{
						borderColor: colorMapping[borderColor],
						borderRadius: borderRadiusValue,
					},
				]}
			>
				<TextInput
					isDisabled={isDisabled}
					editable={!isDisabled}
					placeholder={placeholder}
					style={{
						flex: 1,
						color: colorMapping[color],
						fontSize: fontSizeMapping[fontSize],
						fontFamily: fontFamilyMapping[fontFamily],
						paddingHorizontal:
							spaceTokenMapping[paddingHorizontal],
						paddingVertical:
							spaceTokenMapping[paddingVertical],
					}}
					textAlignVertical='top'
					{...props}
				/>
			</View>

			{caption ? (
				<Stack>
					<Space size={8} />
					<Typography
						label={caption}
						fontSize={FontSizeTokens.xs}
						color={color}
					/>
				</Stack>
			) : (
				<></>
			)}
		</Stack>
	);
};
export default memo(TextInputBase);
export { TextInputBase };
