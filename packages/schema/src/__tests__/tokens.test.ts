import { ButtonTypeTokens, ButtonWidthTypeToken } from '../button';
import { SizeTypeTokens } from '../size';
import { BorderRadiusTokens } from '../borderRadius';
import { ShadowTypeTokens } from '../shadow';
import {
	FontSizeTokens,
	FontFamilyTokens,
	TypographyTypeTokens,
} from '../typography';
import { TagTypeTokens } from '../tag';
import { ChipTypeTokens } from '../chip';

function expectUniqueValues(name: string, e: Record<string, string>) {
	const values = Object.values(e);
	const unique = new Set(values);
	expect({ name, size: unique.size }).toEqual({
		name,
		size: values.length,
	});
}

describe('token enum contracts', () => {
	it('ButtonTypeTokens has unique values for every button variant', () => {
		expectUniqueValues('ButtonTypeTokens', ButtonTypeTokens as any);
		// Guards the Button.tsx `theme.button[type]` lookup: every token
		// must resolve to exactly one theme entry.
		expect(Object.values(ButtonTypeTokens).length).toBeGreaterThanOrEqual(
			20,
		);
	});

	it('ButtonWidthTypeToken only exposes FULL/CONTENT', () => {
		expect(Object.values(ButtonWidthTypeToken).sort()).toEqual([
			'CONTENT',
			'FULL',
		]);
	});

	it('SizeTypeTokens has unique values', () => {
		expectUniqueValues('SizeTypeTokens', SizeTypeTokens as any);
	});

	it('BorderRadiusTokens has unique values', () => {
		expectUniqueValues('BorderRadiusTokens', BorderRadiusTokens as any);
	});

	it('ShadowTypeTokens has unique values', () => {
		expectUniqueValues('ShadowTypeTokens', ShadowTypeTokens as any);
	});

	it('FontSizeTokens has unique values despite near-identical casing', () => {
		// XXXXL/XXXXXL/XXXXXXL/XXXXXXXL deliberately differ from their key
		// by a trailing lowercase `l` (e.g. XXXXL = 'XXXXl'). That's a very
		// easy typo to reintroduce as an accidental duplicate - pin it down.
		expectUniqueValues('FontSizeTokens', FontSizeTokens as any);
		expect(FontSizeTokens.XXXXL).toBe('XXXXl');
	});

	it('FontFamilyTokens has unique values', () => {
		expectUniqueValues('FontFamilyTokens', FontFamilyTokens as any);
	});

	it('TypographyTypeTokens has unique values across DEFAULT/BODY*/HEADING*/SUBHEADING* families', () => {
		expectUniqueValues(
			'TypographyTypeTokens',
			TypographyTypeTokens as any,
		);
	});

	it('TagTypeTokens has unique values', () => {
		expectUniqueValues('TagTypeTokens', TagTypeTokens as any);
	});

	it('ChipTypeTokens has unique values', () => {
		expectUniqueValues('ChipTypeTokens', ChipTypeTokens as any);
	});
});
