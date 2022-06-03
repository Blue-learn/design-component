import React, { memo } from 'react';
import {
	ColorTokens,
	CornerRadiusTokens,
	FontSizeTokens,
	ChatCardBaseProps,
	SpaceTypeTokens,
	SpaceTypeTokensMap,
	FontDecorationToken,
	ButtonTypeTokens,
	IconTokens,
	avatarSizeTokens,
	StackType,
	StackAlignType,
	FontFamilyTokens,
	ImageSizeTokens,
	IconSizeTokens,
	PreviewData,
} from '@blue-learn/schema';
import {
	StyleSheet,
	View,
	TouchableOpacity,
} from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import { Typography } from '../typography/Typography';
import Button from '../button/Button';
import Stack from '../stack/Stack';
import Space from '../space/Space';
import Avatar from '../avatar/Avatar';
import Image from '../image/Image';
import Icon from '../icon/Icon';
import LinkPreview from '../linkPreview/LinkPreview';

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	imageContainer: {
		alignSelf: 'center',
		height: 180,
		width: 136,
	},
	imageDetailsContainer: {
		opacity: 0.8,
		bottom: 0,
		position: 'absolute',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	videoPlayBtn: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	avatar: {
		height: 24,
		width: 24,
		borderRadius: 12,
	},
});

/**
 * Raw Component with Derived props + Theme
 */
const ReceiverChatCardBase: React.FunctionComponent<
	ChatCardBaseProps
