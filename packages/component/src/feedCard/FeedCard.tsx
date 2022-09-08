import React from 'react';
import {
	DividerSizeTokens,
	FeedCardProps,
	ImageSizeTokens,
	SizeTypeTokens,
	StackAlignItems,
	StackJustifyContent,
	StackType,
	WidgetProps,
} from '@blue-learn/schema';
import Card from '../card/Card';
import Image from '../image/Image';
import { UserCard } from '../userCard/UserCard';
import { Typography } from '../typography/Typography';
import { Stack } from '../stack/Stack';
import { Divider } from '../divider/Divider';
import { Space } from '../space/Space';

const FeedCard: React.FunctionComponent<
	FeedCardProps & WidgetProps
> = ({
	padding = {
		horizontal: SizeTypeTokens.NONE,
		bottom: SizeTypeTokens.MD,
	},
	margin = {
		top: SizeTypeTokens.XL,
	},
	user,
	imageURL,
	title,
	onPress,
	triggerAction,
	leftWidgets,
	rightWidgets,
	action,
	renderItem,
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
			padding={padding}
			margin={margin}
			header={{
				children: user?.title ? (
					<UserCard
						padding={{
							horizontal: SizeTypeTokens.XL,
						}}
						{...user}
					/>
				) : (
					<></>
				),
			}}
			body={{
				children: [
					<Card
						padding={{
							top: SizeTypeTokens.LG,
							bottom: SizeTypeTokens.MD,
							horizontal: SizeTypeTokens.XL,
						}}
						body={{
							children: <Typography label={title} />,
						}}
					/>,
					imageURL ? (
						<Image
							uri={imageURL}
							size={ImageSizeTokens.FULL}
						/>
					) : (
						<></>
					),
					<Space
						size={
							imageURL
								? SizeTypeTokens.MD
								: SizeTypeTokens.NONE
						}
					/>,
				],
			}}
			footer={{
				children: [
					<Card
						padding={{
							vertical: SizeTypeTokens.MD,
							horizontal: SizeTypeTokens.XL,
						}}
						body={{
							children: (
								<Stack
									type={StackType.row}
									alignItems={StackAlignItems.center}
									justifyContent={
										StackJustifyContent.spaceBetween
									}
								>
									{renderItem &&
										leftWidgets &&
										renderItem(leftWidgets)}
									{renderItem &&
										leftWidgets &&
										renderItem(rightWidgets)}
								</Stack>
							),
						}}
					/>,
					<Divider
						size={DividerSizeTokens.SM}
						margin={{ vertical: SizeTypeTokens.MD }}
					/>,
				],
			}}
		/>
	);
};

export default React.memo(
	FeedCard,
	(prevProps, nextProps) => {
		return prevProps === nextProps;
	},
);
export { FeedCard };
