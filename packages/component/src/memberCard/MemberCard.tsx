import React from 'react';
import {
	AvatarSizeTokens,
	BorderRadiusTokens,
	ButtonTypeTokens,
	ColorTokens,
	IconSizeTokens,
	IconTokens,
	MemberCardProps,
	SizeTypeTokens,
	StackAlignItems,
	StackFlexWrap,
	StackJustifyContent,
	StackType,
	TypographyTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import Avatar from '../avatar/Avatar';
import Space from '../space/Space';
import _map from 'lodash-es/map';
import Tag from '../tag/Tag';
import Button from '../button/Button';
import Icon from '../icon/Icon';

const MemberCard: React.FunctionComponent<
	MemberCardProps & WidgetProps
> = ({
	avatar,
	title,
	subtitle,
	location,
	headline,
	chips,
	chipsTitle,
	onPress,
	cta,
	padding,
	bgColor = ColorTokens.Grey_600,
	borderRadius = BorderRadiusTokens.BR2,
	action,
	triggerAction,
}) => {
	if (!title) return <></>;
	const interestToString = (interest: string) => {
		if (interest && interest !== null) {
			let temp = interest
				.replace(/_/g, ' ')
				.toLowerCase();
			return (
				temp.charAt(0).toUpperCase() + temp.slice(1)
			);
		} else {
			return ' ';
		}
	};

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
			header={{
				children: (
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
								uri={avatar}
								size={AvatarSizeTokens.XL}
							/>
							<Space size={SizeTypeTokens.MD} />
							<Stack>
								<Typography
									label={title}
									type={TypographyTypeTokens.H4}
								/>
								<Stack
									type={StackType.row}
									alignItems={StackAlignItems.center}
								>
									{location ? (
										<Icon
											name={IconTokens.LocationPin}
											size={IconSizeTokens.XS}
											color={ColorTokens.Grey_200}
										/>
									) : (
										<></>
									)}
									<Space
										size={
											location
												? SizeTypeTokens.SM
												: SizeTypeTokens.NONE
										}
									/>
									<Typography
										label={location ? location : subtitle}
										type={TypographyTypeTokens.B6}
										color={ColorTokens.Grey_200}
									/>
								</Stack>
							</Stack>
						</Stack>
						<Button
							type={ButtonTypeTokens.IconFilled}
							labelColor={ColorTokens.Grey_500}
							onPress={cta}
							icon={{
								name: IconTokens.Chat,
								size: IconSizeTokens.XL,
								color: ColorTokens.Grey_500,
							}}
						/>
					</Stack>
				),
			}}
			body={{
				children: headline ? (
					<Stack>
						<Space size={SizeTypeTokens.MD} />
						<Typography
							label={headline}
							type={TypographyTypeTokens.B6}
						/>
					</Stack>
				) : (
					<></>
				),
			}}
			footer={{
				children: (
					<Stack>
						<Space size={SizeTypeTokens.MD} />
						<Typography
							label={chipsTitle}
							type={TypographyTypeTokens.H6}
						/>
						<Space size={SizeTypeTokens.SM} />
						<Stack
							type={StackType.row}
							flexWrap={StackFlexWrap.wrap}
						>
							{_map(
								chips,
								(item: string, index: number) => (
									<Tag
										key={index}
										label={interestToString(item)}
										margin={{
											right: SizeTypeTokens.SM,
											bottom: SizeTypeTokens.SM,
										}}
									/>
								),
							)}
						</Stack>
					</Stack>
				),
			}}
		/>
	);
};

export default React.memo(MemberCard);
export { MemberCard };
