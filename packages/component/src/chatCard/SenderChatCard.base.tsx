import React, { memo } from 'react';
import {
	ColorTokens,
	FontSizeTokens,
	ChatCardBaseProps,
	FontDecorationToken,
	ImageSizeTokens,
	ButtonTypeTokens,
	IconTokens,
	StackType,
	StackAlignType,
	IconSizeTokens,
	FontFamilyTokens,
	PreviewData,
} from '@blue-learn/schema';
import {
	StyleSheet,
	View,
	TouchableOpacity,
} from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import { Typography } from '../typography/Typography';
import Stack from '../stack/Stack';
import Image from '../image/Image';
import Button from '../button/Button';
import Space from '../space/Space';
import Icon from '../icon/Icon';
import LinkPreview from '../linkPreview/LinkPreview';

const styles = StyleSheet.create({
	imageContainer: {
		alignSelf: 'center',
		height: 180,
		width: 135,
	},
	imageDetailsContainer: {
		opacity: 0.8,
		position: 'absolute',
		height: 30,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	videoPlayBtn: {
		position: 'absolute',
		alignSelf: 'center',
		top: 46,
		borderRadius: 20,
		height: 36,
		width: 36,
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
const SenderChatCardBase: React.FunctionComponent<
	ChatCardBaseProps
> = ({
	label = 'Are bro how was the video? Hope you had fun watching it. It was wildd',
	bgColor,
	labelColor,
	borderRadius,
	padding,
	timeStamp,
	linkUrl,
	onPress,
	file,
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
					<Stack alignY={StackAlignType.center}>
						<Image
							uri={file?.file_url}
							size={ImageSizeTokens.XXL}
						/>
					</Stack>
					//  {file?.file_url?.length > 0 && (
					// render a image[0]
					// )}
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
						alignY={StackAlignType.center}
					>
						<Button
							type={ButtonTypeTokens.IconElevated}
							iconName={IconTokens.Play}
							labelColor={ColorTokens.Grey_100}
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
									size={IconSizeTokens.XS}
									color={ColorTokens.Grey_100}
								/>
								<Space size={4} />
								<Typography
									label={'Voice Message'}
									fontSize={FontSizeTokens.XS}
									color={ColorTokens.Grey_100}
								/>
							</Stack>
							<Space size={4} />
							<Typography
								label={duration}
								fontSize={FontSizeTokens.XXS}
								color={ColorTokens.Grey_200}
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
								fontSize={FontSizeTokens.XXS}
								color={ColorTokens.Grey_100}
							/>
							<Typography
								label={
									Math.round(file.file_size / 1024) +
									' KB ???' +
									file.file_type
								}
								fontSize={FontSizeTokens.XXS}
								color={ColorTokens.Grey_100}
							/>
						</Stack>
						<Space size={8} />
						<Button
							type={ButtonTypeTokens.IconGhost}
							onPress={onPress}
							labelColor={ColorTokens.Grey_100}
						/>
					</Stack>
				);
			default:
				break;
		}
	};

	return (
		<Stack alignY={StackAlignType.flexEnd}>
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
												fontSize={FontSizeTokens.XS}
											/>
											<Space size={8} />
											<Image
												size={ImageSizeTokens.XXL}
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
													fontSize={FontSizeTokens.XS}
												/>
												<Space size={4} />
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
			<Space size={4} />
			<Typography
				label={timeStamp}
				color={ColorTokens.Grey_300}
				fontSize={FontSizeTokens.XS}
			/>
			<Space size={8} />
		</Stack>
	);
};

export default memo(SenderChatCardBase);
export { SenderChatCardBase };
