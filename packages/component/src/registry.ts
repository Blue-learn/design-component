import { Button, Space, Icon } from '../src';
import { WIDGET } from '@blue-learn/schema';

const registry = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.SPACE]: Space,
  [WIDGET.ICON]: Icon,
  
export { registry as WidgetRegistry };
