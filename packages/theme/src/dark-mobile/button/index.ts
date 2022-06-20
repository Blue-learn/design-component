import {
	ButtonTypeTokens,
	ButtonTypeTokensMap,
	ColorTokens,
} from '@blue-learn/schema';
import { buttonTypeTokensMap as lightButtonTypeTokensMap } from '../../light-mobile/button';

export const buttonTypeTokensMap: ButtonTypeTokensMap =
	{
		[ButtonTypeTokens.GoogleLargeFilled]: {
			...lightButtonTypeTokensMap[
				'GoogleLargeFilled'
			],
		},
		[ButtonTypeTokens.LargeFilled]: {
			...lightButtonTypeTokensMap['large-filled'],
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.MediumFilled]: {
			...lightButtonTypeTokensMap['medium-filled'],
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.SmallFilled]: {
			...lightButtonTypeTokensMap['small-filled'],
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.IconFilled]: {
			...lightButtonTypeTokensMap['icon-filled'],
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.LargeSoftFilled]: {
			...lightButtonTypeTokensMap[
				'large-soft-filled'
			],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.MediumSoftFilled]: {
			...lightButtonTypeTokensMap[
				'medium-soft-filled'
			],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.SmallSoftFilled]: {
			...lightButtonTypeTokensMap[
				'small-soft-filled'
			],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.IconSoftFilled]: {
			...lightButtonTypeTokensMap[
				'icon-soft-filled'
			],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.LargeOutline]: {
			...lightButtonTypeTokensMap['large-outline'],
			labelColor: ColorTokens.Blue_300,
			borderColor: ColorTokens.Grey_400,
		},
		[ButtonTypeTokens.MediumOutline]: {
			...lightButtonTypeTokensMap['medium-outline'],
			labelColor: ColorTokens.Blue_300,
			borderColor: ColorTokens.Grey_400,
		},
		[ButtonTypeTokens.SmallOutline]: {
			...lightButtonTypeTokensMap['small-outline'],
			labelColor: ColorTokens.Blue_300,
			borderColor: ColorTokens.Grey_400,
		},
		[ButtonTypeTokens.IconOutline]: {
			...lightButtonTypeTokensMap['icon-outline'],
			labelColor: ColorTokens.Blue_300,
			borderColor: ColorTokens.Grey_400,
		},
		[ButtonTypeTokens.LargeGhost]: {
			...lightButtonTypeTokensMap['large-ghost'],
			labelColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.MediumGhost]: {
			...lightButtonTypeTokensMap['medium-ghost'],
			labelColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.SmallGhost]: {
			...lightButtonTypeTokensMap['small-ghost'],
			labelColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.IconGhost]: {
			...lightButtonTypeTokensMap['icon-ghost'],
			labelColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.LargeElevated]: {
			...lightButtonTypeTokensMap['large-elevated'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.MediumElevated]: {
			...lightButtonTypeTokensMap['medium-elevated'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.SmallElevated]: {
			...lightButtonTypeTokensMap['small-elevated'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.IconElevated]: {
			...lightButtonTypeTokensMap['icon-elevated'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
	};
