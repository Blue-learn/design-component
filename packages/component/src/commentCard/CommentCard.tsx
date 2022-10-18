import React from 'react';
import {
	AvatarSizeTokens,
	BorderRadiusTokens,
	ButtonTypeTokens,
	ColorTokens,
	CommentCardProps,
	IconAlignmentTokens,
	IconTokens,
	LikeStateTokens,
	SizeTypeTokens,
	StackAlignItems,
	StackType,
	TypographyTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import { TouchableOpacity } from 'react-native';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import Space from '../space/Space';
import Avatar from '../avatar/Avatar';
import { Button } from '../button/Button';

const CommentCard: React.FunctionComponent<
	CommentCardProps & WidgetProps
> = ({
	user,
	padding = {
		vertical: SizeTypeTokens.MD,
		horizontal: SizeTypeTokens.MD,
	},
	margin,
	title,
	time,
	bgColor = ColorTokens.Grey_600,
	onPressProfile,
	profileAction,
	likeAction,
	onPressLike,
	likeState = LikeStateTokens.NOT_SELECTED,
	likeCount,
	triggerAction,
}) => {
	if (!title) return <></>;
	else
		return (
			<Card
				margin={margin}
				padding={{
					vertical: SizeTypeTokens.NONE,
					horizontal: SizeTypeTokens.NONE,
				}}
				header={{
					children: (
						<Card
							bgColor={bgColor}
							borderRadius={BorderRadiusTokens.BR1}
							padding={padding}
							header={{
								children: (
									<>
										<Stack
											type={StackType.row}
											alignItems={StackAlignItems.center}
										>
											<TouchableOpacity
												onPress={() => {
													if (profileAction)
														triggerAction(profileAction);
													if (onPressProfile) onPressProfile();
												}}
												style={{
													maxWidth: '85%',
												}}
											>
												<Stack
													type={StackType.row}
													alignItems={StackAlignItems.center}
												>
													<Avatar
														uri={user?.avatar}
														size={AvatarSizeTokens.XS}
													/>
													<Space size={SizeTypeTokens.MD} />
													<Typography
														label={user?.title}
														numberOfLines={1}
														type={
															TypographyTypeTokens.SUBHEADING_SM
														}
													/>
												</Stack>
											</TouchableOpacity>
											<Space size={SizeTypeTokens.MD} />
											{time ? (
												<Typography
													label={time}
													type={
														TypographyTypeTokens.BODY_XS_SECONDARY
													}
												/>
											) : (
												<></>
											)}
										</Stack>
										<Space size={SizeTypeTokens.MD} />
										<Typography label={title} />
									</>
								),
							}}
						/>
					),
				}}
				footer={{
					children: [
						<Space size={SizeTypeTokens.MD} />,
						<Button
							type={ButtonTypeTokens.SmallGhost}
							labelColor={ColorTokens.Grey_50}
							icon={{
								name:
									likeState === LikeStateTokens.SELECTED
										? IconTokens.LikeFilled
										: IconTokens.Like,
								align: IconAlignmentTokens.left,
							}}
							label={likeCount}
							onPress={() => {
								if (likeAction) triggerAction(likeAction);
								if (onPressLike) onPressLike();
							}}
						/>,
						<Space size={SizeTypeTokens.SM} />,
					],
				}}
			/>
		);
};

export default React.memo(CommentCard);
export { CommentCard };
