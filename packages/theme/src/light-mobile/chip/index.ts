import {
	ChipTypeTokens,
	ChipTypeTokensMap,
	ColorTokens,
	BorderRadiusTokens,
	FontSizeTokens,
	SizeTypeTokens,
} from '@blue-learn/schema';

export const chipTypeTokensMap: ChipTypeTokensMap =
	{
		[ChipTypeTokens.SMALL_SELECTED]: {
			borderRadius: BorderRadiusTokens.BR4,
			fontSize: FontSizeTokens.XS,
			borderColor: ColorTokens.Primary_50,
			labelColor: ColorTokens.Primary_500,
			padding: {
				vertical: SizeTypeTokens.SM,
				horizontal: SizeTypeTokens.LG,
			},
		},
		[ChipTypeTokens.SMALL_UNSELECTED]: {
			borderRadius: BorderRadiusTokens.BR4,
			fontSize: FontSizeTokens.XS,
			borderColor: ColorTokens.Grey_100,
			labelColor: ColorTokens.Grey_800,
			padding: {
				vertical: SizeTypeTokens.SM,
				horizontal: SizeTypeTokens.LG,
			},
		},
		[ChipTypeTokens.MEDIUM_SELECTED]: {
			borderRadius: BorderRadiusTokens.BR4,
			fontSize: FontSizeTokens.XS,
			borderColor: ColorTokens.Primary_50,
			labelColor: ColorTokens.Primary_500,
			padding: {
				vertical: SizeTypeTokens.MD,
				horizontal: SizeTypeTokens.XXXL,
			},
		},
		[ChipTypeTokens.MEDIUM_UNSELECTED]: {
			borderRadius: BorderRadiusTokens.BR4,
			fontSize: FontSizeTokens.XS,
			borderColor: ColorTokens.Grey_100,
			labelColor: ColorTokens.Grey_800,
			padding: {
				vertical: SizeTypeTokens.MD,
				horizontal: SizeTypeTokens.XXXL,
			},
		},
	};
