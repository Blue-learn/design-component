import React from 'react';
import {
	AspectRatioToken,
	BorderRadiusTokens,
	ButtonTypeTokens,
	ColorTokens,
	DividerSizeTokens,
	IconSizeTokens,
	IconTokens,
	ImageSizeTokens,
	LikeStateTokens,
	NewsCardProps,
	SizeTypeTokens,
	StackAlignItems,
	StackJustifyContent,
	StackType,
	TypographyTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import Space from '../space/Space';
import Button from '../button/Button';
import Image from '../image/Image';
import Divider from '../divider/Divider';
import Icon from '../icon/Icon';

const NewsCard: React.FunctionComponent<
	NewsCardProps & WidgetProps
> = ({
	padding = {
		top: SizeTypeTokens.NONE,
		horizontal: SizeTypeTokens.NONE,
		bottom: SizeTypeTokens.MD,
	},
	margin = {
		bottom: SizeTypeTokens.XL,
	},
	bgColor = ColorTokens.Grey_50,
	borderRadius = BorderRadiusTokens.BR1,
	imageURL,
	title,
	subtitle,
	source,
	timeStamp,
	likeState,
	onPress,
	likeAction,
	discussAction,
	discussActionLabel,
	MoreAction,
	triggerAction,
	action,
	onPressLike,
	onPressDiscuss,
	onPressMore,
}) => {
	if (!title) return <></>;

	const handleAction = () => {
		onPress && onPress();
		action &&
			triggerAction &&
			triggerAction(action);
	};

	return (
		<Card
			bgColor={bgColor}
			borderRadius={borderRadius}
			onPress={handleAction}
			padding={padding}
			margin={margin}
			header={{
				children: imageURL ? (
					<Image
						uri={imageURL}
						size={ImageSizeTokens.FULL}
						aspectRatio={AspectRatioToken.A16_9}
						borderTopRadius={borderRadius}
					/>
				) : (
					<></>
				),
			}}
			body={{
				children: (
					<Card
						padding={{ horizontal: SizeTypeTokens.LG }}
						body={{
							children: [
								<Space size={SizeTypeTokens.LG} />,
								<Typography
									label={title}
									type={TypographyTypeTokens.HEADING_SM}
									numberOfLines={2}
								/>,
								<Space
									size={
										subtitle
											? SizeTypeTokens.MD
											: SizeTypeTokens.NONE
									}
								/>,
								subtitle ? (
									<Typography
										label={subtitle}
										type={
											TypographyTypeTokens.BODY_XS_SECONDARY
										}
										numberOfLines={2}
									/>
								) : (
									<></>
								),
								<Space
									size={
										source && source?.title
											? SizeTypeTokens.LG
											: SizeTypeTokens.NONE
									}
								/>,
								source && source?.title ? (
									<Stack
										type={StackType.row}
										alignItems={StackAlignItems.center}
									>
										<Image
											uri={source?.image}
											size={ImageSizeTokens.XXS}
											borderRadius={BorderRadiusTokens.BR1}
										/>
										<Space size={SizeTypeTokens.SM} />
										<Typography
											label={source?.title}
											type={TypographyTypeTokens.BODY_2XS}
										/>
										<Space size={SizeTypeTokens.SM} />
										<Icon
											name={IconTokens.Dot}
											size={IconSizeTokens.XXS}
											color={ColorTokens.Grey_500}
										/>
										<Space size={SizeTypeTokens.SM} />
										<Typography
											label={timeStamp}
											type={
												TypographyTypeTokens.BODY_2XS_SECONDARY
											}
										/>
									</Stack>
								) : (
									<></>
								),
								<Space size={SizeTypeTokens.SM} />,
								<Divider
									size={DividerSizeTokens.SM}
									margin={{ vertical: SizeTypeTokens.SM }}
								/>,
							],
						}}
						footer={{
							children: (
								<Stack
									type={StackType.row}
									alignItems={StackAlignItems.center}
									justifyContent={
										StackJustifyContent.spaceBetween
									}
								>
									<Button
										type={ButtonTypeTokens.IconGhost}
										onPress={() => {
											if (onPressLike) onPressLike();
											if (likeAction)
												triggerAction(likeAction);
										}}
										icon={{
											name:
												likeState === LikeStateTokens.SELECTED
													? IconTokens.BulbFilled
													: IconTokens.BulbOutline,
											size: IconSizeTokens.XXL,
										}}
									/>
									<Button
										type={ButtonTypeTokens.SmallGhost}
										label={discussActionLabel}
										icon={{
											name: IconTokens.DoubleMessage,
											size: IconSizeTokens.XL,
										}}
										onPress={() => {
											if (onPressDiscuss) onPressDiscuss();
											if (discussAction)
												triggerAction(discussAction);
										}}
									/>
									<Button
										type={ButtonTypeTokens.IconGhost}
										icon={{
											name: IconTokens.Share,
											size: IconSizeTokens.LG,
										}}
										onPress={() => {
											if (onPressMore) onPressMore();
											if (MoreAction)
												triggerAction(MoreAction);
										}}
									/>
								</Stack>
							),
						}}
					/>
				),
			}}
		/>
	);
};

export default React.memo(
	NewsCard,
	(prevProps, nextProps) => {
		return prevProps === nextProps;
	},
);
export { NewsCard };
