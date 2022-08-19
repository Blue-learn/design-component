import {
	ColorTokens,
	TagTypeTokens,
	TagTypeTokensMap,
} from '@blue-learn/schema';
import { tagTypeTokensMap as tagTypeTokensMapLight } from '../../light-mobile/tag';

export const tagTypeTokensMap: TagTypeTokensMap =
	{
		[TagTypeTokens.DEFAULT]: {
			...tagTypeTokensMapLight['DEFAULT'],
			labelColor: ColorTokens.Grey_200,
			bgColor: ColorTokens.Grey_500,
		},
		[TagTypeTokens.SECONDARY]: {
			...tagTypeTokensMapLight['SECONDARY'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Black,
		},
		[TagTypeTokens.GRADIENT]: {
			...tagTypeTokensMapLight['GRADIENT'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_700,
		},
	};
