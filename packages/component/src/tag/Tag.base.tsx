import {
	FontFamilyTokens,
	SizeTypeTokens,
	IconAlignmentTokens,
	TagBaseProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import { View, Platform } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import Typography from '../typography/Typography';
import Icon from '../icon/Icon';
import Space from '../space/Space';

const TagBase: React.FC<TagBaseProps> = ({
	label = 'Tag',
	bgColor,
	labelColor,
	borderRadius,
	fontSize,
	icon,
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

	const styleProps = React.useMemo(
		() => ({
			flexDirection: 'row',
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
				? { width: 'fit-content' }
				: { alignSelf: 'flex-start' },
		[],
	);

	return (
		<View style={[styleProps, widthProps]}>
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
				color={labelColor}
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

export default memo(TagBase);
export { TagBase };
