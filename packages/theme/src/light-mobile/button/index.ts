import {
	ButtonSize,
	ButtonTypeTokens,
	ButtonTypeTokensMap,
	ColorTokens,
	CornerRadiusTokens,
	SpaceTypeTokens,
} from '@blue-learn/schema';
import { colorTokensMap } from '../../colors';
import { borderRadiusTypeTokensMap } from '../cornerRadius';
import { spaceTypeTokensMap } from '../space';

export const buttonTypeTokensMap: ButtonTypeTokensMap =
	{
		[ButtonTypeTokens.LargeFilled]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.MediumFilled]: {
			size: ButtonSize.Medium,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.MD],
		},
		[ButtonTypeTokens.SmallFilled]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.SM],
		},
		[ButtonTypeTokens.IconFilled]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.LargeSoftFilled]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.MediumSoftFilled]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.SmallSoftFilled]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.IconSoftFilled]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.LargeOutline]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.MediumOutline]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.SmallOutline]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.IconOutline]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.LargeGhost]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.MediumGhost]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.SmallGhost]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.IconGhost]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.LargeElevated]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.MediumElevated]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.SmallElevated]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
		[ButtonTypeTokens.IconElevated]: {
			size: ButtonSize.Large,
			borderRadius:
				borderRadiusTypeTokensMap[
					CornerRadiusTokens.BR4
				],
			labelColor: colorTokensMap[ColorTokens.White],
			bgColor: colorTokensMap[ColorTokens.Blue_600],
			paddingVertical:
				spaceTypeTokensMap[SpaceTypeTokens.LG],
		},
	};
