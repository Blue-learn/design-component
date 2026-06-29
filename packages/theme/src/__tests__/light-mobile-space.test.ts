import { SizeTypeTokens } from '@blue-learn/schema';
import { sizeTypeTokensMap } from '../light-mobile/space';

describe('light-mobile sizeTypeTokensMap', () => {
	it('has an entry for every SizeTypeTokens member', () => {
		// Space/padding/margin lookups (`theme.space[token]`) are unguarded
		// across component/src - Card, Divider, Button, ProgressIndicator all
		// index straight into this map. A missing token silently yields
		// `undefined`, which react-native-web drops, so the gap renders as 0
		// with no error anywhere.
		for (const token of Object.values(SizeTypeTokens)) {
			expect(sizeTypeTokensMap[token]).toBeDefined();
		}
	});

	it('pins the exact pixel value of every step on the scale', () => {
		// These numbers are the design system's spacing scale; they are
		// applied verbatim as pixels. Changing one shifts the layout of every
		// component that uses it, which is exactly the kind of change that
		// should have to be made deliberately.
		expect(sizeTypeTokensMap).toEqual({
			[SizeTypeTokens.NONE]: 0,
			[SizeTypeTokens.XS]: 2,
			[SizeTypeTokens.SM]: 4,
			[SizeTypeTokens.MD]: 8,
			[SizeTypeTokens.ML]: 10,
			[SizeTypeTokens.LG]: 12,
			[SizeTypeTokens.XL]: 16,
			[SizeTypeTokens.XXL]: 20,
			[SizeTypeTokens.XXXL]: 24,
			[SizeTypeTokens.XXXXL]: 32,
			[SizeTypeTokens.XXXXXL]: 48,
			[SizeTypeTokens.XXXXXXL]: 56,
		});
	});

	it('is a non-negative scale', () => {
		// A negative space token would render as a negative margin/padding
		// and pull adjacent nodes on top of each other.
		for (const value of Object.values(sizeTypeTokensMap)) {
			expect(value).toBeGreaterThanOrEqual(0);
		}
	});

	it('yields integer pixel values only', () => {
		// Fractional spacing produces sub-pixel rounding differences between
		// iOS/Android/web, so the scale is deliberately whole numbers.
		for (const value of Object.values(sizeTypeTokensMap)) {
			expect(Number.isInteger(value)).toBe(true);
		}
	});
});
