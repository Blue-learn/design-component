import React from 'react';
import {
	AvatarBaseProps,
	BorderRadiusTokens,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';
import { Image } from 'react-native';

const AvatarBase: React.FC<AvatarBaseProps> = ({
	size,
	uri,
	borderRadius = BorderRadiusTokens.BR4,
	borderWidth,
	borderColor,
	overlap = false,
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
		],
	);

	return <Image style={styleProps} source={uri} />;
};

export default React.memo(AvatarBase);
export { AvatarBase };
