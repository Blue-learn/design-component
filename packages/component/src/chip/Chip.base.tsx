import {
	ChipItemProps,
	ColorTokens,
	BorderRadiusTokens,
	FontFamilyTokens,
	FontSizeTokens,
	IconTokens,
	SizeTypeTokens,
	IconAlignmentTokens,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import { View } from 'react-native';
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
const Chip: React.FC<ChipItemProps> = ({
	label = 'Chip',
	bgColor = ColorTokens.Grey_600,
	labelColor = ColorTokens.Grey_100,
	fontSize = FontSizeTokens.XXS,
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

	const backgroundColor = theme.colors[bgColor];

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
						{label && <Space size={4} />}
					</>
				)}
			<Typography
				label={label}
				fontSize={fontSize}
				fontFamily={FontFamilyTokens.manropeSemiBold}
				color={labelColor}
			/>
			{icon?.align === IconAlignmentTokens.right &&
				icon?.name && (
					<>
						{label && <Space size={4} />}
						<Icon {...icon} />
					</>
				)}
		</View>
	);
};

export default memo(Chip);
export { Chip };
