import {
	ChipBaseProps,
	ChipHighlightTokens,
	ColorTokens,
	FontFamilyTokens,
	FontSizeTokens,
	IconAlignmentTokens,
	ImageSizeTokens,
	SizeTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import React, { memo, useState } from 'react';
import {
	Platform,
	Pressable,
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
	label,
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
	highlight,
}) => {
	const theme = ThemeProvider.getTheme();

	const [layout, setLayout] = useState<{
		width: number;
		height: number;
	}>({
		width: 0,
		height: 0,
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

	if (!label) return <></>;
	else
		return (
			<Pressable
				onLayout={(data) => {
					setLayout({
						width: data.nativeEvent.layout.width,
						height: data.nativeEvent.layout.height,
					});
				}}
				style={[
					{
						flexDirection: 'row',
						alignItems: 'center',
						borderColor:
							theme.colors[ColorTokens.Primary_500],
						backgroundColor: borderColorValue,
						borderRadius: borderRadiusValue,
						borderWidth:
							highlight ===
							ChipHighlightTokens.HIGHLIGHTED
								? 1
								: 0,
						paddingTop: paddingTop,
						paddingBottom: paddingBottom,
						paddingLeft: paddingLeft,
						paddingRight: paddingRight,
						height:
							fontSize === FontSizeTokens.XS ? 24 : 36,
					},
					widthProps,
				]}
				onPress={handleAction}
			>
				{factor > 0 && factor <= 1 && (
					<View
						style={{
							borderRadius:
								factor > 0.85 ? borderRadiusValue : 0,
							borderTopLeftRadius: borderRadiusValue,
							borderBottomLeftRadius: borderRadiusValue,
							position: 'absolute',
							backgroundColor:
								theme.colors[ColorTokens.Primary_100],
							width:
								factor >= 1
									? layout.width
									: factor > 0.19
									? factor * layout.width
									: 0.19 * layout.width,
							height: layout.height,
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
							label && (
								<Space
									size={
										image?.size === ImageSizeTokens.XXXS
											? SizeTypeTokens.SM
											: SizeTypeTokens.MD
									}
								/>
							),
					  ]
					: null}
				<View style={{ zIndex: 2 }}>
					<Typography
						label={label}
						fontSize={fontSize}
						fontFamily={FontFamilyTokens.InterSemiBold}
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
