import {
	Button,
	Space,
	Icon,
	HStack,
	VStack,
} from '../src';
import { WIDGET } from '@blue-learn/schema';

const registry = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.SPACE]: Space,
	[WIDGET.ICON]: Icon,
	[WIDGET.HSTACK]: HStack,
	[WIDGET.VSTACK]: VStack,
};
export { registry as WidgetRegistry };
