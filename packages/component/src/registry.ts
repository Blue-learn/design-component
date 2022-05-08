import { Button } from '../src';
import { WIDGET } from '@blue-learn/schema';
import { Icon } from '../src';

const registry = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.ICON]: Icon,
};
export { registry as WidgetRegistry };
