import {
	ChipProps,
	ColorTokens,
	CornerRadiusTokens,
	FontFamilyTokens,
	FontSizeTokens,
	IconSizeTokens,
	IconTokens,
	SpaceTypeTokens,
	StackAlignType,
	StackType,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import { View, Text } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import Typography from '../typography/Typography';
import Icon from '../icon/Icon';
import Space from '../space/Space';
import Stack from '../stack/Stack';

/**
 * @description
 * Stack supports children as React Component and widgetItems as WidgetItem Type[order by children -> widgetItems]
 * Note: renderItem should be passed to render WidgetItem
 **/
const Chip: React.FC<ChipProps> = ({
	label = 'Chip',
	bgColor,
	labelColor = ColorTokens.Grey_100,
	fontSize = FontSizeTokens['2xs'],
	borderRadius = CornerRadiusTokens.BR4,
	iconAlignment = 'left',
	icon,
	padding,
	paddingHorizontal = SpaceTypeTokens.MD,
	paddingVertical = SpaceTypeTokens.SM,
}) => {
	const theme = ThemeProvider.getTheme();

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const backgroundColor = theme.colors[bgColor];

	const paddingTop =
		theme.space[paddingVertical || padding?.top];

	const paddingBottom =
		theme.space[paddingVertical || padding?.bottom];

	const paddingLeft =
		theme.space[paddingHorizontal || padding?.left];

	const paddingRight =
		theme.space[
			paddingHorizontal || padding?.right
		];

	return (
		<Stack>
			<View
				style={{
					alignSelf: 'flex-start',
					flexDirection: 'row',
					alignItems: 'center',
					backgroundColor: backgroundColor,
					borderRadius: borderRadiusValue,
					paddingTop: paddingTop,
					paddingBottom: paddingBottom,
					paddingLeft: paddingLeft,
					paddingRight: paddingRight,
				}}
			>
				{iconAlignment === 'left' && icon?.name && (
					<>
						<Icon {...icon} />
						{label && <Space size={4} />}
					</>
				)}
				<Typography
					label={label}
					fontSize={fontSize}
					fontFamily={FontFamilyTokens.manropeSemiBold}
					color={labelColor}
				/>
				{iconAlignment === 'right' && icon?.name && (
					<>
						{label && <Space size={4} />}
						<Icon {...icon} />
					</>
				)}
			</View>
		</Stack>
	);
};

export default memo(Chip);
export { Chip };
