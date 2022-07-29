import React, { memo } from 'react';
import { TextInput, View } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokensMap,
	TextInputBaseProps,
	ColorTokens,
	FontSizeTokens,
	FontFamilyTokens,
	FontFamilyTokensMap,
	BorderRadiusTokens,
	SizeTypeTokens,
	SizeTypeTokensMap,
	FontSizeTokensMap,
	IconProps,
	StackType,
} from '@blue-learn/schema';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import Space from '../space/Space';
import Icon from '../icon/Icon';
import _map from 'lodash-es/map';

/**
 * Raw Component with Derived props + Theme
 */

const TextInputBase: React.FunctionComponent<
	TextInputBaseProps
> = ({
	placeholder = 'lorem ipsum',
	borderRadius = BorderRadiusTokens.BR1,
	borderColor = ColorTokens.Grey_200,
	color = ColorTokens.Grey_500,
	isDisabled = false,
	fontSize = FontSizeTokens.SM,
	bgColor = ColorTokens.Transparent,
	fontFamily = FontFamilyTokens.manropeRegular,
	paddingVertical = SizeTypeTokens.LG,
	paddingHorizontal = SizeTypeTokens.XL,
	title,
	caption,
	leftIcon,
	rightIcons,
	onChangeText,
	value,
	...props
}) => {
	const theme = ThemeProvider.getTheme();
	const colorMapping: ColorTokensMap =
		theme.colors;

	const fontFamilyMapping: FontFamilyTokensMap =
		theme.fontFamily;

	const spaceTokenMapping: SizeTypeTokensMap =
		theme.space;

	const fontSizeMapping: FontSizeTokensMap =
		theme.fontSize;

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const paddingHorizontalValue =
		spaceTokenMapping[paddingHorizontal];

	const paddingVerticalValue =
		spaceTokenMapping[paddingVertical];

	const styleProps = React.useMemo(
		() => ({
			width: '100%',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'space-between',
			borderWidth: 1,
			backgroundColor: colorMapping[bgColor],
			borderColor: colorMapping[borderColor],
			borderRadius: borderRadiusValue,
			paddingRight: paddingVerticalValue,
		}),
		[
			bgColor,
			borderColor,
			borderRadius,
			paddingVertical,
		],
	);

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

			<View style={styleProps}>
				<Space size={leftIcon ? 12 : 0} />
				{leftIcon ? <Icon {...leftIcon} /> : null}
				<TextInput
					value={value}
					isDisabled={isDisabled}
					editable={!isDisabled}
					placeholder={placeholder}
					onChangeText={onChangeText}
					style={{
						flex: 1,
						color: colorMapping[color],
						fontSize: fontSizeMapping[fontSize],
						fontFamily: fontFamilyMapping[fontFamily],
						paddingHorizontal: paddingHorizontalValue,
						paddingVertical: paddingVerticalValue,
					}}
					textAlignVertical='top'
					{...props}
				/>
				{_map(rightIcons, (icon: IconProps) => [
					<Space size={8} />,
					<Icon {...icon} />,
				])}
			</View>

			{caption ? (
				<Stack type={StackType.row}>
					<Typography
						label={caption}
						fontSize={FontSizeTokens.XS}
						color={color}
					/>
					<Space size={8} />
				</Stack>
			) : (
				<></>
			)}
		</Stack>
	);
};
export default memo(TextInputBase);
export { TextInputBase };
