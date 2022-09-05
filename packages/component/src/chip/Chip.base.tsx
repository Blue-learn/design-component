import {
	BorderRadiusTokens,
	ChipItemProps,
	ChipStateTokens,
	ColorTokens,
	FontFamilyTokens,
	FontSizeTokens,
	IconAlignmentTokens,
	IconTokens,
	SizeTypeTokens,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import { View } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import Typography from '../typography/Typography';
import Icon from '../icon/Icon';
import Space from '../space/Space';

/**
 * @description
 * Stack supports children as React Component and widgetItems as WidgetItem Type[order by children -> widgetItems]
 * Note: renderItem should be passed to render WidgetItem
 **/
const Chip: React.FC<ChipItemProps> = ({
	label = 'Chip',
	bgColor = ColorTokens.Grey_600,
	labelColor = ColorTokens.Grey_100,
	fontSize = FontSizeTokens.XS,
	state = ChipStateTokens.DEFAULT,
	borderRadius = BorderRadiusTokens.BR4,
	icon = {
		name: IconTokens.Sparkling,
		align: IconAlignmentTokens.left,
	},
	padding = {
		horizontal: SizeTypeTokens.MD,
		vertical: SizeTypeTokens.SM,
	},
}) => {
	const theme = ThemeProvider.getTheme();

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const backgroundColor =
		state === ChipStateTokens.DEFAULT
			? theme.colors[bgColor]
			: theme.colors[ColorTokens.Blue_300];

	const paddingTop =
		theme.space[padding?.vertical || padding?.top];

	const paddingBottom =
		theme.space[
			padding?.vertical || padding?.bottom
		];

	const paddingLeft =
		theme.space[
			padding?.horizontal || padding?.left
		];

	const paddingRight =
		theme.space[
			padding?.horizontal || padding?.right
		];

	return (
		<View
			style={{
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
			{icon?.align === IconAlignmentTokens.left &&
				icon?.name && (
					<>
						<Icon {...icon} />
						{label && (
							<Space size={SizeTypeTokens.SM} />
						)}
					</>
				)}
			<Typography
				label={label}
				fontSize={fontSize}
				fontFamily={FontFamilyTokens.manropeSemiBold}
				color={
					state === ChipStateTokens.DEFAULT
						? labelColor
						: ColorTokens.Grey_500
				}
			/>
			{icon?.align === IconAlignmentTokens.right &&
				icon?.name && (
					<>
						{label && (
							<Space size={SizeTypeTokens.SM} />
						)}
						<Icon {...icon} />
					</>
				)}
		</View>
	);
};

export default memo(Chip);
export { Chip };
