import {
	ChatCardTypeTokens,
	ChatCardTypeTokensMap,
	ColorTokens,
} from '@blue-learn/schema';
import { chatCardTypeTokenMap } from '../../light-mobile/chatCard';

export const darkChatCardTypeTokenMap: ChatCardTypeTokensMap =
	{
		[ChatCardTypeTokens.receiver]: {
			...chatCardTypeTokenMap.receiver,
			labelColor: ColorTokens.Grey_100,
			userLabelColor: ColorTokens.Grey_200,
			bgColor: ColorTokens.Grey_600,
		},
		[ChatCardTypeTokens.sender]: {
			...chatCardTypeTokenMap.sender,
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Blue_900,
		},
		[ChatCardTypeTokens.reply]: {
			...chatCardTypeTokenMap.reply,
			labelColor: ColorTokens.Grey_200,
			userLabelColor: ColorTokens.Grey_200,
			bgColor: ColorTokens.Grey_600,
		},
	};
