import {
	ButtonTypeTokensMap,
	ColorTokensMap,
	CornerRadiusTokensMap,
	SpaceTypeTokensMap,
	FontFamilyTokensMap,
	ShadowTypeTokensMap,
} from '@blue-learn/schema';

export type ThemeTokens = {
	colors: ColorTokensMap;
	button: ButtonTypeTokensMap;
	borderRadius: CornerRadiusTokensMap;
	space: SpaceTypeTokensMap;
	fontFamily: FontFamilyTokensMap;
	shadow: ShadowTypeTokensMap;
};

export enum THEMES {
	LIGHT_MOBILE = 'light-mobile',
	DARK_MOBILE = 'dark-mobile',
}
export type Theme = {
	[key in THEMES]: ThemeTokens;
};
