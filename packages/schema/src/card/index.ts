import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { GradientProps } from '../gradient';
import { ShadowTypeTokens } from '../shadow';
import {
	StackAlignItems,
	StackJustifyContent,
} from '../stack';
import { WidgetItem } from '../types';
import { PaddingProps } from '../padding';

export type CardItemRenderType = {
	children?: JSX.Element[] | JSX.Element;
	widgetItems?: WidgetItem[];
};

export type CardProps = {
	onPress?: Function;
	header?: CardItemRenderType;
	body?: CardItemRenderType;
	footer?: CardItemRenderType;
	/** @description  React Component -> JSX
	 * Accepted Types -> React Component JSX.Element[], JSX.Element,WidgetItem[];
	 * */
	padding?: PaddingProps;
	margin?: PaddingProps;

	bgColor?: ColorTokens;
	/** 
	@description  bgColor -> for adding background color to the card
	 */
	borderRadius?: BorderRadiusTokens;
	gradient?: GradientProps;

	/** @description  borderRadius -> for adding border radius to the card
	 */
	shadow?: ShadowTypeTokens;
	/** @description  shadow -> to add shadow type to the card
	 */
	justifyContent?: StackJustifyContent;
	alignItems?: StackAlignItems;
};
