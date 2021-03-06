import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { WidgetItem } from '../types';

/** @deprecated
 *
 */
export type justifyContentValues =
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'flex-start'
	| 'flex-end'
	| 'center';

/** @deprecated
 *
 */
export type alignItemsValues =
	| 'stretch'
	| 'baseline'
	| 'flex-start'
	| 'flex-end'
	| 'center';

/** @deprecated
 *
 */
interface StackProps {
	justifyContent?: justifyContentValues;
	alignItems?: alignItemsValues;
	wrap?: boolean;
	bgColor?: ColorTokens;
	borderRadius?: BorderRadiusTokens;
	childrenTemplate?: WidgetItem[];
	children: JSX.Element[] | JSX.Element;
	flexGrow?: number;
	width?: string | number;
	height?: string | number;
}

/** @deprecated
 *
 */
export interface StackBaseProps
	extends StackProps {
	direction?: 'row' | 'column';
}

/**
 * New Stack, swap direction based on type ='row' | 'column'
 **/
export enum StackType {
	row = 'row',
	column = 'column',
}

/**
 * Allow common alignment for both x-axis and y-axis
 **/
/** @deprecated
 *
 */
export enum StackAlignType {
	center = 'center',
	flexStart = 'flex-start',
	flexEnd = 'flex-end',
	spaceBetween = 'space-between',
	spaceEvenly = 'space-evenly',
}
export enum StackJustifyContent {
	center = 'center',
	flexStart = 'flex-start',
	flexEnd = 'flex-end',
	spaceBetween = 'space-between',
	spaceAround = 'space-around',
	spaceEvenly = 'space-evenly',
}
export enum StackAlignItems {
	center = 'center',
	flexStart = 'flex-start',
	flexEnd = 'flex-end',
	stretch = 'stretch',
	baseline = 'baseline',
}

/**
 * New Props for Stack Component
 **/
export type StackProp = {
	/** @description  row | column -> FlexDirection
	 * */
	type?: StackType;

	/** @description  React Component -> JSX
	 * Accepted Types -> React Component JSX.Element[], JSX.Element;
	 * */
	children?: JSX.Element[] | JSX.Element;

	/**
	 * @deprecated
	 */
	alignX?: StackAlignType;

	/**
	 * @deprecated
	 */
	alignY?: StackAlignType;

	/** @description  widgetItem -> used for Dynamic Render Component of WidgetItem->{id,type,props}
	 * */
	widgetItems?: WidgetItem[];

	/** @description justifyContent -> Primary Axis same as RN View Component
	 * */
	justifyContent?: StackJustifyContent;

	/** @description alignItems -> Secondary Axis same as RN View Component
	 * */
	alignItems?: StackAlignItems;
};
