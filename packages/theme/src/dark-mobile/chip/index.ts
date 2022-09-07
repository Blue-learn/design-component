import {
	ChipTypeTokens,
	ChipTypeTokensMap,
	ColorTokens,
} from '@blue-learn/schema';
import { chipTypeTokensMap as chipTypeTokensMapLight } from '../../light-mobile/chip';

export const chipTypeTokensMap: ChipTypeTokensMap =
	{
		[ChipTypeTokens.SMALL_SELECTED]: {
			...chipTypeTokensMapLight['SMALL_SELECTED'],
			borderColor: ColorTokens.Blue_300,
			labelColor: ColorTokens.Blue_300,
		},
		[ChipTypeTokens.SMALL_UNSELECTED]: {
			...chipTypeTokensMapLight['SMALL_UNSELECTED'],
			borderColor: ColorTokens.Grey_500,
			labelColor: ColorTokens.Grey_100,
		},
		[ChipTypeTokens.MEDIUM_SELECTED]: {
			...chipTypeTokensMapLight['MEDIUM_SELECTED'],
			borderColor: ColorTokens.Blue_300,
			labelColor: ColorTokens.Blue_300,
		},
		[ChipTypeTokens.MEDIUM_UNSELECTED]: {
			...chipTypeTokensMapLight['MEDIUM_UNSELECTED'],
			borderColor: ColorTokens.Grey_500,
			labelColor: ColorTokens.Grey_100,
		},
	};
