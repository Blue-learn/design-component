import {
	ChatCardTypeTokens,
	ChatCardTypeTokensMap,
	ColorTokens,
} from '@blue-learn/schema';
import { chatCardTypeTokenMap as lightChatCardTypeTokenMap } from '../../light-mobile/chatCard';

export const chatCardTypeTokenMap: ChatCardTypeTokensMap =
	{
		[ChatCardTypeTokens.receiver]: {
			...lightChatCardTypeTokenMap.receiver,
			labelColor: ColorTokens.Grey_100,
			userLabelColor: ColorTokens.Grey_200,
			bgColor: ColorTokens.Grey_600,
		},
		[ChatCardTypeTokens.sender]: {
			...lightChatCardTypeTokenMap.sender,
			labelColor: ColorTokens.Grey_100,
			bgColor: ColorTokens.Blue_900,
		},
		[ChatCardTypeTokens.reply]: {
			...lightChatCardTypeTokenMap.reply,
			labelColor: ColorTokens.Grey_200,
			userLabelColor: ColorTokens.Grey_200,
			bgColor: ColorTokens.Grey_600,
		},
	};
