import React from 'react';
import {
	BorderRadiusTokens,
	ButtonTypeTokens,
	ColorTokens,
	IcebreakerCardProps,
	IconTokens,
	SizeTypeTokens,
	StackJustifyContent,
	StackType,
	TypographyTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import Button from '../button/Button';
import Space from '../space/Space';

const IcebreakerCard: React.FunctionComponent<
	IcebreakerCardProps & WidgetProps
> = ({
	title,
	subtitle,
	onPress,
	ctaText,
	gradient,
	bgColor = ColorTokens.Primary_50,
	action,
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
			gradient={gradient}
			bgColor={bgColor}
			borderRadius={BorderRadiusTokens.BR2}
			padding={{
				vertical: SizeTypeTokens.XL,
				horizontal: SizeTypeTokens.MD,
			}}
			header={{
				children: (
					<Stack>
						<Typography
							label={title}
							type={TypographyTypeTokens.SUBHEADING_XS}
							color={ColorTokens.Grey_500}
						/>
						<Space size={SizeTypeTokens.SM} />
						<Typography
							label={subtitle}
							type={TypographyTypeTokens.BODY_SM}
							numberOfLines={3}
						/>
						<Space
							size={
								ctaText
									? SizeTypeTokens.MD
									: SizeTypeTokens.NONE
							}
						/>
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
							type={ButtonTypeTokens.SmallFilled}
							icon={{ name: IconTokens.Chat }}
							bgColor={ColorTokens.Grey_50}
							labelColor={ColorTokens.Grey_800}
							label={ctaText}
							onPress={handleAction}
						/>
					</Stack>
				) : (
					<></>
				),
			}}
		/>
	);
};

export default React.memo(IcebreakerCard);
export { IcebreakerCard };
