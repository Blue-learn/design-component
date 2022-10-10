import {
	ChipBaseProps,
	ColorTokens,
	FontFamilyTokens,
	IconAlignmentTokens,
	ImageSizeTokens,
	SizeTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import React, { memo, useState } from 'react';
import {
	Pressable,
	Platform,
	View,
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
	factor,
}) => {
	const theme = ThemeProvider.getTheme();

	const [layout, setLayout] = useState<{
		width: number;
	}>({
		width: 0,
	});

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
			onLayout={(data) => {
				setLayout({
					width: data.nativeEvent.layout.width,
				});
			}}
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
			{factor > 0 && (
				<View
					style={{
						borderTopLeftRadius: borderRadiusValue,
						borderBottomLeftRadius: borderRadiusValue,
						position: 'absolute',
						backgroundColor:
							theme.colors[ColorTokens.Blue_800],
						width: factor * layout.width,
						height: '100%',
						top: 0,
						left: 0,
					}}
				/>
			)}
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
						label && <Space size={SizeTypeTokens.SM} />,
				  ]
				: null}
			<View style={{ zIndex: 2 }}>
				<Typography
					label={label}
					fontSize={fontSize}
					fontFamily={FontFamilyTokens.manropeSemiBold}
					color={labelColor}
				/>
			</View>

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
