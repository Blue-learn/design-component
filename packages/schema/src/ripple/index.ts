import { ColorTokens } from '../colors';
import { WidgetItem } from '../types';

export type RippleProps = {
	/** @description React Component -> JSX
	 * Accepted Types -> React Component JSX.Element[], JSX.Element;
	 * */
	children?: JSX.Element[] | JSX.Element;

	/** @description widgetItem -> used for Dynamic Render Component of WidgetItem->{id,type,props}
	 * */
	widgetItems?: WidgetItem[];
	rippleColor?: ColorTokens;
	rippleOpacity?: number;
};
