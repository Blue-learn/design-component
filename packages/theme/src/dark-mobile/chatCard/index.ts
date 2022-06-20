import {
	ChatCardTypeTokens,
	ChatCardTypeTokensMap,
	ColorTokens,
} from '@blue-learn/schema';
import { chatCardTypeTokenMap as chatCardTypeTokenMapLight } from '../../light-mobile/chatCard';

export const chatCardTypeTokenMap: ChatCardTypeTokensMap =
	{
		[ChatCardTypeTokens.receiver]: {
			...chatCardTypeTokenMapLight.receiver,
			labelColor: ColorTokens.Grey_100,
			userLabelColor: ColorTokens.Grey_200,
			bgColor: ColorTokens.Grey_600,
		},
		[ChatCardTypeTokens.sender]: {
			...chatCardTypeTokenMapLight.sender,
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Blue_900,
		},
		[ChatCardTypeTokens.reply]: {
			...chatCardTypeTokenMapLight.reply,
			labelColor: ColorTokens.Grey_200,
			userLabelColor: ColorTokens.Grey_200,
			bgColor: ColorTokens.Grey_600,
		},
	};
