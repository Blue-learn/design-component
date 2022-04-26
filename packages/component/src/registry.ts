import { Button } from '../src';
import {WIDGET} from '@blue-learn/schema';

const registry = {
	[WIDGET.BUTTON]: Button,
};
export { registry as WidgetRegistry };
