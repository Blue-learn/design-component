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
	MemberCardProps
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
	borderRadius = BorderRadiusTokens.BR2,
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

	return (
		<Card
			bgColor={ColorTokens.Grey_600}
			borderRadius={borderRadius}
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
				children: (
					<Stack>
						<Space size={SizeTypeTokens.MD} />
						<Typography
							label={headline}
							type={TypographyTypeTokens.B6}
						/>
						<Space size={SizeTypeTokens.MD} />
					</Stack>
				),
			}}
			footer={{
				children: (
					<Stack>
						<Typography
							label={chipsTitle}
							type={TypographyTypeTokens.H6}
						/>
						<Space size={SizeTypeTokens.XS} />
						<Stack
							type={StackType.row}
							flexWrap={StackFlexWrap.wrap}
						>
							{_map(
								chips,
								(item: string, index: number) => [
									<Tag label={interestToString(item)} />,
									<Space
										size={
											index === chips?.length - 1
												? SizeTypeTokens.NONE
												: SizeTypeTokens.MD
										}
									/>,
								],
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
