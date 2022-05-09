import {
	Button,
	Space,
	Icon,
	HStack,
} from '../src';
import { WIDGET } from '@blue-learn/schema';

const registry = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.SPACE]: Space,
	[WIDGET.ICON]: Icon,
	[WIDGET.HSTACK]: HStack,
};
export { registry as WidgetRegistry };
