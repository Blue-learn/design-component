import {
	ButtonTypeTokensMap,
	ColorTokensMap,
	CornerRadiusTokensMap,
	FontFamilyTokensMap,
	InputTypeTokensMap,
	SpaceTypeTokensMap,
} from '@blue-learn/schema';

export type ThemeTokens = {
	colors: ColorTokensMap;
	button: ButtonTypeTokensMap;
	fontFamily: FontFamilyTokensMap;
	spaces: SpaceTypeTokensMap;
	borderRadius: CornerRadiusTokensMap;
	textInput: InputTypeTokensMap;
};

export enum THEMES {
	LIGHT_MOBILE = 'light-mobile',
	DARK_MOBILE = 'dark-mobile',
}
export type Theme = {
	[key in THEMES]: ThemeTokens;
};
