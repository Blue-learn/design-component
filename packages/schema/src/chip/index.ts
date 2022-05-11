/*
ChipBase
- variant
*/

import { ReactNode } from 'react';
import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';
import { ShadowTypeTokens } from '../shadow';
import { SpaceTypeTokens } from '../space';

export type ChipOption = {
	value: unknown;
	label: ReactNode;
};

export type ChipsProps = {
	selectable?: false;
	multiple?: boolean;
	options?: ChipOption[];
	selected: ChipOption | ChipOption[];
	onValueChange?: Function;
};

export enum ChipTypeTokens {
	DEFAULT = 'default',
	CHECKED = 'checked',
	UNCHECKED = 'unchecked',
}

export type ChipBaseProps = {
	type: ChipTypeTokens;
	label: ReactNode;
	checked?: boolean;
	value?: unknown;
	onChange?: Function;

	// theme props
	labelColor?: ColorTokens;
	bgColor?: ColorTokens;
	borderColor?: ColorTokens;
	borderRadius?: CornerRadiusTokens;
	shadow?: ShadowTypeTokens;
	paddingVertical?: SpaceTypeTokens;
};

export type ChipThemeProps = {
	labelColor: ColorTokens;
	backgroundColor: ColorTokens;
	borderWidth?: number;
	borderColor?: ColorTokens;
};

export declare type ChipTypeTokensMap = {
	[key in ChipTypeTokens]: ChipThemeProps;
};
