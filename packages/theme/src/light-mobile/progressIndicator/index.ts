import {
	ColorTokens,
	CornerRadiusTokens,
	ProgressIndicatorTypeTokens,
	ProgressIndicatorTypeTokensMap,
	SpaceTypeTokens,
} from '@blue-learn/schema';

export const progessIndicatorTypeTokensMap: ProgressIndicatorTypeTokensMap =
	{
		[ProgressIndicatorTypeTokens.default]: {
			color: ColorTokens.Blue_600,
			borderRadius: CornerRadiusTokens.BR4,
			height: SpaceTypeTokens.MD,
		},
	};
