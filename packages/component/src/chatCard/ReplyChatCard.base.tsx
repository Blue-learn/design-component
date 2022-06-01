import React, { memo } from 'react';
import {
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	FontSizeTokens,
	ChatCardBaseProps,
	SpaceTypeTokens,
	FontWeightTokens,
	FontTransformToken,
	EllipsizeModeTokens,
	IconTokens,
	IconSizeTokens,
	StackType,
	StackAlignType,
	avatarSizeTokens,
} from '@blue-learn/schema';
import {
	StyleSheet,
	View,
	Image,
} from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import { Typography } from '../typography/Typography';
import Icon from '../icon/Icon';
import Space from '../space/Space';
import Stack from '../stack/Stack';
import Avatar from '../avatar/Avatar';

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
	nameText = 'lorem ipsum',
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
			style={{
				backgroundColor: backgroundColorValue,
				borderRadius: borderRadiusValue,
				padding: paddingValue,
				width: '80%',
			}}
		>
			<Stack
				type={StackType.row}
				alignX={StackAlignType.spaceBetween}
				alignY={StackAlignType.center}
			>
				<View style={{ width: '75%' }}>
					<Typography
						label={nameText}
						fontWeight={FontWeightTokens['semi-bold']}
						fontSize={FontSizeTokens.xs}
						color={ColorTokens.Grey_400}
						ellipsizeMode={EllipsizeModeTokens.tail}
						numberOfLines={1}
					/>
					<Space size={4} />
					{!label ? (
						<Typography
							label={label}
							color={labelColor}
							fontSize={FontSizeTokens['2xs']}
							ellipsizeMode={EllipsizeModeTokens.tail}
							numberOfLines={1}
						/>
					) : (
						<Stack
							type={StackType.row}
							alignY={StackAlignType.center}
						>
							<Icon
								name={IconTokens.Attachment}
								color={ColorTokens.Grey_400}
								size={IconSizeTokens['2xs']}
							/>
							<Space size={4} />
							<Typography
								label={fileType || label}
								color={labelColor}
								textTransform={
									FontTransformToken.capitalize
								}
								fontSize={FontSizeTokens['2xs']}
								numberOfLines={1}
							/>
						</Stack>
					)}
					{linkUrl && (
						<Typography
							label={linkUrl}
							color={labelColor}
							fontSize={FontSizeTokens['2xs']}
							ellipsizeMode={EllipsizeModeTokens.tail}
							numberOfLines={1}
						/>
					)}
				</View>
				{imageUrl && imageUrl?.length > 0 && (
					<Avatar
						uri={imageUrl[0]}
						size={avatarSizeTokens.MD}
					/>
				)}
				{videoThumbnailUrl && (
					<Avatar
						uri={videoThumbnailUrl}
						size={avatarSizeTokens.MD}
					/>
				)}
			</Stack>
		</View>
	);
};
export default memo(ReplyChatCardBase);
export { ReplyChatCardBase };
