import {
	ChipBaseProps,
	FontFamilyTokens,
	IconAlignmentTokens,
	ImageSizeTokens,
	SizeTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import {
	Pressable,
	Platform,
} from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import Typography from '../typography/Typography';
import Icon from '../icon/Icon';
import Space from '../space/Space';
import { Image } from '../image/Image';

const Chip: React.FC<
	ChipBaseProps & WidgetProps
> = ({
	label = 'Chip',
	borderColor,
	labelColor,
	fontSize,
	borderRadius,
	icon,
	image,
	padding,
	margin,
	onPress,
	action,
	triggerAction,
}) => {
	const theme = ThemeProvider.getTheme();

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const borderColorValue =
		theme.colors[borderColor];

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

	const marginRight = theme.space[margin?.right];
	const marginBottom = theme.space[margin?.bottom];

	const handleAction = () => {
		onPress && onPress();
		action &&
			triggerAction &&
			triggerAction(action);
	};

	const widthProps = React.useMemo(
		() =>
			Platform.OS === 'web'
				? {
						width: 'fit-content',
						marginRight,
						marginBottom,
				  }
				: {
						alignSelf: 'flex-start',
						marginRight,
						marginBottom,
				  },
		[],
	);

	return (
		<Pressable
			style={[
				{
					flexDirection: 'row',
					alignItems: 'center',
					borderColor: borderColorValue,
					borderRadius: borderRadiusValue,
					borderWidth: 1,
					paddingTop: paddingTop,
					paddingBottom: paddingBottom,
					paddingLeft: paddingLeft,
					paddingRight: paddingRight,
				},
				widthProps,
			]}
			onPress={handleAction}
		>
			{icon?.align === IconAlignmentTokens.left &&
				icon?.name && (
					<>
						<Icon
							{...icon}
							color={icon?.color || labelColor}
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
				color={labelColor}
			/>
			{icon?.align === IconAlignmentTokens.right &&
				icon?.name && (
					<>
						{label && (
							<Space size={SizeTypeTokens.SM} />
						)}
						<Icon
							{...icon}
							color={icon?.color || labelColor}
						/>
					</>
				)}
		</Pressable>
	);
};

export default memo(Chip);
export { Chip };
