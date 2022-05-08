import React from 'react';
import { View, Text } from 'react-native';
import ChatIcon from './icon-list/Chat';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokens,
	IconProps,
} from '@blue-learn/schema';
import { memo } from 'react';

const Icon: React.FunctionComponent<
	IconProps
> = ({
	name = 'chat',
	size = 24,
	color = ColorTokens.Black,
}) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	const theme = ThemeProvider.getTheme();

	const Icon = theme.icon[name];

	return <Icon size={size} color={color} />;
};

export default memo(Icon);
export { Icon };
