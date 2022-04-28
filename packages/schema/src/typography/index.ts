import { ColorTokens } from '../colors';
import {
	FontFamilyTokens,
	FontTokens,
	FontWeightTokens,
} from '../TextStyle';

export type TypographyBaseProps = {
	label?: String;
	color?: ColorTokens;
	fontSize?: FontTokens;
	fontWeight?: FontWeightTokens;
	fontFamily?: FontFamilyTokens;
	textDecorationLine?: TypographyDecorationToken;
	textTransform?: TypographyTransformToken;
};

export type TypographyProps = {
	label?: String;
	color?: ColorTokens;
	fontSize?: FontTokens;
	fontWeight?: FontWeightTokens;
	fontFamily?: FontFamilyTokens;
	textDecorationLine?: TypographyDecorationToken;
	textTransform?: TypographyTransformToken;
};

export enum TypographyDecorationToken {
	none = 'none',
	underline = 'underline',
	lineThrough = 'line-through',
}

export enum TypographyTransformToken {
	none = 'none',
	uppercase = 'uppercase',
	lowercase = 'lowercase',
	capitalize = 'capitalize',
}
