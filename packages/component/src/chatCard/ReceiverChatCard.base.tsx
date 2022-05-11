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
} from '@blue-learn/schema';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import { Typography } from '../typography/Typography';
import Button from '../button/Button';

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
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
	bgColor = ColorTokens.White,
	labelColor = ColorTokens.Grey_500,
	borderRadius = CornerRadiusTokens.BR2,
	padding = SpaceTypeTokens.MD,
	avatarUrl = 'https://reactnative.dev/img/tiny_logo.png',
	nameText = 'lorem ipsum',
	timeStamp,
	imageUrl,
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
						marginBottom:
							theme.space[SpaceTypeTokens.SM],
					},
				]}
			>
				{nameText && (
					<View
						style={[
							styles.row,
							{
								marginBottom:
									theme.space[SpaceTypeTokens.MD],
							},
						]}
					>
						<Image
							source={{
								uri: avatarUrl,
							}}
							resizeMode='cover'
							style={[
								styles.avatar,
								{
									marginRight:
										theme.space[SpaceTypeTokens.MD],
								},
							]}
						/>
						<Typography
							label={nameText}
							color={ColorTokens.Grey_400}
							fontSize={FontSizeTokens.xs}
							fontWeight={FontWeightTokens['semi-bold']}
						/>
					</View>
				)}
				{imageUrl && (
					<TouchableOpacity onPres={onPress}>
						<Image
							source={{
								uri: imageUrl[0],
							}}
							resizeMode='cover'
							style={[
								styles.imageContainer,
								{
									marginBottom: label
										? theme.space[SpaceTypeTokens.SM]
										: 0,
								},
							]}
						/>
						{imageUrl.length > 1 && (
							<View
								style={[
									styles.imageDetailsContainer,
									{
										backgroundColor:
											theme.colors[ColorTokens.Grey_600],
										bottom: theme.space[SpaceTypeTokens.SM],
									},
								]}
							>
								<Typography
									label={`+ ${imageUrl.length - 1} more`}
									color={ColorTokens.White}
								/>
							</View>
						)}
					</TouchableOpacity>
				)}
				{videoThumbnailUrl && (
					<View>
						<Image
							source={{
								uri: videoThumbnailUrl,
							}}
							resizeMode='cover'
							style={[
								styles.imageContainer,
								{
									marginBottom: label
										? theme.space[SpaceTypeTokens.SM]
										: 0,
								},
							]}
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
					<View>
						<Button
							type={ButtonTypeTokens.IconElevated}
							iconName={IconTokens.Play}
							onPress={onPress}
						/>
						<Typography label={fileType} />
					</View>
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
