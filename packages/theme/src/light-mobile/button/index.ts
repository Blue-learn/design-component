import {
	ButtonTypeTokens,
	ButtonTypeTokensMap,
	ColorTokens,
	CornerRadiusTokens,
	FontSizeTokens,
	ShadowTypeTokens,
	SpaceTypeTokens,
} from '@blue-learn/schema';

export const buttonTypeTokensMap: ButtonTypeTokensMap =
	{
		[ButtonTypeTokens.LargeFilled]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.White,
			bgColor: ColorTokens.Blue_600,
			paddingVertical: SpaceTypeTokens.LG,
			fontSize: FontSizeTokens.lg,
		},
		[ButtonTypeTokens.MediumFilled]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.White,
			bgColor: ColorTokens.Blue_600,
			paddingVertical: SpaceTypeTokens.MD,
			fontSize: FontSizeTokens.md,
		},
		[ButtonTypeTokens.SmallFilled]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.White,
			bgColor: ColorTokens.Blue_600,
			paddingVertical: SpaceTypeTokens.SM,
			fontSize: FontSizeTokens.sm,
		},
		[ButtonTypeTokens.IconFilled]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.White,
			bgColor: ColorTokens.Blue_600,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.LargeSoftFilled]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.LG,
			fontSize: FontSizeTokens.lg,
		},
		[ButtonTypeTokens.MediumSoftFilled]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.MD,
			fontSize: FontSizeTokens.md,
		},
		[ButtonTypeTokens.SmallSoftFilled]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.SM,
			fontSize: FontSizeTokens.sm,
		},
		[ButtonTypeTokens.IconSoftFilled]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.LargeOutline]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.White,
			paddingVertical: SpaceTypeTokens.LG,
			fontSize: FontSizeTokens.lg,
			borderColor: ColorTokens.Grey_200,
		},
		[ButtonTypeTokens.MediumOutline]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.White,
			paddingVertical: SpaceTypeTokens.MD,
			fontSize: FontSizeTokens.md,
			borderColor: ColorTokens.Grey_200,
		},
		[ButtonTypeTokens.SmallOutline]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.White,
			paddingVertical: SpaceTypeTokens.SM,
			fontSize: FontSizeTokens.sm,
			borderColor: ColorTokens.Grey_200,
		},
		[ButtonTypeTokens.IconOutline]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.White,
			paddingVertical: SpaceTypeTokens.LG,
			borderColor: ColorTokens.Grey_200,
		},
		[ButtonTypeTokens.LargeGhost]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: null,
			paddingVertical: SpaceTypeTokens.LG,
			fontSize: FontSizeTokens.lg,
		},
		[ButtonTypeTokens.MediumGhost]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: null,
			paddingVertical: SpaceTypeTokens.MD,
			fontSize: FontSizeTokens.md,
		},
		[ButtonTypeTokens.SmallGhost]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: null,
			paddingVertical: SpaceTypeTokens.SM,
			fontSize: FontSizeTokens.sm,
		},
		[ButtonTypeTokens.IconGhost]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: null,
			paddingVertical: SpaceTypeTokens.LG,
		},
		[ButtonTypeTokens.LargeElevated]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.LG,
			fontSize: FontSizeTokens.lg,
			shadow: ShadowTypeTokens.E1,
		},
		[ButtonTypeTokens.MediumElevated]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.MD,
			fontSize: FontSizeTokens.md,
			shadow: ShadowTypeTokens.E1,
		},
		[ButtonTypeTokens.SmallElevated]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.SM,
			fontSize: FontSizeTokens.sm,
			shadow: ShadowTypeTokens.E1,
		},
		[ButtonTypeTokens.IconElevated]: {
			borderRadius: CornerRadiusTokens.BR4,
			labelColor: ColorTokens.Blue_600,
			bgColor: ColorTokens.Blue_100,
			paddingVertical: SpaceTypeTokens.LG,
			shadow: ShadowTypeTokens.E1,
		},
	};
