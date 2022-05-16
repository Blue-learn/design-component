import {
	Button,
	Space,
	Icon,
	HStack,
	VStack,
	Avatar,
	Tabs,
} from '../src';
import { WIDGET } from '@blue-learn/schema';

const registry = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.SPACE]: Space,
	[WIDGET.ICON]: Icon,
	[WIDGET.HSTACK]: HStack,
	[WIDGET.VSTACK]: VStack,
	[WIDGET.AVATAR]: Avatar,
	[WIDGET.TABS]: Tabs,
};
export { registry as WidgetRegistry };
