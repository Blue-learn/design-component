import { ColorTokens } from '../colors';
import { PaddingProps } from '../padding';

export enum DividerSizeTokens {
	SM = 'SM',
	MD = 'MD',
	LG = 'LG',
}

export type DividerProps = {
	size: DividerSizeTokens;
	type?: 'solid' | 'dashed';
	color?: ColorTokens;
	margin?: PaddingProps;
};

export type DividerSizeTokensMap = {
	[key in DividerSizeTokens]: number;
};
