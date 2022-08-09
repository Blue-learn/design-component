import { ColorTokens } from '../colors';
import { GradientProps } from '../gradient';

export type IcebreakerCardProps = {
	title?: string;
	subtitle?: string;
	ctaText?: string;
	onPress?: Function;
	bgColor?: ColorTokens;
	gradient?: GradientProps;
};
