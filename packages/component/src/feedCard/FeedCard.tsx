import React from 'react';
import {
	ColorTokens,
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

const FeedCard: React.FunctionComponent<
	FeedCardProps & WidgetProps
> = ({
	padding = {
		horizontal: SizeTypeTokens.NONE,
		bottom: SizeTypeTokens.MD,
	},
	margin = {
		bottom: SizeTypeTokens.XL,
	},
	user,
	imageURL,
	title,
	onPress,
	triggerAction,
	leftWidgets,
	rightWidgets,
	action,
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
			bgColor={ColorTokens.Transparent}
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
							vertical: SizeTypeTokens.LG,
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
				],
			}}
			footer={{
				children: (
					<Stack
						type={StackType.row}
						alignItems={StackAlignItems.center}
						justifyContent={
							StackJustifyContent.spaceBetween
						}
					>
						<Stack widgetItems={leftWidgets} />
						<Stack widgetItems={rightWidgets} />
					</Stack>
				),
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
