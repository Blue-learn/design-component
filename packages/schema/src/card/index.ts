import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { GradientProps } from '../gradient';
import { ShadowTypeTokens } from '../shadow';
import { SizeTypeTokens } from '../size';
import { StackAlignType } from '../stack';
import { WidgetItem } from '../types';

/**
 * New Props for Stack Component
 **/

export type CardItemRenderType = {
	children?: JSX.Element[] | JSX.Element;
	widgetItems?: WidgetItem[];
};

export type CardProps = {
	header?: CardItemRenderType;
	body?: CardItemRenderType;
	footer?: CardItemRenderType;
	/** @description  React Component -> JSX
	 * Accepted Types -> React Component JSX.Element[], JSX.Element,WidgetItem[];
	 * */
	padding?: {
		top: SizeTypeTokens;
		bottom: SizeTypeTokens;
		left: SizeTypeTokens;
		right: SizeTypeTokens;
	};
	paddingHorizontal?: SizeTypeTokens;
	paddingVertical?: SizeTypeTokens;
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
	flex?: StackAlignType;
	/** @description flex -> align in primary Axis
	 * */
};
