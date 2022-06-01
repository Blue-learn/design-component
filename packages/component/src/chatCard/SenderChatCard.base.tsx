import React, { memo } from 'react';
import {
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	FontSizeTokens,
	ChatCardBaseProps,
	SpaceTypeTokens,
	FontDecorationToken,
	ImageSizeTokens,
	ButtonTypeTokens,
	IconTokens,
	StackType,
	StackAlignType,
	IconSizeTokens,
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
		top: 72,
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
	bgColor = ColorTokens.Blue_600,
	labelColor = ColorTokens.Grey_50,
	borderRadius = CornerRadiusTokens.BR2,
	padding = SpaceTypeTokens.MD,
	timeStamp,
	imageUrl,
	videoThumbnailUrl,
	audioUrl,
	linkUrl,
	onPress,
}) => {
	/**
	 * use type, size, buttonThemePros, colorMapping to full customise base component
	 * */

	const theme = ThemeProvider.getTheme();

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const backgroundColorValue =
		theme.colors[bgColor];

	const paddingValue: ColorTokensMap =
		theme.space[padding];

	return (
		<View>
			<View
				style={[
					{
						backgroundColor: backgroundColorValue,
						borderRadius: borderRadiusValue,
						padding: paddingValue,
						width: '80%',
					},
				]}
			>
				{imageUrl && (
					<TouchableOpacity onPres={onPress}>
						<Stack alignY={StackAlignType.center}>
							<Image
								uri={imageUrl[0]}
								size={ImageSizeTokens.xxl}
							/>
						</Stack>
						{imageUrl.length > 1 && (
							<View
								style={[
									styles.imageDetailsContainer,
									{
										backgroundColor:
											theme.colors[ColorTokens.Grey_600],
									},
								]}
							>
								<Space size={8} />
								<Typography
									label={`+ ${imageUrl.length - 1} more`}
									color={ColorTokens.White}
								/>
								<Space size={8} />
							</View>
						)}
					</TouchableOpacity>
				)}
				{videoThumbnailUrl && (
					<View>
						<Image
							uri={videoThumbnailUrl}
							size={ImageSizeTokens.xxl}
						/>
						<View style={styles.videoPlayBtn}>
							<Button
								type={ButtonTypeTokens.IconElevated}
								iconName={IconTokens.Play}
								onPress={onPress}
							/>
						</View>
					</View>
				)}
				{audioUrl && (
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
									name={IconTokens.Attachment}
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
								label={'0:05'}
								fontSize={FontSizeTokens['2xs']}
								color={ColorTokens.Grey_400}
							/>
						</Stack>
					</Stack>
				)}
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
					<Typography
						label={label}
						color={labelColor}
						fontSize={FontSizeTokens.sm}
					/>
				)}
			</View>
			<Space size={4} />
			<Typography
				label={timeStamp}
				color={ColorTokens.Grey_300}
				fontSize={FontSizeTokens.xs}
			/>
		</View>
	);
};

export default memo(SenderChatCardBase);
export { SenderChatCardBase };
