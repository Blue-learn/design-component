import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';
import { ShadowTypeTokens } from '../shadow';
import { SpaceTypeTokens } from '../space';
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
		top: SpaceTypeTokens;
		bottom: SpaceTypeTokens;
		left: SpaceTypeTokens;
		right: SpaceTypeTokens;
	};
	paddingHorizontal?: SpaceTypeTokens;
	paddingVertical?: SpaceTypeTokens;
	bgColor?: ColorTokens;
	/** @description  bgColor -> for adding background color to the card
	 */
	borderRadius?: CornerRadiusTokens;
	/** @description  borderRadius -> for adding border radius to the card
	 */
	shadow?: ShadowTypeTokens;
	/** @description  shadow -> to add shadow type to the card
	 */
	flex?: StackAlignType;
	/** @description flex -> align in primary Axis
	 * */
};
