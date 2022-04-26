import { ColorTokens } from '../colors';
import { FontTokens } from '../FontSize';

export type TypographyProps = {};

export type TypographyBaseProps = {
	value: String;
	color?: ColorTokens;
	fontSize?: FontTokens;
	fontWeight?: number;
	fontFamily?: string;
	letterSpacing?: number;
	textDecorationLine?: TypographyDecoration;
	textTransform?: TypographyTransform;
};

export enum TypographyDecoration {
	none = 'none',
	underline = 'underline',
	lineThrough = 'line-through',
}

export enum TypographyTransform {
	none = 'none',
	uppercase = 'uppercase',
	lowercase = 'lowercase',
	capitalize = 'capitalize',
}
