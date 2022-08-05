import { WidgetItem } from '../types';

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

export enum StackFlexWrap {
	wrap = 'wrap',
	nowrap = 'nowrap',
	wrapReverse = 'wrap-reverse',
}

/**
 * New Props for Stack Component
 **/
export type StackProps = {
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
	/** @description flexWrap controls whether children can wrap around after they hit the end of a flex container.
	 * */

	flexWrap?: StackFlexWrap;
};
