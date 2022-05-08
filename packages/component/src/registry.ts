import { Button, Space } from '../src';
import { WIDGET } from '@blue-learn/schema';

const registry = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.SPACE]: Space,
};
export { registry as WidgetRegistry };
