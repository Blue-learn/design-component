import React, { memo } from 'react';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokens,
	IconProps,
	IconSizeTokens,
} from '@blue-learn/schema';
import { iconTokensMap } from './IconRegistry';

const Icon: React.FunctionComponent<
	IconProps
> = ({
	name,
	size = IconSizeTokens.LG,
	color = ColorTokens.Grey_800,
}) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	const theme = ThemeProvider.getTheme();

	const Icon = iconTokensMap[name];

	const icon_size = theme.iconSize[size];

	const icon_color = theme.colors[color];

	if (!name) return <></>;

	return (
		<Icon size={icon_size} color={icon_color} />
	);
};

export default memo(Icon);
export { Icon };