> = ({
	label,
	bgColor = ColorTokens.Grey_50,
	labelColor = ColorTokens.Grey_500,
	borderRadius = CornerRadiusTokens.BR2,
	padding = SpaceTypeTokens.MD,
	avatarUrl = 'https://reactnative.dev/img/tiny_logo.png',
	nameText = 'lorem ipsum',
	timeStamp,
	file,
	linkUrl,
	onPress,
	onPressProfile,
	duration,
}) => {
	/**
	 * use type, size, buttonThemePros, colorMapping to full customise base component
	 * */

	const theme = ThemeProvider.getTheme();

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const backgroundColorValue =
		theme.colors[bgColor];

	const paddingValue: SpaceTypeTokensMap =
		theme.space[padding];

	const renderSwitch = () => {
		switch (file?.file_type) {
			case 'IMAGE':
				return (
					<Stack alignY={StackAlignType.center}>
						<Image
							uri={file?.file_url}
							size={ImageSizeTokens.xxl}
						/>
					</Stack>
				);
			case 'VIDEO':
				return (
					<Stack>
						<Image
							uri={
								file.video_thumbnail
									? file.video_thumbnail
									: 'https://images.unsplash.com/photo-1614671493799-293d07f5cd70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
							}
							size={ImageSizeTokens.xxl}
						/>
						<View style={styles.videoPlayBtn}>
							<Button
								type={ButtonTypeTokens.IconElevated}
								iconName={IconTokens.Play}
								onPress={onPress}
							/>
						</View>
					</Stack>
				);
			case 'AUDIO':
				return (
					<Stack
						type={StackType.row}
						alignY={StackAlignType.center}
					>
						<Button
							type={ButtonTypeTokens.IconElevated}
							iconName={IconTokens.Play}
							labelColor={ColorTokens.Grey_500}
							onPress={onPress}
						/>
						<Space size={8} />
						<Stack>
							<Stack
								type={StackType.row}
								alignY={StackAlignType.center}
							>
								<Icon
									name={IconTokens.Mic}
									size={IconSizeTokens.xs}
								/>
								<Space size={4} />
								<Typography
									label={'Voice Message'}
									fontSize={FontSizeTokens.xs}
								/>
							</Stack>
							<Space size={4} />
							<Typography
								label={duration}
								fontSize={FontSizeTokens['2xs']}
								color={ColorTokens.Grey_400}
							/>
						</Stack>
					</Stack>
				);

			case 'FILE':
				return (
					<Stack
						type={StackType.row}
						alignY={StackAlignType.center}
						alignX={StackAlignType.spaceBetween}
					>
						<Icon name={IconTokens.PDF} />
						<Space size={8} />
						<Stack>
							<Typography
								label={file.file_name}
								fontSize={FontSizeTokens['2xs']}
								color={ColorTokens.Grey_500}
							/>
							<Typography
								label={
									Math.round(file.file_size / 1024) +
									' KB •' +
									file.file_type
								}
								fontSize={FontSizeTokens['2xs']}
								color={ColorTokens.Grey_500}
							/>
						</Stack>
						<Space size={8} />
						<Button
							type={ButtonTypeTokens.IconGhost}
							onPress={onPress}
						/>
					</Stack>
				);
			default:
				break;
		}
	};

	return (
		<Stack>
			<Space size={8} />
			<View
				style={[
					{
						backgroundColor: backgroundColorValue,
						borderRadius: borderRadiusValue,
						padding: paddingValue,
					},
				]}
			>
				<TouchableOpacity onPress={onPressProfile}>
					<Stack
						type={StackType.row}
						alignY={StackAlignType.center}
					>
						<Avatar
							uri={avatarUrl}
							size={avatarSizeTokens.SM}
							borderRadius={CornerRadiusTokens.BR4}
						/>
						<Space size={8} />
						<Typography
							label={nameText}
							color={ColorTokens.Grey_400}
							fontSize={FontSizeTokens.xs}
							fontFamily={
								FontFamilyTokens.manropeSemiBold
							}
						/>
						<Space size={8} />
					</Stack>
				</TouchableOpacity>

				<Space size={8} />
				<TouchableOpacity onPress={onPress}>
					{renderSwitch()}
				</TouchableOpacity>

				{linkUrl && (
					<TouchableOpacity onPress={onPress}>
						<Typography
							label={linkUrl}
							color={ColorTokens.Blue_600}
							fontSize={FontSizeTokens.sm}
							textDecorationLine={
								FontDecorationToken.underline
							}
						/>
					</TouchableOpacity>
				)}
				{label && (
					<Stack>
						<Space
							size={file && file?.file_id ? 4 : 0}
						/>
						<LinkPreview
							text={label as string}
							renderLinkPreview={(payload: {
								aspectRatio?: number | undefined;
								containerWidth: number;
								previewData?: PreviewData | undefined;
							}) => {
								if (payload.previewData?.link) {
									return (
										<Stack>
											<Typography
												label={label}
												color={labelColor}
												fontSize={FontSizeTokens.xs}
											/>
											<Space size={8} />
											<Image
												size={ImageSizeTokens.xxl}
												uri={payload.previewData?.image?.url}
											/>
											<Space size={8} />
											<Stack>
												<Typography
													label={payload.previewData?.title}
													color={labelColor}
													fontFamily={
														FontFamilyTokens.manropeSemiBold
													}
													fontSize={FontSizeTokens.xs}
												/>
												<Space size={4} />
												<Typography
													label={
														payload.previewData?.description
													}
													color={labelColor}
													fontSize={FontSizeTokens['2xs']}
												/>
											</Stack>
										</Stack>
									);
								} else {
									return (
										<Typography
											label={label}
											color={labelColor}
											fontSize={FontSizeTokens.sm}
										/>
									);
								}
							}}
						/>
					</Stack>
				)}
			</View>
			<Space size={4} />
			<Typography
				label={timeStamp}
				color={ColorTokens.Grey_300}
				fontSize={FontSizeTokens.xs}
			/>
			<Space size={8} />
		</Stack>
	);
};

export default memo(ReceiverChatCardBase);
export { ReceiverChatCardBase };

// {file?.file_url?.length > 0 && (
// 	render a image[0]
// 	)}
//  {file?.file_url?.length > 1 && (
// 	<View
// 		style={[
// 			styles.imageDetailsContainer,
// 			{
// 				backgroundColor:
// 					theme.colors[ColorTokens.Grey_600],
// 			},
// 		]}
// 	>
// 		<Space size={8} />
// 		<Typography
// 			label={`+ ${
// 				file?.file_url?.length - 1
// 			} more`}
// 			color={ColorTokens.White}
// 		/>
// 		<Space size={8} />
// 	</View>
// )}
