import {
	ColorTokensMap,
	TopBarProps,
	topBarThemeProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import TopBarBase from './TopBar.base';
import ThemeProvider from '@blue-learn/theme';

/**
 * Primary UI component for user interaction
 */

const TopBar: React.FunctionComponent<
	TopBarProps
> = ({ topBarType, ...props }) => {
	const theme = ThemeProvider.getTheme();
	const colorMapping: ColorTokensMap =
		theme.colors;
	const topBarThemeProps: topBarThemeProps =
		theme.topBar[topBarType];
	/**
	 *  logic -> base-component(...props)
	 * */
	return (
		<TopBarBase {...topBarThemeProps} {...props} />
	);
};

export default memo(TopBar);
export { TopBar };
