import React, { memo } from 'react';
import {
	ButtonProps,
	ButtonSize,
	ButtonThemeProps,
	ButtonType,
	ButtonTypeTokens,
	ColorTokensMap,
} from '@blue-learn/schema';
import { ButtonBase } from './Button.base';
import ThemeProvider from '@blue-learn/theme';

/**
 * Primary UI component for user interaction
 */
/** Build test **/
const Button: React.FunctionComponent<
	ButtonProps
> = ({ type, onPress = () => {}, ...props }) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	const theme = ThemeProvider.getTheme();
	const buttonThemeProps: ButtonThemeProps =
		theme.button[type];
	const colorMapping: ColorTokensMap =
		theme.colors;

	switch (type) {
		case ButtonTypeTokens.LargeFilled:
			return (
				<ButtonBase
					type={ButtonType.Filled}
					size={ButtonSize.Large}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.MediumFilled:
			return (
				<ButtonBase
					type={ButtonType.Filled}
					size={ButtonSize.Medium}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.SmallFilled:
			return (
				<ButtonBase
					type={ButtonType.Filled}
					size={ButtonSize.Small}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.IconFilled:
			return (
				<ButtonBase
					type={ButtonType.Filled}
					size={ButtonSize.IconOnly}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.LargeSoftFilled:
			return (
				<ButtonBase
					type={ButtonType.SoftFilled}
					size={ButtonSize.Large}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.MediumSoftFilled:
			return (
				<ButtonBase
					type={ButtonType.SoftFilled}
					size={ButtonSize.Medium}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.SmallSoftFilled:
			return (
				<ButtonBase
					type={ButtonType.SoftFilled}
					size={ButtonSize.Small}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.IconSoftFilled:
			return (
				<ButtonBase
					type={ButtonType.SoftFilled}
					size={ButtonSize.IconOnly}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.LargeOutline:
			return (
				<ButtonBase
					type={ButtonType.Outline}
					size={ButtonSize.Large}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.MediumOutline:
			return (
				<ButtonBase
					type={ButtonType.Outline}
					size={ButtonSize.Medium}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.SmallOutline:
			return (
				<ButtonBase
					type={ButtonType.Outline}
					size={ButtonSize.Small}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.IconOutline:
			return (
				<ButtonBase
					type={ButtonType.Outline}
					size={ButtonSize.IconOnly}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.LargeGhost:
			return (
				<ButtonBase
					type={ButtonType.Ghost}
					size={ButtonSize.Large}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.MediumGhost:
			return (
				<ButtonBase
					type={ButtonType.Ghost}
					size={ButtonSize.Medium}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.SmallGhost:
			return (
				<ButtonBase
					type={ButtonType.Ghost}
					size={ButtonSize.Small}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.IconGhost:
			return (
				<ButtonBase
					type={ButtonType.Ghost}
					size={ButtonSize.IconOnly}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.LargeGhost:
			return (
				<ButtonBase
					type={ButtonType.Ghost}
					size={ButtonSize.Large}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.MediumGhost:
			return (
				<ButtonBase
					type={ButtonType.Ghost}
					size={ButtonSize.Medium}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.SmallGhost:
			return (
				<ButtonBase
					type={ButtonType.Ghost}
					size={ButtonSize.Small}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.IconGhost:
			return (
				<ButtonBase
					type={ButtonType.Ghost}
					size={ButtonSize.IconOnly}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.LargeElevated:
			return (
				<ButtonBase
					type={ButtonType.Elevated}
					size={ButtonSize.Large}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.MediumElevated:
			return (
				<ButtonBase
					type={ButtonType.Elevated}
					size={ButtonSize.Medium}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.SmallElevated:
			return (
				<ButtonBase
					type={ButtonType.Elevated}
					size={ButtonSize.Small}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		case ButtonTypeTokens.IconElevated:
			return (
				<ButtonBase
					type={ButtonType.Elevated}
					size={ButtonSize.IconOnly}
					{...buttonThemeProps}
					{...props}
					{...colorMapping}
				/>
			);
		// case ButtonTypeTokens.FloatingAction:
		// 	return (
		// 		<ButtonBase
		// 			type={ButtonType.}
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
