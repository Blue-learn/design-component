import {
	IconSizeTokens,
	IconTokens,
	IconTypeTokensMap,
} from '@blue-learn/schema';

import Chat from '@blue-learn/component/src/icon/icon-list/Chat';
import Edit from '@blue-learn/component/src/icon/icon-list/Edit';

export const iconTokensMap: IconTypeTokensMap = {
	[IconTokens.Chat]: Chat,
	[IconTokens.Edit]: Edit,
};

export const IconSizeTokensMap = {
	[IconSizeTokens['2xs']]: 10,
	[IconSizeTokens['xs']]: 12,
	[IconSizeTokens['sm']]: 14,
	[IconSizeTokens['md']]: 16,
	[IconSizeTokens['lg']]: 18,
	[IconSizeTokens['xl']]: 20,
	[IconSizeTokens['2xl']]: 24,
	[IconSizeTokens['3xl']]: 28,
	[IconSizeTokens['4xl']]: 32,
	[IconSizeTokens['5xl']]: 40,
	[IconSizeTokens['6xl']]: 48,
	[IconSizeTokens['7xl']]: 60,
};
