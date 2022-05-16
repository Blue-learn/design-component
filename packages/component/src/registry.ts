import { WIDGET } from '@blue-learn/schema';
import {
	Avatar,
	Button,
	Chips,
	HStack,
	Icon,
	Space,
	VStack,
} from '../src';

const registry = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.ICON]: Icon,
	[WIDGET.SPACE]: Space,
	[WIDGET.CHIPS]: Chips,
	[WIDGET.HSTACK]: HStack,
	[WIDGET.VSTACK]: VStack,
	[WIDGET.AVATAR]: Avatar,
};
export { registry as WidgetRegistry };
