import React, { memo } from 'react';
import {
	ProgressIndicatorProps,
	ProgressIndicatorThemeProps,
	ProgressIndicatorTypeTokens,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';
import { ProgressIndicatorBase } from './ProgessIndicator.base';

const ProgressIndicator: React.FunctionComponent<
	ProgressIndicatorProps
> = ({ type, ...props }) => {
	/**
	 *  logic -> base-component(...props)
	 * */

	const theme = ThemeProvider.getTheme();
	const progressIndicatorThemeProps: ProgressIndicatorThemeProps =
		theme.progressIndicator[
			type || ProgressIndicatorTypeTokens.default
		];

	return (
		<ProgressIndicatorBase
			{...progressIndicatorThemeProps}
			{...props}
		/>
	);
};

export default memo(ProgressIndicator);
export { ProgressIndicator };
