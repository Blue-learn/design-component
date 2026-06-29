import {
	BorderRadiusTokens,
	ColorTokens,
	FontSizeTokens,
	TagTypeTokens,
} from '@blue-learn/schema';
import { tagTypeTokensMap } from '../light-mobile/tag';
import { borderRadiusTypeTokensMap } from '../light-mobile/borderRadius';
import { sizeTypeTokensMap } from '../light-mobile/space';
import { fontSizeTokensMap } from '../light-mobile/typography';

describe('light-mobile tagTypeTokensMap', () => {
	it('has an entry for every TagTypeTokens variant', () => {
		// Tag.tsx resolves `theme.tag[type]` and spreads it into Tag.base.
		// A missing variant spreads `undefined` and the tag renders as
		// unstyled text with no pill background at all.
		for (const token of Object.values(TagTypeTokens)) {
			expect(tagTypeTokensMap[token]).toBeDefined();
		}
	});

	it('every variant declares label colour, background, radius, size and padding', () => {
		// TagThemeProps marks all of these except `padding` as required, but
		// the map is plain data - nothing enforces it at runtime.
		for (const [token, v] of Object.entries(
			tagTypeTokensMap,
		)) {
			expect({
				token,
				keys: Object.keys(v).sort(),
			}).toEqual({
				token,
				keys: [
					'bgColor',
					'borderRadius',
					'fontSize',
					'labelColor',
					'padding',
				],
			});
		}
	});

	it('every referenced token resolves in its own theme map', () => {
		const colors = new Set(Object.values(ColorTokens));
		for (const [token, v] of Object.entries(
			tagTypeTokensMap,
		)) {
			expect({
				token,
				label: colors.has(v.labelColor),
				bg: colors.has(v.bgColor),
				radius:
					borderRadiusTypeTokensMap[v.borderRadius] !==
					undefined,
				size:
					fontSizeTokensMap[v.fontSize] !== undefined,
				padH:
					sizeTypeTokensMap[v.padding!.horizontal!] !==
					undefined,
				padV:
					sizeTypeTokensMap[v.padding!.vertical!] !==
					undefined,
			}).toEqual({
				token,
				label: true,
				bg: true,
				radius: true,
				size: true,
				padH: true,
				padV: true,
			});
		}
	});

	it('SM and MD are visually distinct variants, not duplicates', () => {
		// SM/MD are the two non-deprecated tag sizes. If they resolved to the
		// same fill and font size there would be no way to tell them apart on
		// screen and the `type` prop would silently do nothing.
		const sm = tagTypeTokensMap[TagTypeTokens.SM];
		const md = tagTypeTokensMap[TagTypeTokens.MD];
		expect(sm.bgColor).not.toBe(md.bgColor);
		expect(sm.fontSize).not.toBe(md.fontSize);
		expect(sm.fontSize).toBe(FontSizeTokens.XXS);
		expect(md.fontSize).toBe(FontSizeTokens.XS);
	});

	it('MD is the wider variant (larger horizontal padding than SM)', () => {
		const sm = tagTypeTokensMap[TagTypeTokens.SM];
		const md = tagTypeTokensMap[TagTypeTokens.MD];
		expect(
			sizeTypeTokensMap[md.padding!.horizontal!],
		).toBeGreaterThan(
			sizeTypeTokensMap[sm.padding!.horizontal!],
		);
	});

	it('only the deprecated SECONDARY variant breaks the pill shape', () => {
		// SM/MD/GRADIENT are pills (BR4). SECONDARY is deliberately a rounded
		// rectangle - that difference is the reason it exists, so a change
		// here would silently restyle every legacy call site.
		expect(
			tagTypeTokensMap[TagTypeTokens.SM].borderRadius,
		).toBe(BorderRadiusTokens.BR4);
		expect(
			tagTypeTokensMap[TagTypeTokens.MD].borderRadius,
		).toBe(BorderRadiusTokens.BR4);
		expect(
			tagTypeTokensMap[TagTypeTokens.GRADIENT]
				.borderRadius,
		).toBe(BorderRadiusTokens.BR4);
		expect(
			tagTypeTokensMap[TagTypeTokens.SECONDARY]
				.borderRadius,
		).toBe(BorderRadiusTokens.BR1);
	});
});
