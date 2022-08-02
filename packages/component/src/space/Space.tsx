import React from 'react';
import { memo } from 'react';
import { View } from 'react-native';
import {
	SizeTypeTokens,
	SpaceProps,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';

const Space: React.FunctionComponent<
	SpaceProps
> = ({ size = SizeTypeTokens.XS }) => {
	const theme = ThemeProvider.getTheme();
	const sizeValue = theme.space[size];
	return (
		<View
			style={{
				width: sizeValue,
				height: sizeValue,
			}}
		/>
	);
};

export default memo(Space);
export { Space };
