import {
	ButtonTypeTokens,
	ButtonTypeTokensMap,
	ColorTokens,
} from '@blue-learn/schema';
import { buttonTypeTokensMap } from '../../light-mobile/button';

export const darkButtonTypeTokensMap: ButtonTypeTokensMap =
	{
		[ButtonTypeTokens.LargeFilled]: {
			...buttonTypeTokensMap['large-filled'],
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.MediumFilled]: {
			...buttonTypeTokensMap['medium-filled'],
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.SmallFilled]: {
			...buttonTypeTokensMap['small-filled'],
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.IconFilled]: {
			...buttonTypeTokensMap['icon-filled'],
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.LargeSoftFilled]: {
			...buttonTypeTokensMap['large-soft-filled'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.MediumSoftFilled]: {
			...buttonTypeTokensMap['medium-soft-filled'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.SmallSoftFilled]: {
			...buttonTypeTokensMap['small-soft-filled'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.IconSoftFilled]: {
			...buttonTypeTokensMap['icon-soft-filled'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.LargeOutline]: {
			...buttonTypeTokensMap['large-outline'],
			labelColor: ColorTokens.Blue_300,
			borderColor: ColorTokens.Grey_400,
		},
		[ButtonTypeTokens.MediumOutline]: {
			...buttonTypeTokensMap['medium-outline'],
			labelColor: ColorTokens.Blue_300,
			borderColor: ColorTokens.Grey_400,
		},
		[ButtonTypeTokens.SmallOutline]: {
			...buttonTypeTokensMap['small-outline'],
			labelColor: ColorTokens.Blue_300,
			borderColor: ColorTokens.Grey_400,
		},
		[ButtonTypeTokens.IconOutline]: {
			...buttonTypeTokensMap['icon-outline'],
			labelColor: ColorTokens.Blue_300,
			borderColor: ColorTokens.Grey_400,
		},
		[ButtonTypeTokens.LargeGhost]: {
			...buttonTypeTokensMap['large-ghost'],
			labelColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.MediumGhost]: {
			...buttonTypeTokensMap['medium-ghost'],
			labelColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.SmallGhost]: {
			...buttonTypeTokensMap['small-ghost'],
			labelColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.IconGhost]: {
			...buttonTypeTokensMap['icon-ghost'],
			labelColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.LargeElevated]: {
			...buttonTypeTokensMap['large-elevated'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.MediumElevated]: {
			...buttonTypeTokensMap['medium-elevated'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.SmallElevated]: {
			...buttonTypeTokensMap['small-elevated'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.IconElevated]: {
			...buttonTypeTokensMap['icon-elevated'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
	};
