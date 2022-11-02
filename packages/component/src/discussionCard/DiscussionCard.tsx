import React from 'react';
import {
	AvatarSizeTokens,
	AvatarTypeTokens,
	BorderRadiusTokens,
	ButtonTypeTokens,
	ColorTokens,
	DiscussionCardProps,
	DividerSizeTokens,
	FontTransformToken,
	DiscussionStateTokens,
	SizeTypeTokens,
	StackAlignItems,
	StackJustifyContent,
	StackType,
	TagProps,
	TypographyTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import {
	View,
	TouchableOpacity,
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

const DiscussionCard: React.FunctionComponent<
	DiscussionCardProps & WidgetProps
> = ({
	userLabel,
	state = DiscussionStateTokens.UNSEEN,
	userAvatarURL,
	title,
	subtitle,
	clubTitle,
	participantsLabel,
	participants,
	tags,
	onPress,
	ctaText,
	action,
	margin,
	profileAction,
	triggerAction,
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
				bgColor={ColorTokens.Grey_50}
				borderRadius={BorderRadiusTokens.BR2}
				padding={{
					vertical: SizeTypeTokens.XL,
					horizontal: SizeTypeTokens.MD,
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
									}}
									onPress={() =>
										triggerAction(profileAction)
									}
								>
									<Stack
										type={StackType.row}
										alignItems={StackAlignItems.center}
									>
										<Avatar
											uri={userAvatarURL}
											size={AvatarSizeTokens.XS}
										/>
										<Space size={SizeTypeTokens.MD} />
										<Typography
											label={userLabel}
											type={
												TypographyTypeTokens.SUBHEADING_XS
											}
											numberOfLines={1}
										/>
									</Stack>
								</TouchableOpacity>
								{_map(
									tags?.slice(0, 3),
									(item: TagProps, index: number) => [
										<Tag
											key={index}
											{...item}
											margin={{
												right:
													index !== tags?.length - 1
														? SizeTypeTokens.SM
														: SizeTypeTokens.NONE,
											}}
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
									textTransform={
										FontTransformToken.capitalize
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
						</View>
					),
				}}
				body={{
					children: (
						<Divider
							size={DividerSizeTokens.SM}
							margin={{ vertical: SizeTypeTokens.LG }}
							color={ColorTokens.White_20}
						/>
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
