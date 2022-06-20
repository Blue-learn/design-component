import {
	ColorTokens,
	inputTypeToken,
	InputTypeTokensMap,
} from '@blue-learn/schema';
import { inputTypeTokensMap as lightInputTypeTokensMap } from '../../light-mobile/textInput';

export const inputTypeTokensMap: InputTypeTokensMap =
	{
		[inputTypeToken.default]: {
			...lightInputTypeTokensMap.default,
			color: ColorTokens.Grey_100,
		},
		[inputTypeToken.chat]: {
			...lightInputTypeTokensMap.chat,
			color: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_600,
		},
		[inputTypeToken.disabled]: {
			...lightInputTypeTokensMap.disabled,
			color: ColorTokens.Grey_100,
			borderColor: ColorTokens.Grey_100,
		},
		[inputTypeToken.success]: {
			...lightInputTypeTokensMap.success,
			color: ColorTokens.Grey_100,
			borderColor: ColorTokens.Success_100,
		},
		[inputTypeToken.error]: {
			...lightInputTypeTokensMap.error,
			color: ColorTokens.Grey_100,
			borderColor: ColorTokens.Error_100,
		},
	};
