import { WIDGET } from './enums';

type NormalWidgetItem = {
	id: string;
	type: WIDGET;
	props: any;
};

export type WidgetItem = NormalWidgetItem;
