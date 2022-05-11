import { Button, Chips } from '../src';
import { WIDGET } from '@blue-learn/schema';
import { Icon } from '../src';
const registry = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.ICON]: Icon,
	[WIDGET.CHIPS]: Chips,
};
export { registry as WidgetRegistry };
