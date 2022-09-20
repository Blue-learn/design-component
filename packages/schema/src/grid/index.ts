import { WidgetItem } from '../types';

export enum GridStateTokens {
	SELECTED = 'SELECTED',
	NOT_SELECTED = 'NOT_SELECTED',
}

export type GridProps = {
	data: GridItemProps[];
	numColumns?: number;
};

export type GridItemProps = {
	state?: GridStateTokens;
	item: WidgetItem;
};
