import React from 'react';
import {
	AvatarSizeTokens,
	BorderRadiusTokens,
	ButtonTypeTokens,
	ColorTokens,
	FontSizeTokens,
	IconSizeTokens,
	IconTokens,
	MemberCardProps,
	SizeTypeTokens,
	StackAlignItems,
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
								<Typography
									label={subtitle}
									type={TypographyTypeTokens.B4}
									fontSize={FontSizeTokens.XS}
								/>
							</Stack>
						</Stack>
						<Button
							type={ButtonTypeTokens.IconFilled}
							labelColor={ColorTokens.Grey_500}
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
						<Space size={SizeTypeTokens.SM} />
						<Stack type={StackType.row}>
							{_map(
								chips,
								(item: string, index: number) => [
									<Tag label={item} />,
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
