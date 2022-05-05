import React, { memo } from 'react';
import {
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	FontSizeTokens,
	ChatCardBaseProps,
	SpaceTypeTokens,
	FontWeightTokens,
	FontFamilyTokens,
	FontTransformToken,
} from '@blue-learn/schema';
import {
	StyleSheet,
	View,
	Image,
} from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import { Typography } from '../typography/Typography';

const styles = StyleSheet.create({
	rowContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
	},
});

/**
 * Raw Component with Derived props + Theme
 */
const ReplyChatCardBase: React.FunctionComponent<
	ChatCardBaseProps
> = ({
	label = 'Are bro how was the video? Hope you had fun watching it. It was wildd',
	bgColor = ColorTokens.Grey_100,
	labelColor = ColorTokens.Grey_500,
	borderRadius = CornerRadiusTokens.BR2,
	padding = SpaceTypeTokens.MD,
	imageUrl,
	fileType,
	linkUrl,
	videoThumbnailUrl,
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
		<View
			style={[
				styles.rowContainer,
				{
					backgroundColor: backgroundColorValue,
					borderRadius: borderRadiusValue,
					padding: paddingValue,
				},
			]}
		>
			<View style={{ width: '75%' }}>
				<View style={{ paddingBottom: 4 }}>
					<Typography
						fontWeight={FontWeightTokens['semi-bold']}
						fontSize={FontSizeTokens.xs}
						color={ColorTokens.Grey_400}
						ellipsizeMode='tail'
						numberOfLines={1}
					/>
				</View>
				{!label ? (
					<Typography
						label={label}
						color={labelColor}
						fontSize={FontSizeTokens['2xs']}
						ellipsizeMode='tail'
						numberOfLines={1}
					/>
				) : (
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<View
							style={{
								height: 10,
								width: 10,
								marginRight: 6,
								backgroundColor:
									theme.colors[ColorTokens.Grey_400],
							}}
						/>
						<Typography
							label={fileType}
							color={labelColor}
							textTransform={
								FontTransformToken.capitalize
							}
							fontSize={FontSizeTokens['2xs']}
							numberOfLines={1}
						/>
					</View>
				)}
				{linkUrl && (
					<Typography
						label={linkUrl}
						color={labelColor}
						fontSize={FontSizeTokens['2xs']}
						ellipsizeMode='tail'
						numberOfLines={1}
					/>
				)}
			</View>
			{imageUrl && imageUrl?.length > 0 && (
				<Image
					source={{
						uri: imageUrl,
					}}
					style={{
						height: 32,
						width: 32,
						marginHorizontal: 4,
					}}
				/>
			)}
			{videoThumbnailUrl && (
				<Image
					source={{
						uri: videoThumbnailUrl,
					}}
					style={{
						height: 32,
						width: 32,
						marginHorizontal: 4,
					}}
				/>
			)}
		</View>
	);
};
export default memo(ReplyChatCardBase);
export { ReplyChatCardBase };
