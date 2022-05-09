/*
ChipBase
- variant
*/

import { ReactNode } from 'react';
import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';
import { ShadowTypeTokens } from '../shadow';
import { SpaceTypeTokens } from '../space';

export enum ChipTypeTokens {
	DEFAULT = 'default',
	CHECKED = 'checked',
	UNCHECKED = 'unchecked',
}

export interface ChipBaseProps {
	type: ChipTypeTokens;
	label: ReactNode;
	checked?: boolean;
	onChange?(currentValue: unknown): Function;

	// theme props
	labelColor?: ColorTokens;
	bgColor?: ColorTokens;
	borderColor?: ColorTokens;
	borderRadius?: CornerRadiusTokens;
	shadow?: ShadowTypeTokens;
	paddingVertical?: SpaceTypeTokens;
}

export interface ChipProps {
	input: boolean;
	label: ReactNode;
	checked?: boolean;
	onChange?(currentValue: unknown): Function;
}

export type ChipThemeProps = {
	labelColor: ColorTokens;
	backgroundColor: ColorTokens;
	borderWidth?: number;
	borderColor?: ColorTokens;
};

export declare type ChipTypeTokensMap = {
	[key in ChipTypeTokens]: ChipThemeProps;
};
