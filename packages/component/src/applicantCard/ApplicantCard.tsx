import React from 'react';
import {
	ApplicantCardProps,
	ApplicationStateTokens,
	AvatarSizeTokens,
	BorderRadiusTokens,
	ButtonTypeTokens,
	ColorTokens,
	IconSizeTokens,
	IconTokens,
	SizeTypeTokens,
	StackAlignItems,
	StackJustifyContent,
	StackType,
	TextAlignTokens,
	TypographyTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import {
	Image,
	Pressable,
	View,
} from 'react-native';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import Avatar from '../avatar/Avatar';
import Space from '../space/Space';
import Button from '../button/Button';
import ThemeProvider from '@blue-learn/theme';

const ApplicantCard: React.FunctionComponent<
	ApplicantCardProps & WidgetProps
> = ({
	avatar,
	title,
	subtitle,
	margin = {
		bottom: SizeTypeTokens.XL,
	},
	onPress,
	chatCTA,
	unreadCount,
	projectTitle,
	projectImage,
	projectCTA,
	state,
	padding = {
		vertical: SizeTypeTokens.NONE,
		horizontal: SizeTypeTokens.NONE,
	},
	bgColor = ColorTokens.Grey_50,
	borderRadius = BorderRadiusTokens.BR2,
}) => {
	const theme = ThemeProvider.getTheme();
	if (!title) return <></>;
	const styleProps = React.useMemo(
		() => ({
			width: 56,
			height: 'auto',
			borderTopLeftRadius: 8,
			borderBottomLeftRadius: 8,
			aspectRatio: 1.5,
		}),
		[projectImage],
	);

	return (
		<Card
			bgColor={bgColor}
			borderRadius={borderRadius}
			onPress={onPress}
			padding={padding}
			margin={margin}
			header={{
				children: (
					<View
						style={{
							borderLeftWidth:
								state === ApplicationStateTokens.SEEN
									? 4
									: 0,
							borderColor:
								theme.colors[ColorTokens.Primary_500],
							borderRadius:
								theme.borderRadius[borderRadius],
							paddingVertical: 12,
							paddingLeft:
								state === ApplicationStateTokens.SEEN
									? 8
									: 12,
							paddingRight: 12,
						}}
					>
						<Stack
							type={StackType.row}
							alignItems={StackAlignItems.center}
							justifyContent={
								StackJustifyContent.spaceBetween
							}
						>
							<View
								style={{
									flex: 1,
								}}
							>
								<Stack
									type={StackType.row}
									alignItems={StackAlignItems.center}
								>
									<Avatar
										uri={avatar}
										size={AvatarSizeTokens.XL}
									/>
									<Space size={SizeTypeTokens.MD} />

									<View
										style={{
											flex: 1,
										}}
									>
										<Stack
											type={StackType.row}
											justifyContent={
												StackJustifyContent.spaceBetween
											}
											alignItems={StackAlignItems.center}
										>
											<Typography
												label={title}
												type={TypographyTypeTokens.HEADING_MD}
												numberOfLines={1}
											/>
											<Pressable
												onPress={() => {
													if (chatCTA) {
														chatCTA();
													}
												}}
											>
												<View
													style={{
														position: 'absolute',
														zIndex: 5,
														right: -2,
														top: -2,
														width: 18,
														height: 18,
														borderRadius: 9,
														borderWidth: 2,
														borderColor:
															theme.colors[ColorTokens.Grey_50],
														justifyContent: 'center',
														backgroundColor:
															theme.colors[
																ColorTokens.Error_100
															],
													}}
												>
													<Typography
														label={
															unreadCount < 10
																? unreadCount.toString()
																: '9+'
														}
														textAlign={TextAlignTokens.center}
														type={TypographyTypeTokens.BODY_2XS}
														color={ColorTokens.Grey_50}
													/>
												</View>
												<Button
													type={ButtonTypeTokens.IconGhost}
													labelColor={ColorTokens.Grey_800}
													icon={{
														name: IconTokens.Chat,
														size: IconSizeTokens.XL,
													}}
												/>
											</Pressable>
										</Stack>
										<Typography
											label={subtitle}
											type={
												TypographyTypeTokens.BODY_XS_SECONDARY
											}
											numberOfLines={1}
										/>
									</View>
								</Stack>
							</View>
						</Stack>
						<Space size={SizeTypeTokens.XL} />
						<Pressable
							onPress={projectCTA}
							style={{
								borderRadius: 8,
								backgroundColor:
									theme.colors[ColorTokens.Grey_100],
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'space-between',
							}}
						>
							<Image
								style={styleProps}
								source={{
									uri: projectImage,
								}}
							/>
							<Space size={SizeTypeTokens.LG} />
							<View
								style={{ flex: 1, paddingVertical: 4 }}
							>
								<Typography
									type={
										TypographyTypeTokens.SUBHEADING_XS_SECONDARY
									}
									label={projectTitle}
								/>
							</View>
						</Pressable>
					</View>
				),
			}}
		/>
	);
};

export default React.memo(ApplicantCard);
export { ApplicantCard };
