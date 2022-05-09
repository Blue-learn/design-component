import {
	ButtonTypeTokensMap,
	ColorTokensMap,
	CornerRadiusTokensMap,
	SpaceTypeTokensMap,
	FontFamilyTokensMap,
	ShadowTypeTokensMap,
	InputTypeTokensMap,
	FontSizeTokensMap,
	IconTypeTokensMap,
	IconSizeTokensMap,
} from '@blue-learn/schema';

export type ThemeTokens = {
	colors: ColorTokensMap;
	button: ButtonTypeTokensMap;
	borderRadius: CornerRadiusTokensMap;
	space: SpaceTypeTokensMap;
	fontFamily: FontFamilyTokensMap;
	fontSize: FontSizeTokensMap;
	shadow: ShadowTypeTokensMap;
	spaces: SpaceTypeTokensMap;
	textInput: InputTypeTokensMap;
	icon: IconTypeTokensMap;
	iconSize: IconSizeTokensMap;
};

export enum THEMES {
	LIGHT_MOBILE = 'light-mobile',
	DARK_MOBILE = 'dark-mobile',
}
export type Theme = {
	[key in THEMES]: ThemeTokens;
};
