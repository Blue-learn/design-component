import React, { memo } from 'react';
import {
	ChatCardProps,
	ChatCardThemeProps,
	ChatCardTypeTokens,
} from '@blue-learn/schema';
import SenderChatCardBase from './SenderChatCard.base';
import ReceiverChatCardBase from './ReceiverChatCard.base';
import ReplyChatCardBase from './ReplyChatCard.base';
import ThemeProvider from '@blue-learn/theme';
/**
 * Primary UI component for user interaction
 */

const ChatCard: React.FunctionComponent<
	ChatCardProps
> = ({ type, ...props }) => {
	/**
	 *  logic -> base-component(...props)
	 * */

	const theme = ThemeProvider.getTheme();
	const chatCardThemeProps: ChatCardThemeProps =
		theme.chatCard[type];

	switch (type) {
		case ChatCardTypeTokens.sender:
			return (
				<SenderChatCardBase
					{...chatCardThemeProps}
					{...props}
				/>
			);

		case ChatCardTypeTokens.receiver:
			return (
				<ReceiverChatCardBase
					{...chatCardThemeProps}
					{...props}
				/>
			);

		case ChatCardTypeTokens.reply:
			return (
				<ReplyChatCardBase
					{...chatCardThemeProps}
					{...props}
				/>
			);

		default:
			return <></>;
	}
};

export default memo(ChatCard);
export { ChatCard };
