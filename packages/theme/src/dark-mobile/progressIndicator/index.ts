import {
	ColorTokens,
	ProgressIndicatorTypeTokens,
	ProgressIndicatorTypeTokensMap,
} from '@blue-learn/schema';
import { progessIndicatorTypeTokensMap as progessIndicatorTypeTokensMapLight } from '../../light-mobile/progressIndicator';

export const progessIndicatorTypeTokensMap: ProgressIndicatorTypeTokensMap =
	{
		[ProgressIndicatorTypeTokens.default]: {
			...progessIndicatorTypeTokensMapLight[
				ProgressIndicatorTypeTokens.default
			],
			color: ColorTokens.Blue_300,
		},
	};
