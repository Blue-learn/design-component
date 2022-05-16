import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';
import { WidgetItem } from '../types';

export type justifyContentValues =
	| 'space-between'
	| 'space-around'
	| 'space-evenly'
	| 'flex-start'
	| 'flex-end'
	| 'center';

export type alignItemsValues =
	| 'stretch'
	| 'baseline'
	| 'flex-start'
	| 'flex-end'
	| 'center';

export interface StackBaseProps {
	direction?: 'row' | 'column';
	justifyContent?: justifyContentValues;
	alignItems?: alignItemsValues;
	wrap?: boolean;
	bgColor?: ColorTokens;
	borderRadius?: CornerRadiusTokens;
	childrenTemplate?: WidgetItem[];
	children: JSX.Element[] | JSX.Element
}

export interface HStackProps {
	justifyContent?: justifyContentValues;
	alignItems?: alignItemsValues;
	wrap?: boolean;
	bgColor?: ColorTokens;
	borderRadius?: CornerRadiusTokens;
	childrenTemplate?: WidgetItem[];
	children: JSX.Element[] | JSX.Element
}

export interface VStackProps {
	justifyContent?: justifyContentValues;
	alignItems?: alignItemsValues;
	wrap?: boolean;
	bgColor?: ColorTokens;
	borderRadius?: CornerRadiusTokens;
	childrenTemplate?: WidgetItem[];
	children: JSX.Element[] | JSX.Element
}
