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
import _map from 'lodash-es/map';
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
	bgColor = ColorTokens.Grey_600,
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
							type={TypographyTypeTokens.S6}
							color={ColorTokens.Grey_200}
						/>
						<Space size={SizeTypeTokens.SM} />
						<Typography label={subtitle} />
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
							type={ButtonTypeTokens.SmallOutline}
							icon={{ name: IconTokens.Chat }}
							labelColor={ColorTokens.Grey_50}
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
