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
	DividerSizeTokensMap,
	LottieSizeTokensMap,
	AspectRatioTokensMap,
	TagTypeTokensMap,
	GradientColorTokensMap,
} from '@blue-learn/schema';

export type ThemeTokens = {
	colors: ColorTokensMap;
	gradientColor: GradientColorTokensMap;
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
	aspectRatio: AspectRatioTokensMap;
	chatCard: ChatCardTypeTokensMap;
	typography: TypographyTypeTokensMap;
	progressIndicator: ProgressIndicatorTypeTokensMap;
	dividerSize: DividerSizeTokensMap;
	lottieSize: LottieSizeTokensMap;
	tag: TagTypeTokensMap;
};

export * from './light-mobile/divider';
export enum THEMES {
	LIGHT_MOBILE = 'light-mobile',
	DARK_MOBILE = 'dark-mobile',
}
export type Theme = {
	[key in THEMES]: ThemeTokens;
};
