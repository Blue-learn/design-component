import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { SizeTypeTokens } from '../size';
import { StackAlignType } from '../stack';

export enum ProgressIndicatorTypeTokens {
	default = 'default',
}

export type ProgressIndicatorProps = {
	size?: number;
	activeIndex?: number;
	flex?: StackAlignType;
	type?: ProgressIndicatorTypeTokens;
	color?: ColorTokens;
};

/**
 * Internal Props for Theme
 * */

export type ProgressIndicatorThemeProps = {
	color: ColorTokens;
	borderRadius: BorderRadiusTokens;
	height: SizeTypeTokens;
};

export type ProgressIndicatorTypeTokensMap = {
	[key in ProgressIndicatorTypeTokens]: ProgressIndicatorThemeProps;
};
