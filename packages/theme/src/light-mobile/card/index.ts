import {
	ButtonSize,
	ButtonType,
	ButtonTypeTokens,
	ButtonTypeTokensMap,
	CardTypeTokens,
	CardTypeTokensMap,
	ColorTokens,
	CornerRadiusTokens,
	SpaceTypeTokens,
} from '@blue-learn/schema';
import { colorTokensMap } from '../../colors';
import { borderRadiusTypeTokensMap } from '../cornerRadius';
import { spaceTypeTokensMap } from '../space';

export const cardTypeTokensMap: CardTypeTokensMap =
	{
		[CardTypeTokens.Normal]: {
			borderRadius: CornerRadiusTokens.BR1,
			bgColor: ColorTokens.Grey_50,
			padding: SpaceTypeTokens.LG,
		}
	};
