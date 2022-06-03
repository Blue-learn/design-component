import {
	AvatarTypeTokensMap,
	ButtonTypeTokensMap,
	ColorTokensMap,
	CornerRadiusTokensMap,
	FontFamilyTokensMap,
	FontSizeTokensMap,
	IconSizeTokensMap,
	InputTypeTokensMap,
	ShadowTypeTokensMap,
	SpaceTypeTokensMap,
	ImageTypeTokensMap,
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
	iconSize: IconSizeTokensMap;
	avatarSize: AvatarTypeTokensMap;
	imageSize: ImageTypeTokensMap;
};

export * from './light-mobile/divider';
export enum THEMES {
	LIGHT_MOBILE = 'light-mobile',
	DARK_MOBILE = 'dark-mobile',
}
export type Theme = {
	[key in THEMES]: ThemeTokens;
};
