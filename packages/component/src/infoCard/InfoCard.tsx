import React from 'react';
import {
	BorderRadiusTokens,
	ButtonTypeTokens,
	ColorTokens,
	IconSizeTokens,
	IconTokens,
	InfoCardProps,
	SizeTypeTokens,
	TypographyTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import { View } from 'react-native';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import Space from '../space/Space';
import { Button } from '../button/Button';

const InfoCard: React.FunctionComponent<
	InfoCardProps & WidgetProps
> = ({
	title,
	subtitle,
	onPress,
	bgColor = ColorTokens.Secondary_50,
	action,
	triggerAction,
}) => {
	const handleAction = () => {
		onPress && onPress();
		action &&
			triggerAction &&
			triggerAction(action);
	};

	return (
		<Card
			bgColor={bgColor}
			borderRadius={BorderRadiusTokens.BR2}
			padding={{
				vertical: SizeTypeTokens.XL,
				horizontal: SizeTypeTokens.XL,
			}}
			header={{
				children: (
					<Stack>
						{title ? (
							<View
								style={{
									width: '100%',
									alignItems: 'center',
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}
							>
								<Typography
									label={title}
									type={TypographyTypeTokens.HEADING_SM}
								/>
								{onPress && (
									<Button
										icon={{
											name: IconTokens.Cross,
											size: IconSizeTokens.LG,
										}}
										type={ButtonTypeTokens.IconGhost}
										labelColor={ColorTokens.Grey_800}
										onPress={handleAction}
									/>
								)}
							</View>
						) : (
							<></>
						)}
						<Space
							size={
								title
									? SizeTypeTokens.LG
									: SizeTypeTokens.NONE
							}
						/>
						<Typography
							label={subtitle}
							type={
								TypographyTypeTokens.BODY_XS_SECONDARY
							}
						/>
					</Stack>
				),
			}}
		/>
	);
};

export default React.memo(InfoCard);
export { InfoCard };
