import React from 'react';
import { View, Text } from 'react-native';
import ChatIcon from './icon-list/Chat';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokens,
	IconProps,
	IconSizeTokens,
} from '@blue-learn/schema';
import { memo } from 'react';

const Icon: React.FunctionComponent<
	IconProps
> = ({
	name,
	size = IconSizeTokens['2xl'],
	color = ColorTokens.Black,
}) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	const theme = ThemeProvider.getTheme();

	const Icon = theme.icon[name];

	const icon_size = theme.iconSize[size];

	const icon_color = theme.colors[color];

	if (!name) return <></>;

	return (
		<Icon size={icon_size} color={icon_color} />
	);
};

export default memo(Icon);
export { Icon };
