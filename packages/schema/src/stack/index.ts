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

interface StackProps {
	justifyContent?: justifyContentValues;
	alignItems?: alignItemsValues;
	wrap?: boolean;
	bgColor?: ColorTokens;
	borderRadius?: CornerRadiusTokens;
	childrenTemplate?: WidgetItem[];
	children: JSX.Element[] | JSX.Element
	flexGrow?: number,
	width?: string | number,
	height?: string | number
}

export interface StackBaseProps extends StackProps{
	direction?: 'row' | 'column';
}


