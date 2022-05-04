import React, { memo } from 'react';
import {
	ChatCardProps,
	ChatCardTypeTokens,
} from '@blue-learn/schema';
import SenderChatCardBase from './SenderChatCard.base';
import ReceiverChatCardBase from './ReceiverChatCard.base';
import ReplyChatCardBase from './ReplyChatCard.base';
/**
 * Primary UI component for user interaction
 */

const ChatCard: React.FunctionComponent<
	ChatCardProps
> = ({ type, ...props }) => {
	/**
	 *  logic -> base-component(...props)
	 * */

	switch (type) {
		case ChatCardTypeTokens.sender:
			return <SenderChatCardBase {...props} />;

		case ChatCardTypeTokens.receiver:
			return <ReceiverChatCardBase {...props} />;

		case ChatCardTypeTokens.reply:
			return <ReplyChatCardBase {...props} />;

		default:
			return <></>;
	}
};

export default memo(ChatCard);
export { ChatCard };
