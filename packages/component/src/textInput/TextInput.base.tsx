import React, { memo } from 'react';
import { TextInput, View } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	AvatarSizeTokens,
	BorderRadiusTokens,
	ColorTokens,
	ColorTokensMap,
	FontFamilyTokens,
	FontFamilyTokensMap,
	FontSizeTokens,
	FontSizeTokensMap,
	IconSizeTokens,
	SizeTypeTokens,
	SizeTypeTokensMap,
	StackAlignItems,
	StackType,
	TextInputBaseProps,
	WidgetProps,
} from '@blue-learn/schema';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import Space from '../space/Space';
import Icon from '../icon/Icon';
import { Avatar } from '../avatar/Avatar';

/**
 * Raw Component with Derived props + Theme
 */

const TextInputBase: React.FunctionComponent<
	TextInputBaseProps & WidgetProps
> = ({
	placeholder = 'Type here',
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
	multiline = false,
	rightIcons = [],
	onChangeText,
	value,
	avatar,
	renderItem,
	action,
	triggerAction,
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
			borderWidth: avatar ? 0 : 1,
			backgroundColor: colorMapping[bgColor],
			borderColor: colorMapping[borderColor],
			borderRadius: borderRadiusValue,
		}),
		[
			bgColor,
			borderColor,
			borderRadius,
			paddingVertical,
		],
	);

	const handleTextChange = (text: string) => {
		onChangeText && onChangeText(text);
		action &&
			triggerAction &&
			triggerAction({
				...action,
				payload: {
					...action.payload,
					text,
				},
			});
	};

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
					<Space size={SizeTypeTokens.MD} />
				</Stack>
			) : (
				<></>
			)}

			<View style={styleProps}>
				<Space
					size={
						leftIcon || avatar
							? SizeTypeTokens.LG
							: SizeTypeTokens.NONE
					}
				/>
				{leftIcon ? (
					<Icon
						{...leftIcon}
						size={IconSizeTokens.SM}
					/>
				) : null}
				{avatar ? (
					<Avatar
						{...avatar}
						size={AvatarSizeTokens.MD || avatar?.size}
					/>
				) : (
					<></>
				)}
				<TextInput
					value={value}
					isDisabled={isDisabled}
					editable={!isDisabled}
					placeholder={placeholder}
					placeholderTextColor={
						colorMapping[ColorTokens.Grey_300]
					}
					onChangeText={handleTextChange}
					style={{
						flex: 1,
						color: colorMapping[color],
						fontSize: fontSizeMapping[fontSize],
						fontFamily: fontFamilyMapping[fontFamily],
						paddingHorizontal: paddingHorizontalValue,
						paddingVertical: paddingVerticalValue,
						outlineWidth: 0,
					}}
					textAlignVertical={
						multiline ? 'top' : 'center'
					}
				/>
				<Space
					size={
						rightIcons?.length > 0
							? SizeTypeTokens.MD
							: SizeTypeTokens.NONE
					}
				/>
				<Stack
					type={StackType.row}
					alignItems={StackAlignItems.center}
				>
					{renderItem &&
						rightIcons?.length > 0 &&
						rightIcons?.map(renderItem)}
				</Stack>
			</View>

			{caption ? (
				<Stack>
					<Space size={SizeTypeTokens.MD} />
					<Typography
						label={caption}
						fontSize={FontSizeTokens.XS}
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
