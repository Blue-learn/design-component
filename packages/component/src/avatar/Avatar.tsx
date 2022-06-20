import React from 'react';
import { Image } from 'react-native';
import {
	AvatarProps,
	CornerRadiusTokens,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';

const Avatar: React.FC<AvatarProps> = ({
	size,
	uri,
	borderRadius = CornerRadiusTokens.BR4,
	borderWidth,
	borderColor,
}) => {
	const theme = ThemeProvider.getTheme();

	const sizeValue = theme.avatarSize[size];

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const borderColorValue =
		theme.colors[borderColor];

	if (!uri || !size) return <></>;

	return (
		<Image
			style={{
				height: sizeValue,
				width: sizeValue,
				borderRadius: borderRadiusValue,
				borderColor:
					borderColorValue || 'rgba(0, 0, 0, 0)',
				borderWidth,
			}}
			source={{
				uri,
			}}
		/>
	);
};

export default React.memo(Avatar);
export { Avatar };
