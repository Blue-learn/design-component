import {
	ColorTokens,
	inputTypeToken,
	InputTypeTokensMap,
} from '@blue-learn/schema';
import { inputTypeTokensMap as inputTypeTokensMapLight } from '../../light-mobile/textInput';

export const inputTypeTokensMap: InputTypeTokensMap =
	{
		[inputTypeToken.default]: {
			...inputTypeTokensMapLight.default,
			color: ColorTokens.Grey_100,
			borderColor: ColorTokens.Grey_400,
		},
		[inputTypeToken.search]: {
			...inputTypeTokensMapLight.search,
			color: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_600,
		},
		[inputTypeToken.chat]: {
			...inputTypeTokensMapLight.chat,
			color: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_600,
		},
		[inputTypeToken.comment]: {
			...inputTypeTokensMapLight.comment,
			color: ColorTokens.Grey_100,
			bgColor: ColorTokens.Grey_600,
		},
		[inputTypeToken.success]: {
			...inputTypeTokensMapLight.success,
			color: ColorTokens.Grey_100,
			borderColor: ColorTokens.Success_100,
		},
		[inputTypeToken.error]: {
			...inputTypeTokensMapLight.error,
			color: ColorTokens.Grey_100,
			borderColor: ColorTokens.Error_100,
		},
	};
