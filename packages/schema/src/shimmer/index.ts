import { BorderRadiusTokens } from '../borderRadius';
import { ColorTokens } from '../colors';

export type ShimmerProps = {
	height: number | string;
	width: number | string;
	borderRadius?: BorderRadiusTokens;
	backgroundColor?: ColorTokens;
};
