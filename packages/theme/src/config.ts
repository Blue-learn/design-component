import {
	ButtonTypeTokensMap,
	ColorTokensMap,
	CornerRadiusTokensMap,
	SpaceTypeTokensMap,
	FontFamilyTokensMap,
	ShadowTypeTokensMap,
	InputTypeTokensMap,
	IconTypeTokensMap,
	IconSizeTokensMap,
	ChipTypeTokensMap,
} from '@blue-learn/schema';

export type ThemeTokens = {
	colors: ColorTokensMap;
	button: ButtonTypeTokensMap;
	chip: ChipTypeTokensMap;
	borderRadius: CornerRadiusTokensMap;
	space: SpaceTypeTokensMap;
	fontFamily: FontFamilyTokensMap;
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
