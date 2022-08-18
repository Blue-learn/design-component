import { ReactNode } from 'react';
import { ColorTokens, GradientColorTokens } from '../colors';
import { WidgetItem } from '../types';

export type GradientCoordinates = {
	x: number;
	y: number;
};

export type GradientProps = {
	/** @description React Component -> JSX
	 * Accepted Types -> React Component JSX.Element[], JSX.Element;
	 * */
	children?:
		| JSX.Element[]
		| JSX.Element
		| ReactNode;
	/** @description widgetItem -> used for Dynamic Render Component of WidgetItem->{id,type,props}
	 * */
	widgetItems?: WidgetItem[];
	colors?: GradientColorTokens | ColorTokens[];
	start?: GradientCoordinates;
	end?: GradientCoordinates;
	style?: any;
};
