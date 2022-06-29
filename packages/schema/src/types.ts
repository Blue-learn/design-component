import { WIDGET } from './enums';

type NormalWidgetItem = {
	id: string;
	type: WIDGET;
	props?: any;
};
export type WidgetItem = NormalWidgetItem;
export type WidgetProps = {
	renderItem?(item: WidgetItem): any;
	isVisible?: boolean;
	modelUpdateWrapper?(prop: Function): Function;
	performAction?(action: TapAction): void;
	action?: TapAction;
};
export type TapAction<DataType = any> = {
	type: string;
	data: DataType extends object
		? { [k in keyof DataType]: DataType[k] }
		: any;
};
export type WidgetRegistry = {
	[key: string]: {
		Component?: any;
	};
};
