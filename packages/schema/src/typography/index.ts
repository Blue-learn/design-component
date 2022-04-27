import { ColorTokens } from '../colors';
import {
	FontFamilyTokens,
	FontTokens,
	FontWeightTokens,
} from '../TextStyle';

export type TypographyProps = {};

export type TypographyBaseProps = {
	label?: String;
	color?: ColorTokens;
	fontSize?: FontTokens;
	fontWeight?: FontWeightTokens;
	fontFamily?: FontFamilyTokens;
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
