import {
	IconTokens,
	IconTypeTokensMap,
} from '@blue-learn/schema';
import Chat from './icon-list/Chat';
import Edit from './icon-list/Edit';
import Search from './icon-list/Search';
import Upload from './icon-list/Upload';
import Attachment from './icon-list/Attachment';
import Back from './icon-list/Back';
import PlusCircle from './icon-list/PlusCircle';
import Cross from './icon-list/Cross';

export const iconTokensMap: IconTypeTokensMap = {
	[IconTokens.Chat]: Chat,
	[IconTokens.Edit]: Edit,
	[IconTokens.Search]: Search,
	[IconTokens.Upload]: Upload,
	[IconTokens.Attachment]: Attachment,
	[IconTokens.Back]: Back,
	[IconTokens.PlusCircle]: PlusCircle,
	[IconTokens.Cross]: Cross,
};
