import React, { memo } from 'react';
import {
	avatarSizeTokens,
	FontFamilyTokens,
	FontSizeTokens,
	ListItemProps,
	StackAlignItems,
	StackJustifyContent,
	StackType,
	WidgetProps,
} from '@blue-learn/schema';
import Card from '../card/Card';
import Stack from '../stack/Stack';
import Space from '../space/Space';
import Avatar from '../avatar/Avatar';
import Typography from '../typography/Typography';
/**
 * Primary UI component for user interaction
 */

const ListItem: React.FunctionComponent<
	ListItemProps
> = ({
	avatarUri,
	avatarSize,
	title,
	subtitle,
	rightCta = <></>,
	highlighted,
	onPress,
}) => {
	const children = (
		<Stack
			type={StackType.row}
			justifyContent={
				StackJustifyContent.spaceBetween
			}
			alignItems={StackAlignItems.center}
		>
			<Stack
				type={StackType.row}
				alignItems={StackAlignItems.center}
			>
				<Avatar size={avatarSize} uri={avatarUri} />
				<Space size={12} />
				<Stack>
					<Typography
						label={title}
						fontSize={FontSizeTokens.md}
						fontFamily={
							highlighted
								? FontFamilyTokens.manropeSemiBold
								: FontFamilyTokens.manropeRegular
						}
					/>
					<Typography
						label={subtitle}
						fontSize={FontSizeTokens.xs}
						fontFamily={
							highlighted
								? FontFamilyTokens.manropeSemiBold
								: FontFamilyTokens.manropeRegular
						}
					/>
				</Stack>
				<Stack>{rightCta}</Stack>
			</Stack>
		</Stack>
	);

	return (
		<Card
			onPress={onPress}
			body={{ children: children }}
		/>
	);
};

export default memo(ListItem);
export { ListItem };
