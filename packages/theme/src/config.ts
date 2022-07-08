import {
	AvatarTypeTokensMap,
	ButtonTypeTokensMap,
	ColorTokensMap,
	FontFamilyTokensMap,
	FontSizeTokensMap,
	IconSizeTokensMap,
	InputTypeTokensMap,
	ShadowTypeTokensMap,
	ImageTypeTokensMap,
	ChatCardTypeTokensMap,
	TypographyTypeTokensMap,
	ProgressIndicatorTypeTokensMap,
	BorderRadiusTokensMap,
	SizeTypeTokensMap,
} from '@blue-learn/schema';

export type ThemeTokens = {
	colors: ColorTokensMap;
	button: ButtonTypeTokensMap;
	borderRadius: BorderRadiusTokensMap;
	space: SizeTypeTokensMap;
	fontFamily: FontFamilyTokensMap;
	fontSize: FontSizeTokensMap;
	shadow: ShadowTypeTokensMap;
	textInput: InputTypeTokensMap;
	iconSize: IconSizeTokensMap;
	avatarSize: AvatarTypeTokensMap;
	imageSize: ImageTypeTokensMap;
	chatCard: ChatCardTypeTokensMap;
	typography: TypographyTypeTokensMap;
	progressIndicator: ProgressIndicatorTypeTokensMap;
};

export * from './light-mobile/divider';
export enum THEMES {
	LIGHT_MOBILE = 'light-mobile',
	DARK_MOBILE = 'dark-mobile',
}
export type Theme = {
	[key in THEMES]: ThemeTokens;
};
