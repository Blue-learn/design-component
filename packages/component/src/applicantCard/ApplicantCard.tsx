import React from 'react';
import {
	ApplicantCardProps,
	ApplicationSeenTokens,
	AvatarSizeTokens,
	BorderRadiusTokens,
	ColorTokens,
	DividerSizeTokens,
	FontTransformToken,
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
import { View } from 'react-native';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import Avatar from '../avatar/Avatar';
import Space from '../space/Space';
import ThemeProvider from '@blue-learn/theme';
import { Divider } from '../divider/Divider';
import Tag from '../tag/Tag';
import Icon from '../icon/Icon';

const ApplicantCard: React.FunctionComponent<
	ApplicantCardProps & WidgetProps
> = ({
	avatar,
	title,
	subtitle,
	description,
	margin = {
		bottom: SizeTypeTokens.XL,
	},
	onPress,
	unreadCount,
	state,
	padding = {
		vertical: SizeTypeTokens.NONE,
		horizontal: SizeTypeTokens.NONE,
	},
	bgColor = ColorTokens.Grey_50,
	borderRadius = BorderRadiusTokens.BR1,
	status,
	powState,
	assignmentState,
}) => {
	const theme = ThemeProvider.getTheme();
	if (!title) return <></>;

	const tagStyleProps = React.useMemo(
		() => ({
			width: 16,
			height: 16,
			borderRadius: 8,
			justifyContent: 'center',
			alignItems: 'center',
			marginLeft: 2,
			backgroundColor:
				theme.colors[ColorTokens.Primary_400],
		}),
		[],
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
								state === ApplicationSeenTokens.UNSEEN
									? 4
									: 0,
							borderColor:
								theme.colors[ColorTokens.Primary_500],
							borderRadius:
								theme.borderRadius[borderRadius],
							paddingVertical: 12,
							paddingRight: 12,
							paddingLeft:
								state === ApplicationSeenTokens.UNSEEN
									? 8
									: 12,
						}}
					>
						<View
							style={{
								position: 'absolute',
								zIndex: 5,
								right: -6,
								top: -6,
								flexDirection: 'row',
							}}
						>
							{powState ===
								ApplicationSeenTokens.UNSEEN && (
								<View style={tagStyleProps}>
									<Icon
										name={IconTokens.POW}
										size={IconSizeTokens.XXS}
										color={ColorTokens.Grey_50}
									/>
								</View>
							)}
							{assignmentState ===
								ApplicationSeenTokens.UNSEEN && (
								<View style={tagStyleProps}>
									<Icon
										name={IconTokens.Assignment}
										size={IconSizeTokens.XXS}
										color={ColorTokens.Grey_50}
									/>
								</View>
							)}
							{unreadCount > 0 && (
								<View style={tagStyleProps}>
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
							)}
						</View>

						<Stack
							type={StackType.row}
							alignItems={StackAlignItems.center}
							justifyContent={
								StackJustifyContent.spaceBetween
							}
						>
							<View style={{ flex: 1 }}>
								<Stack
									type={StackType.row}
									alignItems={StackAlignItems.center}
								>
									<Avatar
										uri={avatar}
										size={AvatarSizeTokens.XL}
									/>
									<Space size={SizeTypeTokens.MD} />

									<View style={{ flex: 1 }}>
										<Stack
											type={StackType.row}
											alignItems={StackAlignItems.center}
										>
											<Typography
												label={title}
												type={TypographyTypeTokens.HEADING_MD}
												numberOfLines={1}
											/>
											<Space size={SizeTypeTokens.MD} />
											<Tag label={status} />
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
						<Divider
							size={DividerSizeTokens.SM}
							margin={{ vertical: SizeTypeTokens.XL }}
						/>
						<Typography
							type={
								TypographyTypeTokens.BODY_2XS_PLACEHOLDER
							}
							textTransform={
								FontTransformToken.uppercase
							}
							label={
								'Top things to know about ' +
								title.trim().split(' ')[0] +
								' :'
							}
						/>
						<Space size={SizeTypeTokens.SM} />
						<Typography
							type={
								TypographyTypeTokens.BODY_XS_SECONDARY
							}
							label={description}
						/>
					</View>
				),
			}}
		/>
	);
};

export default React.memo(ApplicantCard);
export { ApplicantCard };
