import React, { memo } from 'react';
import {
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	FontSizeTokens,
	ChatCardBaseProps,
	SpaceTypeTokens,
	FontDecorationToken,
} from '@blue-learn/schema';
import {
	StyleSheet,
	View,
	TouchableOpacity,
	Image,
} from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import { Typography } from '../typography/Typography';

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
						marginBottom:
							theme.space[SpaceTypeTokens.SM],
					},
				]}
			>
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
						<TouchableOpacity
							onPress={onPress}
							style={[
								styles.videoPlayBtn,
								{
									backgroundColor:
										theme.colors[ColorTokens.Blue_100],
								},
							]}
						></TouchableOpacity>
					</View>
				)}
				{audioUrl && (
					<View>
						<TouchableOpacity
							onPress={onPress}
							style={[
								styles.videoPlayBtn,
								{
									backgroundColor:
										theme.colors[ColorTokens.Blue_100],
								},
							]}
						></TouchableOpacity>
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

export default memo(SenderChatCardBase);
export { SenderChatCardBase };
