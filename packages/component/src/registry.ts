import { WIDGET } from '@blue-learn/schema';
import {
	Button,
	Space,
	Icon,
	Stack,
	Avatar,
	Tabs,
	Divider,
} from './index';

type WidgetRegistryType = {
	[key in WIDGET]: any;
};
const registry: WidgetRegistryType = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.STACK]: Stack,
	[WIDGET.SPACE]: Space,
	[WIDGET.ICON]: Icon,
	[WIDGET.AVATAR]: Avatar,
	[WIDGET.TABS]: Tabs,
	[WIDGET.DIVIDER]: Divider,
};
export { registry as WidgetRegistry };
