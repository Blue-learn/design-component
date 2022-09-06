import {
	BorderRadiusTokens,
	ChipItemProps,
	ChipStateTokens,
	ColorTokens,
	FontFamilyTokens,
	FontSizeTokens,
	IconAlignmentTokens,
	ImageSizeTokens,
	SizeTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import { Pressable } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import Typography from '../typography/Typography';
import Icon from '../icon/Icon';
import Space from '../space/Space';
import { Image } from '../image/Image';

/**
 * @description
 * Stack supports children as React Component and widgetItems as WidgetItem Type[order by children -> widgetItems]
 * Note: renderItem should be passed to render WidgetItem
 **/
const Chip: React.FC<
	ChipItemProps & WidgetProps
> = ({
	label = 'Chip',
	bgColor = ColorTokens.Grey_600,
	labelColor = ColorTokens.Grey_100,
	fontSize = FontSizeTokens.XS,
	state = ChipStateTokens.DEFAULT,
	borderRadius = BorderRadiusTokens.BR4,
	icon,
	image,
	padding = {
		horizontal: SizeTypeTokens.MD,
		vertical: SizeTypeTokens.SM,
	},
	onPress,
	action,
	triggerAction,
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

	const labelColorValue =
		state === ChipStateTokens.DEFAULT
			? labelColor
			: ColorTokens.Grey_500;

	const handleAction = () => {
		onPress && onPress();
		action &&
			triggerAction &&
			triggerAction(action);
	};

	return (
		<Pressable
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
			onPress={handleAction}
		>
			{icon?.align === IconAlignmentTokens.left &&
				icon?.name && (
					<>
						<Icon
							{...icon}
							color={icon?.color || labelColorValue}
						/>
						{label && (
							<Space size={SizeTypeTokens.SM} />
						)}
					</>
				)}

			{image && image?.uri
				? [
						<Image
							size={image?.size || ImageSizeTokens.XXS}
							{...image}
						/>,
						<Space size={SizeTypeTokens.SM} />,
				  ]
				: null}

			<Typography
				label={label}
				fontSize={fontSize}
				fontFamily={FontFamilyTokens.manropeSemiBold}
				color={labelColorValue}
			/>
			{icon?.align === IconAlignmentTokens.right &&
				icon?.name && (
					<>
						{label && (
							<Space size={SizeTypeTokens.SM} />
						)}
						<Icon
							{...icon}
							color={icon?.color || labelColorValue}
						/>
					</>
				)}
		</Pressable>
	);
};

export default memo(Chip);
export { Chip };
