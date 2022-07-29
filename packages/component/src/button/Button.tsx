import React, { memo } from 'react';
import {
	ButtonProps,
	ButtonThemeProps,
	ButtonTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import { ButtonBase } from './Button.base';
import ThemeProvider from '@blue-learn/theme';
import noop from 'lodash-es/noop'

/**
 * Primary UI component for user interaction
 */

const Button: React.FunctionComponent<
	ButtonProps & WidgetProps
> = ({
	type = ButtonTypeTokens.LargeFilled,
	onPress = noop(),
	...props
}) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	const theme = ThemeProvider.getTheme();
	const buttonThemeProps: ButtonThemeProps =
		theme.button[type];

	return (
		<ButtonBase
			onPress={onPress}
			{...buttonThemeProps}
			{...props}
		/>
	);
};

export default memo(Button);
export { Button };
