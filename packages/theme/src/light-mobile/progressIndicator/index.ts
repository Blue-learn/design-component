import {
	ColorTokens,
	BorderRadiusTokens,
	ProgressIndicatorTypeTokens,
	ProgressIndicatorTypeTokensMap,
	SizeTypeTokens,
} from '@blue-learn/schema';

export const progessIndicatorTypeTokensMap: ProgressIndicatorTypeTokensMap =
	{
		[ProgressIndicatorTypeTokens.default]: {
			color: ColorTokens.Blue_600,
			borderRadius: BorderRadiusTokens.BR4,
			height: SizeTypeTokens.MD,
		},
	};
