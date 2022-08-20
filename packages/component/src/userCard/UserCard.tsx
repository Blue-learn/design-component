import React from 'react';
import {
	ColorTokens,
	UserCardProps,
	SizeTypeTokens,
	TypographyTypeTokens,
	AvatarSizeTokens,
	StackAlignItems,
	StackType,
	IconTokens,
	IconSizeTokens,
	DividerSizeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';
import _map from 'lodash-es/map';
import Space from '../space/Space';
import Avatar from '../avatar/Avatar';
import Icon from '../icon/Icon';
import Divider from '../divider/Divider';

const UserCard: React.FunctionComponent<
	UserCardProps & WidgetProps
> = ({
	title,
	subtitle,
	avatar,
	location,
	onPress,
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
			onPress={handleAction}
			padding={{
				top: SizeTypeTokens.LG,
			}}
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
						<Stack>
							<Typography
								label={title}
								type={TypographyTypeTokens.S5}
							/>
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
									type={TypographyTypeTokens.B6}
									color={ColorTokens.Grey_200}
								/>
							)}
						</Stack>
					</Stack>
				),
			}}
			footer={{
				children: [
					<Space size={SizeTypeTokens.LG} />,
					<Divider size={DividerSizeTokens.SM} />,
				],
			}}
		/>
	);
};

export default React.memo(UserCard);
export { UserCard };
