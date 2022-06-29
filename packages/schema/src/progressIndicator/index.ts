import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';
import { SpaceTypeTokens } from '../space';
import { StackAlignType } from '../stack';

export enum ProgressIndicatorTypeTokens {
	default = 'default',
}

export type ProgressIndicatorProps = {
	size?: number;
	activeIndex?: number;
	flex?: StackAlignType;
	type?: ProgressIndicatorTypeTokens;
};

/**
 * Internal Props for Theme
 * */

export type ProgressIndicatorThemeProps = {
	color: ColorTokens;
	borderRadius: CornerRadiusTokens;
	height: SpaceTypeTokens;
};

export type ProgressIndicatorTypeTokensMap = {
	[key in ProgressIndicatorTypeTokens]: ProgressIndicatorThemeProps;
};
