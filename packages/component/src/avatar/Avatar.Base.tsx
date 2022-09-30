import React from 'react';
import {
	ActiveStateTokens,
	AvatarBaseProps,
	BorderRadiusTokens,
	ColorTokens,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';
import { Image, View } from 'react-native';

const AvatarBase: React.FC<AvatarBaseProps> = ({
	size,
	uri,
	borderRadius = BorderRadiusTokens.BR4,
	borderWidth,
	borderColor,
	overlap = false,
	active,
}) => {
	const theme = ThemeProvider.getTheme();

	const sizeValue = theme.avatarSize[size];

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const borderColorValue =
		theme.colors[borderColor];

	if (!uri || !size) return <></>;

	const styleProps = React.useMemo(
		() => ({
			height: sizeValue,
			width: sizeValue,
			borderRadius: borderRadiusValue,
			borderColor: borderColorValue,
			borderWidth,
			marginLeft: overlap ? -(sizeValue / 4) : 0,
		}),
		[
			sizeValue,
			borderColorValue,
			borderColor,
			borderWidth,
			overlap,
			borderRadius,
		],
	);

	const activeStyleProps = React.useMemo(
		() => ({
			position: 'absolute',
			left: sizeValue / 2 + sizeValue / 4,
			top: sizeValue / 2 + sizeValue / 8,
			width: sizeValue / 4,
			height: sizeValue / 4,
			borderRadius: sizeValue / 8,
			borderWidth: 2,
			borderColor: borderColorValue,
			backgroundColor:
				theme.colors[ColorTokens.Success_100],
		}),
		[sizeValue, borderColor],
	);

	return (
		<>
			<Image
				referrerPolicy='no-referrer'
				style={styleProps}
				source={{ uri }}
			/>
			{active &&
				active === ActiveStateTokens.ACTIVE && (
					<View style={activeStyleProps} />
				)}
		</>
	);
};

export default React.memo(AvatarBase);
export { AvatarBase };
