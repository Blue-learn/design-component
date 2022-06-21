import {
	ButtonTypeTokens,
	ButtonTypeTokensMap,
	ColorTokens,
} from '@blue-learn/schema';
import { buttonTypeTokensMap as buttonTypeTokensMapLight } from '../../light-mobile/button';

export const buttonTypeTokensMap: ButtonTypeTokensMap =
	{
		[ButtonTypeTokens.GoogleLargeFilled]: {
			...buttonTypeTokensMapLight[
				'google-large-filled'
			],
		},
		[ButtonTypeTokens.LargeFilled]: {
			...buttonTypeTokensMapLight['large-filled'],
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.MediumFilled]: {
			...buttonTypeTokensMapLight['medium-filled'],
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.SmallFilled]: {
			...buttonTypeTokensMapLight['small-filled'],
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.IconFilled]: {
			...buttonTypeTokensMapLight['icon-filled'],
			labelColor: ColorTokens.Grey_500,
			bgColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.LargeSoftFilled]: {
			...buttonTypeTokensMapLight[
				'large-soft-filled'
			],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.MediumSoftFilled]: {
			...buttonTypeTokensMapLight[
				'medium-soft-filled'
			],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.SmallSoftFilled]: {
			...buttonTypeTokensMapLight[
				'small-soft-filled'
			],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.IconSoftFilled]: {
			...buttonTypeTokensMapLight[
				'icon-soft-filled'
			],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.LargeOutline]: {
			...buttonTypeTokensMapLight['large-outline'],
			labelColor: ColorTokens.Blue_300,
			borderColor: ColorTokens.Grey_400,
		},
		[ButtonTypeTokens.MediumOutline]: {
			...buttonTypeTokensMapLight['medium-outline'],
			labelColor: ColorTokens.Blue_300,
			borderColor: ColorTokens.Grey_400,
		},
		[ButtonTypeTokens.SmallOutline]: {
			...buttonTypeTokensMapLight['small-outline'],
			labelColor: ColorTokens.Blue_300,
			borderColor: ColorTokens.Grey_400,
		},
		[ButtonTypeTokens.IconOutline]: {
			...buttonTypeTokensMapLight['icon-outline'],
			labelColor: ColorTokens.Blue_300,
			borderColor: ColorTokens.Grey_400,
		},
		[ButtonTypeTokens.LargeGhost]: {
			...buttonTypeTokensMapLight['large-ghost'],
			labelColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.MediumGhost]: {
			...buttonTypeTokensMapLight['medium-ghost'],
			labelColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.SmallGhost]: {
			...buttonTypeTokensMapLight['small-ghost'],
			labelColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.IconGhost]: {
			...buttonTypeTokensMapLight['icon-ghost'],
			labelColor: ColorTokens.Blue_300,
		},
		[ButtonTypeTokens.LargeElevated]: {
			...buttonTypeTokensMapLight['large-elevated'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.MediumElevated]: {
			...buttonTypeTokensMapLight['medium-elevated'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.SmallElevated]: {
			...buttonTypeTokensMapLight['small-elevated'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
		[ButtonTypeTokens.IconElevated]: {
			...buttonTypeTokensMapLight['icon-elevated'],
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_500,
		},
	};
