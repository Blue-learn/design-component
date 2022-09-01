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
	GradientColorTokens,
	SizeTypeTokens,
	StackAlignItems,
	StackJustifyContent,
	StackType,
	TagProps,
	TagTypeTokens,
	TypographyTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import { View } from 'react-native';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import _map from 'lodash-es/map';
import Button from '../button/Button';
import Space from '../space/Space';
import Avatar from '../avatar/Avatar';
import Tag from '../tag/Tag';
import Divider from '../divider/Divider';

const DicussionCard: React.FunctionComponent<
	DiscussionCardProps & WidgetProps
> = ({
	userLabel,
	userAvatarURL,
	title,
	subtitle,
	clubTitle,
	participantsLabel,
	participants,
	tag,
	onPress,
	ctaText,
	action,
	gradientColor = GradientColorTokens.D_5,
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
		return;
	else
		return (
			<Card
				onPress={handleAction}
				gradient={{
					colors: gradientColor,
				}}
				borderRadius={BorderRadiusTokens.BR2}
				padding={{
					vertical: SizeTypeTokens.XL,
					horizontal: SizeTypeTokens.MD,
				}}
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
											uri={userAvatarURL}
											size={AvatarSizeTokens.XS}
										/>
										<Space size={SizeTypeTokens.MD} />
										<Typography
											label={userLabel}
											type={TypographyTypeTokens.S6}
											numberOfLines={1}
										/>
									</Stack>
								</View>
								{_map(
									tag?.slice(0, 3),
									(item: TagProps, index: number) => [
										<Tag
											key={index}
											{...item}
											margin={{
												right:
													index !== tag?.length - 1
														? SizeTypeTokens.SM
														: SizeTypeTokens.NONE,
											}}
										/>,
									],
								)}
							</Stack>
							<Space size={SizeTypeTokens.MD} />

							<Typography
								label={title}
								type={TypographyTypeTokens.H4}
								textTransform={
									FontTransformToken.capitalize
								}
								numberOfLines={2}
							/>

							{subtitle ? (
								[
									<Space size={SizeTypeTokens.MD} />,
									<Typography
										label={subtitle}
										numberOfLines={2}
										type={TypographyTypeTokens.B6}
										color={ColorTokens.Grey_200}
									/>,
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
										type={TagTypeTokens.SECONDARY}
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
							<Stack
								type={StackType.row}
								alignItems={StackAlignItems.center}
							>
								<Avatar
									size={AvatarSizeTokens.XS}
									type={AvatarTypeTokens.MULTIPLE}
									uris={participants}
								/>
								<Space size={SizeTypeTokens.SM} />
								<Typography
									label={participantsLabel}
									type={TypographyTypeTokens.S6}
								/>
							</Stack>
							<Button
								type={ButtonTypeTokens.SmallGhost}
								labelColor={ColorTokens.Grey_50}
								label={ctaText}
							/>
						</Stack>
					) : (
						<></>
					),
				}}
			/>
		);
};

export default React.memo(DicussionCard);
export { DicussionCard };
