import React, { memo } from 'react';
import {
	ButtonProps,
	ButtonSize,
	ButtonThemeProps,
	ButtonType,
	ButtonTypeTokens,
	ColorTokens,
	ColorTokensMap,
} from '@blue-learn/schema';
import { ButtonBase } from './Button.base';
import ThemeProvider from '@blue-learn/theme';

/**
 * Primary UI component for user interaction
 */

const Button: React.FunctionComponent<
	ButtonProps
> = ({ type, onPress = () => {}, ...props }) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	const theme = ThemeProvider.getTheme();
	const buttonThemeProps: ButtonThemeProps =
		theme.button[type];

	switch (type) {
		case ButtonTypeTokens.LargeFilled:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.MediumFilled:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.SmallFilled:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.IconFilled:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.LargeSoftFilled:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.MediumSoftFilled:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.SmallSoftFilled:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.IconSoftFilled:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.LargeOutline:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.MediumOutline:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.SmallOutline:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.IconOutline:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.LargeGhost:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.MediumGhost:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.SmallGhost:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.IconGhost:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.LargeGhost:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.MediumGhost:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.SmallGhost:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.IconGhost:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.LargeElevated:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.MediumElevated:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.SmallElevated:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		case ButtonTypeTokens.IconElevated:
			return (
				<ButtonBase
					{...buttonThemeProps}
					{...props}
				/>
			);
		// case ButtonTypeTokens.FloatingAction:
		// 	return (
		// 		<ButtonBase
		// 			size={ButtonSize.Small}
		// 			{...props}
		// 		/>
		// 	);
		// case ButtonTypeTokens.IconElevated:
		// 	return (
		// 		<ButtonBase
		// 			type={ButtonType.Elevated}
		// 			size={ButtonSize.IconOnly}
		// 			{...props}
		// 		/>
		// 	);
		default:
			return <></>;
	}
};

export default memo(Button);
export { Button };
