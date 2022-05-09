import { ColorTokens } from '../colors';
import { CornerRadiusTokens } from '../cornerRadius';

export interface StackBaseProps {
	direction: 'row' | 'column';
	justifyContent: string;
	alignItems: string;
	wrap: boolean;
	bgColor: ColorTokens;
	borderRadius: CornerRadiusTokens;
}

export interface HStackProps {
	justifyContent: string;
	alignItems: string;
	wrap: boolean;
	bgColor: ColorTokens;
	borderRadius: CornerRadiusTokens;
}

export interface VStackProps {
	justifyContent: string;
	alignItems: string;
	wrap: boolean;
	bgColor: ColorTokens;
	borderRadius: CornerRadiusTokens;
}
