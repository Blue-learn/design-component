import {
	IconSizeTokens,
	IconTokens,
	IconTypeTokensMap,
} from '@blue-learn/schema';

import Chat from '@blue-learn/component/src/icon/icon-list/Chat';
import Edit from '@blue-learn/component/src/icon/icon-list/Edit';
import Upload from '@blue-learn/component/src/icon/icon-list/Upload';
import PlusCircle from '@blue-learn/component/src/icon/icon-list/PlusCircle';
import Search from '@blue-learn/component/src/icon/icon-list/Search';
import Attachment from '@blue-learn/component/src/icon/icon-list/Attachment';
import Back from '@blue-learn/component/src/icon/icon-list/Back';
import Cross from '@blue-learn/component/src/icon/icon-list/Cross';
import Play from '@blue-learn/component/src/icon/icon-list/Play';

export const iconTokensMap: IconTypeTokensMap = {
	[IconTokens.Chat]: Chat,
	[IconTokens.Edit]: Edit,
	[IconTokens.Search]: Search,
	[IconTokens.Upload]: Upload,
	[IconTokens.Attachment]: Attachment,
	[IconTokens.Back]: Back,
	[IconTokens.PlusCircle]: PlusCircle,
	[IconTokens.Cross]: Cross,
	[IconTokens.Play]: Play,
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
