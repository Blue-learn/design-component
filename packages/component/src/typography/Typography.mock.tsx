import {
	FontSizeTokens,
	FontDecorationToken,
	TypographyProps,
	FontTransformToken,
	EllipsizeModeTokens,
	TextAlignTokens,
	FontFamilyTokens,
	TypographyTypeTokens,
	ColorTokens,
} from '@blue-learn/schema';

export const args: TypographyProps = {
	label:
		'Lorem ipsum dolor sit amet consecrate radicalising elite.',
	type: TypographyTypeTokens.DEFAULT,
	textAlign: TextAlignTokens.auto,
	textTransform: FontTransformToken.none,
	textDecorationLine: FontDecorationToken.none,
	numberOfLines: 0,
};

export const argTypes = {
	type: {
		control: 'select',
		options: [
			...Object.values(TypographyTypeTokens),
		],
	},
	ellipsizeMode: {
		control: 'select',
		options: [
			...Object.values(EllipsizeModeTokens),
		],
	},
	fontSize: {
		control: 'select',
		options: [
			...Object.values(FontSizeTokens).filter(
				(k) => typeof k === 'string',
			),
		],
	},
	fontFamily: {
		control: 'select',
		options: [...Object.values(FontFamilyTokens)],
	},
	color: {
		control: 'select',
		options: [...Object.values(ColorTokens)],
	},
	lineHeight: {
		control: 'number',
	},
	textAlign: {
		control: 'select',
		options: [...Object.values(TextAlignTokens)],
	},
	textTransform: {
		control: 'select',
		options: [...Object.values(FontTransformToken)],
	},
	textDecorationLine: {
		control: 'select',
		options: [
			...Object.values(FontDecorationToken),
		],
	},
};
