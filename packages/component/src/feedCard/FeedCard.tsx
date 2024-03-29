import React from 'react';
import {
	DividerSizeTokens,
	FeedCardProps,
	ImageSizeTokens,
	ResizeModeToken,
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
	leftWidgets = [],
	rightWidgets,
	action,
	renderItem,
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
			margin={margin}
			header={{
				children: (
					<UserCard
						padding={{
							horizontal: SizeTypeTokens.XL,
						}}
						{...user}
					/>
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
							resizeMode={ResizeModeToken.CONTAIN}
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
				children:
					leftWidgets?.length > 0 || rightWidgets ? (
						[
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
											<Stack
												type={StackType.row}
												alignItems={StackAlignItems.center}
												justifyContent={
													StackJustifyContent.flexStart
												}
											>
												{renderItem &&
													leftWidgets.length > 0 &&
													leftWidgets.map((widget) =>
														renderItem({ ...widget }),
													)}
											</Stack>
											{renderItem &&
												rightWidgets &&
												renderItem(rightWidgets)}
										</Stack>
									),
								}}
							/>,
							leftWidgets?.length > 0 || rightWidgets ? (
								<Divider
									size={DividerSizeTokens.SM}
									margin={{ vertical: SizeTypeTokens.MD }}
								/>
							) : (
								<></>
							),
						]
					) : (
						<></>
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
