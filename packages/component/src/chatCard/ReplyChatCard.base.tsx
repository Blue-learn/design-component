import React, { memo } from 'react';
import {
	ColorTokens,
	FontSizeTokens,
	ChatCardBaseProps,
	SizeTypeTokens,
	FontTransformToken,
	EllipsizeModeTokens,
	IconTokens,
	IconSizeTokens,
	StackType,
	ImageSizeTokens,
	FontFamilyTokens,
	StackJustifyContent,
	StackAlignItems,
} from '@blue-learn/schema';
import { View } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import { Typography } from '../typography/Typography';
import Icon from '../icon/Icon';
import Space from '../space/Space';
import Stack from '../stack/Stack';
import Image from '../image/Image';
import Divider from '../divider/Divider';

/**
 * Raw Component with Derived props + Theme
 */
const ReplyChatCardBase: React.FunctionComponent<
	ChatCardBaseProps
> = ({
	label = 'Are bro how was the video? Hope you had fun watching it. It was wildd',
	bgColor,
	labelColor,
	userLabelColor,
	borderRadius,
	padding,
	nameText = 'lorem ipsum',
	file,
}) => {
	/**
	 * use type, size, buttonThemePros, colorMapping to full customise base component
	 * */

	const theme = ThemeProvider.getTheme();

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const backgroundColorValue =
		theme.colors[bgColor];

	const paddingVertical = theme.space[padding];

	const paddingHorizontal =
		theme.space[SizeTypeTokens.LG];

	const renderImage = () => {
		switch (file?.file_type) {
			case 'IMAGE':
				return (
					<Image
						uri={file.file_url}
						size={ImageSizeTokens.SM}
					/>
				);
			case 'VIDEO':
				<Image
					uri={
						file.video_thumbnail
							? file.video_thumbnail
							: 'https://images.unsplash.com/photo-1614671493799-293d07f5cd70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
					}
					size={ImageSizeTokens.SM}
				/>;
			default:
				break;
		}
	};

	const renderFileType = () => {
		switch (file?.file_type) {
			case 'IMAGE':
				return (
					<Stack
						type={StackType.row}
						alignItems={StackAlignItems.center}
					>
						<Icon
							name={IconTokens.Gallery}
							color={ColorTokens.Grey_400}
							size={IconSizeTokens.XXS}
						/>
						<Space size={4} />
						<Typography
							label={file.file_type || label}
							color={labelColor}
							textTransform={
								FontTransformToken.capitalize
							}
							fontSize={FontSizeTokens.XXS}
							numberOfLines={1}
						/>
					</Stack>
				);
			case 'VIDEO':
				return (
					<Stack
						type={StackType.row}
						alignItems={StackAlignItems.center}
					>
						<Icon
							name={IconTokens.Video}
							color={ColorTokens.Grey_400}
							size={IconSizeTokens.XXS}
						/>
						<Space size={4} />
						<Typography
							label={file.file_type || label}
							color={labelColor}
							textTransform={
								FontTransformToken.capitalize
							}
							fontSize={FontSizeTokens.XXS}
							numberOfLines={1}
						/>
					</Stack>
				);
			case 'AUDIO':
				return (
					<Stack
						type={StackType.row}
						alignItems={StackAlignItems.center}
					>
						<Icon
							name={IconTokens.Mic}
							color={ColorTokens.Grey_400}
							size={IconSizeTokens.XXS}
						/>
						<Space size={4} />
						<Typography
							label={'Voice Message'}
							color={labelColor}
							textTransform={
								FontTransformToken.capitalize
							}
							fontSize={FontSizeTokens.XXS}
							numberOfLines={1}
						/>
					</Stack>
				);
			case 'FILE':
				return (
					<Stack
						type={StackType.row}
						alignItems={StackAlignItems.center}
					>
						<Icon
							name={IconTokens.PDF}
							color={ColorTokens.Grey_400}
							size={IconSizeTokens.XXS}
						/>
						<Space size={4} />
						<Typography
							label={file.file_name}
							color={labelColor}
							textTransform={
								FontTransformToken.capitalize
							}
							fontSize={FontSizeTokens.XXS}
							numberOfLines={1}
						/>
					</Stack>
				);
			default:
				break;
		}
	};

	return (
		<Stack
			type={StackType.row}
			justifyContent={
				StackJustifyContent.spaceBetween
			}
			alignItems={StackAlignItems.center}
		>
			<View
				style={{
					backgroundColor: backgroundColorValue,
					borderRadius: borderRadiusValue,
					paddingVertical: paddingVertical,
					paddingHorizontal: paddingHorizontal,
					alignSelf: 'flex-start',
					maxWidth: '100%',
				}}
			>
				<View
					style={{
						maxWidth: file?.file_id ? '75%' : '100%',
						alignSelf: 'flex-start',
					}}
				>
					<Typography
						label={nameText}
						fontFamily={
							FontFamilyTokens.manropeSemiBold
						}
						fontSize={FontSizeTokens.XS}
						color={userLabelColor}
						textTransform={
							FontTransformToken.capitalize
						}
						ellipsizeMode={EllipsizeModeTokens.tail}
						numberOfLines={1}
					/>
					<Space size={4} />
					{label ? (
						<Typography
							label={label}
							color={labelColor}
							fontSize={FontSizeTokens.XXS}
							ellipsizeMode={EllipsizeModeTokens.tail}
							numberOfLines={2}
						/>
					) : (
						renderFileType()
					)}
				</View>
				{renderImage()}
			</View>
		</Stack>
	);
};
export default memo(ReplyChatCardBase);
export { ReplyChatCardBase };
