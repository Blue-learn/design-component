import {
	Button,
	Space,
	Icon,
	HStack,
	VStack,
	Avatar,
} from '../src';
import { WIDGET } from '@blue-learn/schema';

const registry = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.SPACE]: Space,
	[WIDGET.ICON]: Icon,
	[WIDGET.HSTACK]: HStack,
	[WIDGET.VSTACK]: VStack,
	[WIDGET.AVATAR]: Avatar,
};
export { registry as WidgetRegistry };
