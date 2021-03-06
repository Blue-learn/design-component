import {
	TypographyTypeTokensMap,
	ColorTokens,
	TypographyTypeTokens,
} from '@blue-learn/schema';
import { buttonTypeTokensMap as typographyTypeTokensMapLight } from '../../light-mobile/button';

export const typographyTypeTokensMap: TypographyTypeTokensMap =
	{
		[TypographyTypeTokens.DEFAULT]: {
			...typographyTypeTokensMapLight['default'],
			color: ColorTokens.Grey_100,
		},
		[TypographyTypeTokens.H6]: {
			...typographyTypeTokensMapLight['H6'],
			color: ColorTokens.Grey_100,
		},
		[TypographyTypeTokens.H5]: {
			...typographyTypeTokensMapLight['H5'],
			color: ColorTokens.Grey_100,
		},
		[TypographyTypeTokens.H4]: {
			...typographyTypeTokensMapLight['H4'],
			color: ColorTokens.Grey_100,
		},
		[TypographyTypeTokens.H3]: {
			...typographyTypeTokensMapLight['H3'],
			color: ColorTokens.Grey_100,
		},
		[TypographyTypeTokens.H2]: {
			...typographyTypeTokensMapLight['H2'],
			color: ColorTokens.Grey_100,
		},
		[TypographyTypeTokens.H1]: {
			...typographyTypeTokensMapLight['H1'],
			color: ColorTokens.Grey_100,
		},
		[TypographyTypeTokens.B7]: {
			...typographyTypeTokensMapLight['B7'],
			color: ColorTokens.Grey_100,
		},
		[TypographyTypeTokens.B6]: {
			...typographyTypeTokensMapLight['B6'],
			color: ColorTokens.Grey_100,
		},
		[TypographyTypeTokens.B5]: {
			...typographyTypeTokensMapLight['B5'],
			color: ColorTokens.Grey_200,
		},
		[TypographyTypeTokens.B4]: {
			...typographyTypeTokensMapLight['B4'],
			color: ColorTokens.Grey_100,
		},
		[TypographyTypeTokens.P5]: {
			...typographyTypeTokensMapLight['P5'],
			color: ColorTokens.Grey_300,
		},
		[TypographyTypeTokens.primary]: {
			...typographyTypeTokensMapLight['primary'],
			color: ColorTokens.Grey_100,
		},
		[TypographyTypeTokens.secondary]: {
			...typographyTypeTokensMapLight['secondary'],
			color: ColorTokens.Grey_200,
		},
		[TypographyTypeTokens.placeholder]: {
			...typographyTypeTokensMapLight['placeholder'],
			color: ColorTokens.Grey_300,
		},
	};
