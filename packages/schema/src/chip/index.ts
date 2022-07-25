import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { IconProps } from '../icon';
import { OpacityTypeTokens } from '../opacity';
import { PaddingProps } from '../padding';
import { FontSizeTokens } from '../typography';

export enum StateTypeTokens {
	default = 'default',
	notSelected = 'notSelected',
	selected = 'selected',
	disabled = 'disabled',
	loading = 'loading',
	error = 'error',
	success = 'success',
}

export type ChipItemProps = {
	state?:
		| StateTypeTokens.selected
		| StateTypeTokens.notSelected
		| StateTypeTokens.disabled;
	/**
	 * default lable Chip
	 */
	label?: String;
	/**
	 * Default Icon null
	 */
	icon?: IconProps;

	bgColor?: ColorTokens;
	labelColor?: ColorTokens;
	fontSize?: FontSizeTokens;
	borderRadius?: BorderRadiusTokens;
	opacity?: OpacityTypeTokens;
	padding?: PaddingProps;
};

export type ChipProps = {
	data?: ChipItemProps[];
};
