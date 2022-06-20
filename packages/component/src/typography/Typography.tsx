import {
	TypographyProps,
	TypographyThemeProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import { TypographyBase } from './Typography.base';
import ThemeProvider from '@blue-learn/theme';

/**
 * Primary UI component for user interaction
 */

const Typography: React.FunctionComponent<
	TypographyProps
> = ({ type, ...props }) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	const theme = ThemeProvider.getTheme();
	const typographyThemeProps: TypographyThemeProps =
		theme.typography[type];

	return (
		<TypographyBase
			{...typographyThemeProps}
			{...props}
		/>
	);
};

export default memo(Typography);
export { Typography };
