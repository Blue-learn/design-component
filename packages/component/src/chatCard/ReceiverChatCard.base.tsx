import React, {memo} from 'react';
import {
	ColorTokens,
	BorderRadiusTokens,
	FontSizeTokens,
	ChatCardBaseProps,
	FontDecorationToken,
	ButtonTypeTokens,
	IconTokens,
	AvatarSizeTokens,
	StackType,
	FontFamilyTokens,
	ImageSizeTokens,
	IconSizeTokens,
	PreviewData,
	StackAlignItems,
	StackJustifyContent,
	FontTransformToken,
	SizeTypeTokens,
} from '@blue-learn/schema';
import {
	StyleSheet,
	View,
	TouchableOpacity,
} from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {Typography} from '../typography/Typography';
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
const ReceiverChatCardBase: React.FunctionComponent<ChatCardBaseProps> = ({
	                                                                          label,
	                                                                          bgColor,
	                                                                          labelColor,
	                                                                          userLabelColor,
	                                                                          borderRadius,
	                                                                          padding,
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

	const paddingValue = theme.space[padding];

	const renderSwitch = () => {
		switch (file?.file_type) {
			case 'IMAGE':
				return (
					<Stack alignItems={StackAlignItems.center}>
						<Image
							uri={file?.file_url}
							size={ImageSizeTokens.XXL}
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
							size={ImageSizeTokens.XXL}
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
						alignItems={StackAlignItems.center}
					>
						<Button
							type={ButtonTypeTokens.IconElevated}
							iconName={IconTokens.Play}
							labelColor={ColorTokens.Grey_500}
							onPress={onPress}
						/>
						<Space size={SizeTypeTokens.MD}/>
						<Stack>
							<Stack
								type={StackType.row}
								alignItems={StackAlignItems.center}
							>
								<Icon
									name={IconTokens.Mic}
									size={IconSizeTokens.XS}
								/>
								<Space size={SizeTypeTokens.SM}/>
								<Typography
									label={'Voice Message'}
									fontSize={FontSizeTokens.XS}
								/>
							</Stack>
							<Space size={SizeTypeTokens.SM}/>
							<Typography
								label={duration}
								fontSize={FontSizeTokens.XXS}
								color={ColorTokens.Grey_400}
							/>
						</Stack>
					</Stack>
				);

			case 'FILE':
				return (
					<Stack
						type={StackType.row}
						alignItems={StackAlignItems.center}
						justifyContent={
							StackJustifyContent.spaceBetween
						}
					>
						<Icon name={IconTokens.PDF}/>
						<Space size={SizeTypeTokens.MD}/>
						<Stack>
							<Typography
								label={file.file_name}
								fontSize={FontSizeTokens.XXS}
								color={ColorTokens.Grey_500}
							/>
							<Typography
								label={
									Math.round(file.file_size / 1024) +
									' KB •' +
									file.file_type
								}
								fontSize={FontSizeTokens.XXS}
								color={ColorTokens.Grey_500}
							/>
						</Stack>
						<Space size={SizeTypeTokens.MD}/>
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
			<Space size={SizeTypeTokens.MD}/>
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
						alignItems={StackAlignItems.center}
						justifyContent={
							StackJustifyContent.flexStart
						}
					>
						<Avatar
							uri={avatarUrl}
							size={AvatarSizeTokens.SM}
							borderRadius={BorderRadiusTokens.BR4}
						/>
						<Space size={SizeTypeTokens.MD}/>
						<Typography
							label={nameText}
							color={userLabelColor}
							fontSize={FontSizeTokens.XS}
							textTransform={
								FontTransformToken.capitalize
							}
							fontFamily={FontFamilyTokens.InterSemiBold}
						/>
						<Space size={SizeTypeTokens.MD}/>
					</Stack>
				</TouchableOpacity>

				<Space size={SizeTypeTokens.MD}/>
				<TouchableOpacity onPress={onPress}>
					{renderSwitch()}
				</TouchableOpacity>

				{linkUrl && (
					<TouchableOpacity onPress={onPress}>
						<Typography
							label={linkUrl}
							color={ColorTokens.Blue_600}
							fontSize={FontSizeTokens.SM}
							textDecorationLine={
								FontDecorationToken.underline
							}
						/>
					</TouchableOpacity>
				)}
				{label && (
					<Stack>
						<Space
							size={
								file && file?.file_id
									? SizeTypeTokens.SM
									: SizeTypeTokens.NONE
							}
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
												fontSize={FontSizeTokens.XS}
											/>
											<Space size={SizeTypeTokens.MD}/>
											<Image
												size={ImageSizeTokens.XXL}
												uri={payload.previewData?.image?.url}
											/>
											<Space size={SizeTypeTokens.MD}/>
											<Stack>
												<Typography
													label={payload.previewData?.title}
													color={labelColor}
													fontFamily={
														FontFamilyTokens.InterSemiBold
													}
													fontSize={FontSizeTokens.XS}
												/>
												<Space size={SizeTypeTokens.SM}/>
												<Typography
													label={
														payload.previewData?.description
													}
													color={labelColor}
													fontSize={FontSizeTokens.XXS}
												/>
											</Stack>
										</Stack>
									);
								} else {
									return (
										<Typography
											label={label}
											color={labelColor}
											fontSize={FontSizeTokens.SM}
										/>
									);
								}
							}}
						/>
					</Stack>
				)}
			</View>
			<Space size={SizeTypeTokens.SM}/>
			<Typography
				label={timeStamp}
				color={ColorTokens.Grey_300}
				fontSize={FontSizeTokens.XS}
			/>
			<Space size={SizeTypeTokens.MD}/>
		</Stack>
	);
};

export default memo(ReceiverChatCardBase);
export {ReceiverChatCardBase};

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
// 		<Space size={SizeTypeTokens.MD} />
// 		<Typography
// 			label={`+ ${
// 				file?.file_url?.length - 1
// 			} more`}
// 			color={ColorTokens.White}
// 		/>
// 		<Space size={SizeTypeTokens.MD} />
// 	</View>
// )}
