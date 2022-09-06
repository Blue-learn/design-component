import React from 'react';
import {
	AvatarSizeTokens,
	BorderRadiusTokens,
	ColorTokens,
	CommentCardProps,
	SizeTypeTokens,
	StackAlignItems,
	StackJustifyContent,
	StackType,
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
import Space from '../space/Space';
import Avatar from '../avatar/Avatar';

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
	action,
	onPress,
	triggerAction,
}) => {
	if (!title) return <></>;

	const profileAction = () => {
		onPress && onPress();
		action &&
			triggerAction &&
			triggerAction(action);
	};

	if (!title) return <></>;
	else
		return (
			<Card
				bgColor={bgColor}
				borderRadius={BorderRadiusTokens.BR1}
				padding={padding}
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
									onPress={profileAction}
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
											type={TypographyTypeTokens.S6}
											numberOfLines={1}
										/>
									</Stack>
								</TouchableOpacity>
								{time ? (
									<Typography
										label={time}
										type={TypographyTypeTokens.B6}
										color={ColorTokens.Grey_200}
									/>
								) : (
									<></>
								)}
							</Stack>
							<Space size={SizeTypeTokens.MD} />
						</View>
					),
				}}
				body={{
					children: <Typography label={title} />,
				}}
			/>
		);
};

export default React.memo(CommentCard);
export { CommentCard };
