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
} from '@blue-learn/schema';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import _map from 'lodash-es/map';
import Button from '../button/Button';
import Space from '../space/Space';

const IcebreakerCard: React.FunctionComponent<
	IcebreakerCardProps
> = ({
	title,
	subtitle,
	onPress,
	ctaText,
	gradient,
	bgColor = ColorTokens.Grey_600,
}) => {
	if (!title) return <></>;

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
						<Space size={SizeTypeTokens.MD} />
					</Stack>
				),
			}}
			footer={{
				children: (
					<Stack
						type={StackType.row}
						justifyContent={StackJustifyContent.flexEnd}
					>
						<Button
							type={ButtonTypeTokens.SmallElevated}
							icon={{ name: IconTokens.Chat }}
							label={ctaText}
							onPress={onPress}
						/>
					</Stack>
				),
			}}
		/>
	);
};

export default React.memo(IcebreakerCard);
export { IcebreakerCard };
