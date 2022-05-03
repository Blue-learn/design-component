import { Button } from '../src';
import { Card } from '../src';
import {WIDGET} from '@blue-learn/schema';

const registry = {
	[WIDGET.BUTTON]: Button,
	[WIDGET.CARD]: Card,
};
export { registry as WidgetRegistry };
