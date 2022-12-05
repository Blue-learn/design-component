import React from 'react';
import {
	AvatarSizeTokens,
	AvatarTypeTokens,
	BorderRadiusTokens,
	ButtonTypeTokens,
	ChipTypeTokens,
	ColorTokens,
	DiscussionCardProps,
	DiscussionStateTokens,
	DividerSizeTokens,
	ImageSizeTokens,
	SizeTypeTokens,
	Skill,
	StackAlignItems,
	StackFlexWrap,
	StackJustifyContent,
	StackType,
	TagProps,
	TypographyTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import {
	TouchableOpacity,
	View,
} from 'react-native';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import _map from 'lodash-es/map';
import Button from '../button/Button';
import Space from '../space/Space';
import Avatar from '../avatar/Avatar';
import Tag from '../tag/Tag';
import Divider from '../divider/Divider';
import Chip from '../chip/Chip';

const DiscussionCard: React.FunctionComponent<
	DiscussionCardProps & WidgetProps
> = ({
	userLabel,
	state = DiscussionStateTokens.UNSEEN,
	bgColor = ColorTokens.Grey_50,
	userAvatarURL,
	timeStamp,
	title,
	subtitle,
	clubTitle,
	skills,
	participantsLabel,
	participants,
	tags,
	onPress,
	ctaText,
	action,
	margin,
	profileAction,
	triggerAction,
	onPressProfile,
}) => {
	if (!title) return <></>;

	const handleAction = () => {
		onPress && onPress();
		action &&
			triggerAction &&
			triggerAction(action);
	};

	if (!title || !userLabel || !userAvatarURL)
		return <></>;
	else
		return (
			<Card
				onPress={handleAction}
				bgColor={bgColor}
				borderRadius={BorderRadiusTokens.BR2}
				padding={{
					top: SizeTypeTokens.XL,
					bottom: ctaText
						? SizeTypeTokens.XL
						: SizeTypeTokens.MD,
					horizontal: SizeTypeTokens.LG,
				}}
				margin={margin}
				header={{
					children: (
						<View>
							<Stack
								type={StackType.row}
								alignItems={StackAlignItems.center}
								justifyContent={
									StackJustifyContent.spaceBetween
								}
							>
								<TouchableOpacity
									style={{
										flex: 1,
										flexDirection: 'row',
									}}
									onPress={() => {
										if (onPressProfile) onPressProfile();
										if (profileAction)
											triggerAction(profileAction);
									}}
								>
									<Avatar
										uri={userAvatarURL}
										size={AvatarSizeTokens.XS}
									/>
									<Space size={SizeTypeTokens.MD} />
									<View
										style={{
											flex: 1,
										}}
									>
										<Typography
											label={userLabel}
											type={
												TypographyTypeTokens.SUBHEADING_XS
											}
											numberOfLines={1}
										/>
										<Typography
											type={
												TypographyTypeTokens.BODY_2XS_SECONDARY
											}
											label={timeStamp ? timeStamp : ''}
										/>
									</View>
								</TouchableOpacity>
								{_map(
									tags?.slice(0, 3),
									(item: TagProps, index: number) => [
										<Tag
											key={index}
											margin={{
												right:
													index !== tags?.length - 1
														? SizeTypeTokens.SM
														: SizeTypeTokens.NONE,
											}}
											{...item}
										/>,
									],
								)}
							</Stack>
							<Space size={SizeTypeTokens.MD} />
							<View
								style={
									state === DiscussionStateTokens.SEEN
										? { opacity: 0.7 }
										: { opacity: 1 }
								}
							>
								<Typography
									label={title}
									type={
										TypographyTypeTokens.HEADING_MD_SECONDARY
									}
									numberOfLines={2}
								/>
							</View>

							{subtitle ? (
								[
									<Space size={SizeTypeTokens.MD} />,
									<View
										style={
											state === DiscussionStateTokens.SEEN
												? { opacity: 0.7 }
												: { opacity: 1 }
										}
									>
										<Typography
											label={subtitle}
											numberOfLines={2}
											type={
												TypographyTypeTokens.BODY_XS_SECONDARY
											}
										/>
									</View>,
								]
							) : (
								<></>
							)}

							{clubTitle ? (
								[
									<Space size={SizeTypeTokens.MD} />,
									<Tag
										margin={{
											bottom: SizeTypeTokens.NONE,
										}}
										label={clubTitle}
									/>,
								]
							) : (
								<></>
							)}
							{skills && skills?.length > 0 ? (
								[
									<Space size={SizeTypeTokens.MD} />,
									<Stack
										type={StackType.row}
										alignItems={StackAlignItems.center}
										flexWrap={StackFlexWrap.wrap}
									>
										{_map(
											skills?.slice(0, 5),
											(item: Skill, index: number) => [
												<Chip
													key={item.skill_id}
													label={item.skill}
													image={{
														uri: item?.skill_image,
														size: ImageSizeTokens.XXXS,
													}}
													margin={{
														right:
															index !== skills?.length - 1
																? SizeTypeTokens.MD
																: SizeTypeTokens.NONE,
														bottom: SizeTypeTokens.MD,
													}}
													type={
														ChipTypeTokens.SMALL_UNSELECTED
													}
												/>,
											],
										)}
									</Stack>,
								]
							) : (
								<></>
							)}
						</View>
					),
				}}
				body={{
					children: ctaText ? (
						<Divider
							size={DividerSizeTokens.SM}
							margin={{
								top:
									skills?.length > 0
										? SizeTypeTokens.SM
										: SizeTypeTokens.MD,
								bottom: SizeTypeTokens.MD,
							}}
							color={ColorTokens.Grey_100}
						/>
					) : (
						<></>
					),
				}}
				footer={{
					children: ctaText ? (
						<Stack
							type={StackType.row}
							alignItems={StackAlignItems.center}
							justifyContent={
								StackJustifyContent.spaceBetween
							}
						>
							{participants?.length > 0 ? (
								<Stack
									type={StackType.row}
									alignItems={StackAlignItems.center}
								>
									<Avatar
										size={AvatarSizeTokens.XS}
										type={AvatarTypeTokens.MULTIPLE}
										borderColor={ColorTokens.Grey_50}
										borderWidth={1.5}
										uris={participants}
									/>
									<Space size={SizeTypeTokens.SM} />
									<Typography
										label={participantsLabel}
										type={
											TypographyTypeTokens.SUBHEADING_XS_SECONDARY
										}
									/>
								</Stack>
							) : (
								<></>
							)}

							<View
								style={{
									flex: 1,
									flexDirection: 'row',
									justifyContent: 'flex-end',
								}}
							>
								<Button
									onPress={handleAction}
									type={ButtonTypeTokens.SmallGhost}
									labelColor={
										ctaText.includes('->')
											? ColorTokens.Primary_500
											: ColorTokens.Grey_700
									}
									label={ctaText}
								/>
							</View>
						</Stack>
					) : (
						<></>
					),
				}}
			/>
		);
};

export default React.memo(DiscussionCard);
export { DiscussionCard };
