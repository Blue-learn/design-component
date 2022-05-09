import { Button, Chip } from '../src';
import { WIDGET } from '@blue-learn/schema';
import { Icon } from '../src';
const registry = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.ICON]: Icon,
	[WIDGET.CHIP]: Chip,
};
export { registry as WidgetRegistry };
