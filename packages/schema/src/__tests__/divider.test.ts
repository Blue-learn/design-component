import { DividerSizeTokens } from '../divider';

describe('DividerSizeTokens', () => {
	const values = Object.values(DividerSizeTokens);

	it('exposes exactly SM/MD/LG', () => {
		// Divider.tsx indexes `theme.dividerSize[size]` with no fallback, and
		// the theme map is keyed by exactly these three. Adding a member here
		// without a matching theme entry gives `height: undefined` - an
		// invisible divider with no error anywhere.
		expect(values.sort()).toEqual(['LG', 'MD', 'SM']);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(DividerSizeTokens)) {
			expect(
				DividerSizeTokens[
					key as keyof typeof DividerSizeTokens
				],
			).toBe(key);
		}
	});

	it('has no duplicate values', () => {
		expect(new Set(values).size).toBe(values.length);
	});

	it('SM exists because it is the Divider component default', () => {
		// Divider.tsx: `size = DividerSizeTokens.SM`. Every divider rendered
		// without an explicit size depends on this member.
		expect(DividerSizeTokens.SM).toBe('SM');
	});
});
