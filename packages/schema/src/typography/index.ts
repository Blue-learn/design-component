import { ColorTokens } from '../colors';
import { FontTokens } from '../FontSize';

export type TypographyProps = {};

export type TypographyBaseProps = {
	value: String;
	type?: TypographyType;
	color?: ColorTokens;
	fontSize?: FontTokens;
	fontWeight?: number;
	fontFamily?: string;
	letterSpacing?: number;
};

export declare enum TypographyType {
	normal = 'normal',
	bold = 'bold',
	semibold = 'semibold',
	underline = 'underline',
	strikeThrough = 'strikeThrough',
	UpperCase = 'upperCase',
}
