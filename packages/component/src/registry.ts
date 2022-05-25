import {
	Button,
	Space,
	Icon,
	// HStack,
	// VStack,
	Stack,
	Avatar,
	Tabs,
} from '../src';
import { WIDGET } from '@blue-learn/schema';

const registry = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.SPACE]: Space,
	[WIDGET.ICON]: Icon,
	// [WIDGET.HSTACK]: HStack,
	// [WIDGET.VSTACK]: VStack,
	[WIDGET.STACK]: Stack,
	[WIDGET.AVATAR]: Avatar,
	[WIDGET.TABS]: Tabs,
};
export { registry as WidgetRegistry };
