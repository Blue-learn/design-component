import {
	FontFamilyTokens,
	IconAlignmentTokens,
	ImageSizeTokens,
	SizeTypeTokens,
	TagBaseProps,
} from '@blue-learn/schema';
import React, { memo, useMemo } from 'react';
import { Platform, View } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import Typography from '../typography/Typography';
import Icon from '../icon/Icon';
import Space from '../space/Space';
import Gradient from '../gradient/Gradient';
import { Image } from '../image/Image';

const TagBase: React.FC<TagBaseProps> = ({
	label = 'Tag',
	gradientColor,
	bgColor,
	labelColor,
	borderRadius,
	fontSize,
	icon,
	padding = {
		horizontal: SizeTypeTokens.MD,
		vertical: SizeTypeTokens.SM,
	},
	margin,
	image,
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

	const marginRight = theme.space[margin?.right];
	const marginBottom = theme.space[margin?.bottom];

	const styleProps = React.useMemo(
		() => ({
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: backgroundColor,
			borderRadius: borderRadiusValue,
			paddingTop: paddingTop,
			paddingBottom: paddingBottom,
			paddingLeft: paddingLeft,
			paddingRight: paddingRight,
		}),
		[backgroundColor, padding, borderRadiusValue],
	);

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

	const children = useMemo(
		() => (
			<View style={[styleProps]}>
				{icon?.align === IconAlignmentTokens.left &&
					icon?.name && (
						<>
							<Icon {...icon} />
							{label && [
								<Space size={SizeTypeTokens.SM} />,
								<Space size={SizeTypeTokens.XS} />,
							]}
						</>
					)}
				{image && image?.uri
					? [
							<Image
								size={image?.size || ImageSizeTokens.XXXS}
								{...image}
							/>,
							label && [
								<Space size={SizeTypeTokens.SM} />,
								<Space size={SizeTypeTokens.XS} />,
							],
					  ]
					: null}
				<Typography
					label={label}
					fontSize={fontSize}
					fontFamily={FontFamilyTokens.InterMedium}
					color={labelColor}
				/>
				{icon?.align === IconAlignmentTokens.right &&
					icon?.name && (
						<>
							{label && [
								<Space size={SizeTypeTokens.SM} />,
								<Space size={SizeTypeTokens.XS} />,
							]}
							<Icon {...icon} />
						</>
					)}
			</View>
		),
		[label, icon, backgroundColor],
	);

	if (!label) return null;
	else
		return gradientColor ? (
			<Gradient
				colors={gradientColor}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
				style={[
					widthProps,
					{
						borderRadius: borderRadiusValue,
					},
				]}
			>
				{children}
			</Gradient>
		) : (
			<View style={widthProps}>{children}</View>
		);
};

export default memo(TagBase);
export { TagBase };
