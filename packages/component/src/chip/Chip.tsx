import React, { memo } from 'react';
import {
	ChipProps,
	ChipThemeProps,
	ChipTypeTokens,
} from '@blue-learn/schema';
import ChipBase from './Chip.base';
import ThemeProvider from '@blue-learn/theme';

/**
 * Primary UI component for user interaction
 */

const Chip: React.FunctionComponent<
	ChipProps
> = ({
	type = ChipTypeTokens.SMALL_UNSELECTED,
	...props
}) => {
	/**
	 *  logic -> base-component(...props)
	 * */

	const theme = ThemeProvider.getTheme();
	const chipThemeProps: ChipThemeProps =
		theme.chip[type];

	return (
		<ChipBase {...props} {...chipThemeProps} />
	);
};

export default memo(Chip);
export { Chip };
