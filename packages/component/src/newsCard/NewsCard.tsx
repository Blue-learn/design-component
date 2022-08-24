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
import _map from 'lodash-es/map';
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
	bgColor = ColorTokens.Grey_600,
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
									type={TypographyTypeTokens.H5}
									numberOfLines={1}
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
										type={TypographyTypeTokens.B6}
										color={ColorTokens.Grey_200}
										numberOfLines={2}
									/>
								) : (
									<></>
								),
								<Space
									size={
										source && source?.name
											? SizeTypeTokens.LG
											: SizeTypeTokens.NONE
									}
								/>,
								source && source?.name ? (
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
											label={source?.name}
											type={TypographyTypeTokens.B7}
										/>
										<Space size={SizeTypeTokens.SM} />
										<Icon
											name={IconTokens.Dot}
											size={IconSizeTokens.XXS}
											color={ColorTokens.Grey_300}
										/>
										<Space size={SizeTypeTokens.SM} />
										<Typography
											label={timeStamp}
											type={TypographyTypeTokens.B7}
											color={ColorTokens.Grey_200}
										/>
									</Stack>
								) : (
									<></>
								),
								<Space size={SizeTypeTokens.SM} />,
								<Divider
									size={DividerSizeTokens.SM}
									margin={{ vertical: SizeTypeTokens.SM }}
									color={ColorTokens.Grey_550}
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
										onPress={() =>
											triggerAction(likeAction)
										}
										// action={likeAction}
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
										onPress={() =>
											triggerAction(discussAction)
										}
									/>
									<Button
										type={ButtonTypeTokens.IconGhost}
										icon={{
											name: IconTokens.ThreeDots,
											size: IconSizeTokens.LG,
										}}
										onPress={() =>
											triggerAction(MoreAction)
										}
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

export default React.memo(NewsCard);
export { NewsCard };
