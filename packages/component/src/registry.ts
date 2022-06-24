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
};
export { registry as WidgetRegistry };
