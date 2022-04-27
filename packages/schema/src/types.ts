import { WIDGET } from './enums';

type NormalWidgetItem = {
	id: string;
	type: WIDGET;
	props: any;
};
export type WidgetItem = NormalWidgetItem;
export type WidgetProps = {
	renderItem?(item: WidgetItem): any;
	isVisible?: boolean;
	modelUpdateWrapper?(prop: Function): Function;
	performAction?(action: TapAction): void;
};
export type TapAction = {
	type: string;
	data: any;
};
