import React, { memo } from 'react';
import {
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	FontSizeTokens,
	ChatCardBaseProps,
	SpaceTypeTokens,
	SpaceTypeTokensMap,
	FontDecorationToken,
	FontWeightTokens,
	ButtonTypeTokens,
	IconTokens,
	avatarSizeTokens,
	StackType,
	StackAlignType,
	FontFamilyTokens,
	ImageSizeTokens,
	IconSizeTokens,
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
	imageUrl = [
		'https://reactnative.dev/img/tiny_logo.png',
		'https://reactnative.dev/img/tiny_logo.png',
	],
	videoThumbnailUrl,
	audioUrl,
	linkUrl,
	onPress,
	fileType,
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
				{nameText && (
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
					</Stack>
				)}
				<Space size={8} />
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
					<Stack>
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
					</Stack>
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
					<Stack>
						<Space
							size={
								imageUrl || videoThumbnailUrl ? 4 : 0
							}
						/>
						<Typography
							label={label}
							color={labelColor}
							fontSize={FontSizeTokens.sm}
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
		</View>
	);
};

export default memo(ReceiverChatCardBase);
export { ReceiverChatCardBase };
