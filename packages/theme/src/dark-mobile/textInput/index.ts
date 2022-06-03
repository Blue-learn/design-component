import {
	ColorTokens,
	inputTypeToken,
	InputTypeTokensMap,
} from '@blue-learn/schema';
import { inputTypeTokensMap } from '../../light-mobile/textInput';

export const darkInputTypeTokensMap: InputTypeTokensMap =
	{
		[inputTypeToken.default]: {
			...inputTypeTokensMap.default,
			color: ColorTokens.Grey_100,
		},
		[inputTypeToken.chat]: {
			...inputTypeTokensMap.chat,
			color: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_600,
		},
		[inputTypeToken.disabled]: {
			...inputTypeTokensMap.disabled,
			color: ColorTokens.Grey_100,
			borderColor: ColorTokens.Grey_100,
		},
		[inputTypeToken.success]: {
			...inputTypeTokensMap.success,
			color: ColorTokens.Grey_100,
			borderColor: ColorTokens.Success_100,
		},
		[inputTypeToken.error]: {
			...inputTypeTokensMap.error,
			color: ColorTokens.Grey_100,
			borderColor: ColorTokens.Error_100,
		},
	};
