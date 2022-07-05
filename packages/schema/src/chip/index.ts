import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';
import { IconProps } from '../icon';
import { SpaceTypeTokens } from '../space';
import { FontSizeTokens } from '../typography';

export type ChipProps = {
	/**
	 * Button Label default Button
	 */
	label?: String;
	/**
	 * Default Icon null
	 */
	icon?: IconProps;
	/**
	Default iconAlignment - right
    */
	iconAlignment?: 'left' | 'right';
	bgColor?: ColorTokens;
	labelColor?: ColorTokens;
	fontSize?: FontSizeTokens;
	borderRadius?: CornerRadiusTokens;
	padding?: {
		top?: SpaceTypeTokens;
		bottom?: SpaceTypeTokens;
		left?: SpaceTypeTokens;
		right?: SpaceTypeTokens;
	};
	paddingHorizontal?: SpaceTypeTokens;
	paddingVertical?: SpaceTypeTokens;
};
