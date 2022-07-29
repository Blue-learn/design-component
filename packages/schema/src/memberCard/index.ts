import { ColorTokens } from '../colors';
import { BorderRadiusTokens } from '../borderRadius';
import { PaddingProps } from '../padding';

export type MemberCardProps = {
	padding?: PaddingProps;
	bgColor?: ColorTokens;
	borderRadius?: BorderRadiusTokens;
	avatar?: string;
	title?: string;
	subtitle?: string;
	location?: string;
	onPress?: Function;
	cta?: Function;
	headline?: string;
	interests?: string[];
};
