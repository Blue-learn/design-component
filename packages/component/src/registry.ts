import {
	WIDGET,
	WidgetRegistry,
} from '@blue-learn/schema';
import {
	Button,
	Space,
	Icon,
	Stack,
	Avatar,
	Tabs,
	Divider,
	Typography,
	TextInput,
	Card,
	ChatCard,
	Image,
	ProgressIndicator,
	LinkPreview,
} from './index';

const registry: WidgetRegistry = {
	[WIDGET.TEXT]: Typography,
	[WIDGET.INPUT]: TextInput,
	[WIDGET.BUTTON]: Button,
	[WIDGET.STACK]: Stack,
	[WIDGET.SPACE]: Space,
	[WIDGET.ICON]: Icon,
	[WIDGET.AVATAR]: Avatar,
	[WIDGET.TABS]: Tabs,
	[WIDGET.DIVIDER]: Divider,
	[WIDGET.CARD]: Card,
	[WIDGET.CHATCARD]: ChatCard,
	[WIDGET.IMAGE]: Image,
	[WIDGET.LINKPREVIEW]: LinkPreview,
	[WIDGET.PROGRESSINDICATOR]: ProgressIndicator,
};
export { registry as WidgetRegistry };
