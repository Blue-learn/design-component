import React, { memo } from 'react';
import {
	CardProps, CardThemeProps,
} from '@blue-learn/schema';
import { CardBase } from './Card.base';
import ThemeProvider from '@blue-learn/theme';

/**
 * Primary UI component for user interaction
 */

const Card: React.FunctionComponent<
	CardProps
> = ({ type, onButtonPress = () => {}, ...props }) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	const theme = ThemeProvider.getTheme();
	const cardThemeProps: CardThemeProps =
		theme.card[type];

	return (
		<CardBase {...cardThemeProps} {...props} />
	);
};

export default memo(Card);
export { Card };
