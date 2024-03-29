import {
	ColorTokens,
	TagTypeTokens,
	TagTypeTokensMap,
} from '@blue-learn/schema';
import { tagTypeTokensMap as tagTypeTokensMapLight } from '../../light-mobile/tag';

export const tagTypeTokensMap: TagTypeTokensMap =
	{
		[TagTypeTokens.SM]: {
			...tagTypeTokensMapLight[TagTypeTokens.SM],
			labelColor: ColorTokens.Grey_200,
			bgColor: ColorTokens.Grey_500,
		},
		[TagTypeTokens.MD]: {
			...tagTypeTokensMapLight[TagTypeTokens.MD],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_700,
		},
		[TagTypeTokens.SECONDARY]: {
			...tagTypeTokensMapLight['SECONDARY'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Black_20,
		},
		[TagTypeTokens.GRADIENT]: {
			...tagTypeTokensMapLight['GRADIENT'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_700,
		},
	};
