import {
	ChipTypeTokens,
	ChipTypeTokensMap,
	ColorTokens,
} from '@blue-learn/schema';

export const chipTypeTokensMap: ChipTypeTokensMap =
	{
		[ChipTypeTokens.UNCHECKED]: {
			labelColor: ColorTokens.Grey_500,
			backgroundColor: ColorTokens.Transparent,
			borderWidth: 1,
			borderColor: ColorTokens.Grey_100,
		},
		[ChipTypeTokens.CHECKED]: {
			labelColor: ColorTokens.Grey_500,
			borderWidth: 1,
			borderColor: ColorTokens.Blue_100,
			backgroundColor: ColorTokens.Blue_100,
		},
		[ChipTypeTokens.DEFAULT]: {
			labelColor: ColorTokens.Grey_500,
			backgroundColor: ColorTokens.Grey_50,
		},
	};
