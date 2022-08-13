export type WidgetItem = {
	id: string;
	type: string;
	position?: string;
	props?: object;
};
export type WidgetProps = {
	renderItem?(item: WidgetItem): any;
	isVisible?: boolean;
	modelUpdateWrapper?(prop: Function): Function;
	triggerAction?(action: Action): void;
	action?: Action;
};
export type Action<DataType = any> = {
	type: string;
	routeId?: string;
	payload: DataType extends object
		? { [k in keyof DataType]: DataType[k] }
		: any;
};
export type WidgetRegistry = {
	[key: string]: {
		Component?: any;
		Mock?: { args?: any; argsType?: any };
	};
};
