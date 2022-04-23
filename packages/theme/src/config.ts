import { ButtonTypeTokensMap, ColorTokensMap } from '@design-component/schema';

export type ThemeTokens = {
	colors: ColorTokensMap;
	button: ButtonTypeTokensMap;
};

export enum THEMES {
	LIGHT_MOBILE = 'light-mobile',
	DARK_MOBILE = 'dark-mobile',
}
export type Theme = {
	[key in THEMES]: ThemeTokens;
};
