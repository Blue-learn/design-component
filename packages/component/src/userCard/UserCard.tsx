import React from 'react';
import {
	AvatarSizeTokens,
	ColorTokens,
	DividerSizeTokens,
	FontTransformToken,
	IconSizeTokens,
	IconTokens,
	SizeTypeTokens,
	StackAlignItems,
	StackJustifyContent,
	StackType,
	TypographyTypeTokens,
	UserCardProps,
	WidgetProps,
} from '@blue-learn/schema';
import { View } from 'react-native';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import Space from '../space/Space';
import Avatar from '../avatar/Avatar';
import Icon from '../icon/Icon';
import Divider from '../divider/Divider';

const UserCard: React.FunctionComponent<
	UserCardProps & WidgetProps
> = ({
	title,
	title_secondary,
	subtitle,
	avatar,
	location,
	onPress,
	action,
	padding = { top: SizeTypeTokens.LG },
	triggerAction,
}) => {
	// if (!title) return <></>;

	const handleAction = () => {
		onPress && onPress();
		action &&
			triggerAction &&
			triggerAction(action);
	};

	return (
		<Card
			onPress={handleAction}
			padding={padding}
			header={{
				children: (
					<Stack
						type={StackType.row}
						alignItems={StackAlignItems.center}
					>
						<Avatar
							uri={avatar}
							size={AvatarSizeTokens.MD}
						/>
						<Space size={SizeTypeTokens.MD} />
						<View
							style={{
								flex: 1,
							}}
						>
							<Stack
								type={StackType.row}
								alignItems={StackAlignItems.center}
								justifyContent={
									StackJustifyContent.spaceBetween
								}
							>
								<View style={{ flex: 1 }}>
									<Typography
										label={title}
										numberOfLines={1}
										textTransform={
											FontTransformToken.capitalize
										}
										type={TypographyTypeTokens.S5}
									/>
								</View>
								{title_secondary ? (
									<Typography
										label={title_secondary}
										type={TypographyTypeTokens.B7}
										color={ColorTokens.Grey_200}
									/>
								) : (
									<></>
								)}
							</Stack>
							<Space size={SizeTypeTokens.SM} />
							{location ? (
								<Stack
									type={StackType.row}
									alignItems={StackAlignItems.center}
								>
									<Icon
										name={IconTokens.LocationPin}
										size={IconSizeTokens.XS}
										color={ColorTokens.Grey_200}
									/>
									<Space size={SizeTypeTokens.SM} />
									<Typography
										label={location}
										type={TypographyTypeTokens.B6}
										color={ColorTokens.Grey_200}
									/>
								</Stack>
							) : (
								<Typography
									label={subtitle}
									numberOfLines={1}
									type={TypographyTypeTokens.B6}
									color={ColorTokens.Grey_200}
								/>
							)}
						</View>
					</Stack>
				),
			}}
			footer={{
				children: !title_secondary ? (
					[
						<Space size={SizeTypeTokens.LG} />,
						<Divider size={DividerSizeTokens.SM} />,
					]
				) : (
					<></>
				),
			}}
		/>
	);
};

export default React.memo(UserCard);
export { UserCard };
