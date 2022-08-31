import React from 'react';
import {
	AvatarSizeTokens,
	AvatarTypeTokens,
	BorderRadiusTokens,
	ButtonTypeTokens,
	ColorTokens,
	DiscussionCardProps,
	GradientColorTokens,
	SizeTypeTokens,
	StackJustifyContent,
	StackType,
	TagProps,
	TypographyTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import _map from 'lodash-es/map';
import Button from '../button/Button';
import Space from '../space/Space';
import Avatar from '../avatar/Avatar';
import Tag from '../tag/Tag';

const DicussionCard: React.FunctionComponent<
	DiscussionCardProps & WidgetProps
> = ({
	title,
	subtitle,
	userAvatarURL,
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
					<Stack>
						<Avatar
							uri={userAvatarURL}
							size={AvatarSizeTokens.XS}
						/>
						<Typography
							label={title}
							type={TypographyTypeTokens.S6}
							color={ColorTokens.Grey_200}
						/>
						<Typography
							label={subtitle}
							type={TypographyTypeTokens.S6}
							color={ColorTokens.Grey_200}
						/>
						<Typography
							label={clubTitle}
							type={TypographyTypeTokens.S6}
							color={ColorTokens.Grey_200}
						/>
						<Typography
							label={participantsLabel}
							type={TypographyTypeTokens.S6}
							color={ColorTokens.Grey_200}
						/>
						<Avatar
							size={AvatarSizeTokens.XS}
							type={AvatarTypeTokens.MULTIPLE}
							uris={participants}
						/>
						{_map(
							tag.slice(0, 3),
							(item: TagProps, index: number) => [
								<Tag key={index} {...item} />,
							],
						)}
						<Space size={SizeTypeTokens.SM} />
					</Stack>
				),
			}}
			footer={{
				children: ctaText ? (
					<Stack
						type={StackType.row}
						justifyContent={StackJustifyContent.flexEnd}
					>
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
