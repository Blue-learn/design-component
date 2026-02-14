import {
	ColorTokens,
	GradientColorTokens,
} from '../colors';

describe('ColorTokens enum', () => {
	const values = Object.values(ColorTokens);

	it('has no duplicate runtime values', () => {
		// Every design token must map to a unique CSS/native color key;
		// a collision here would make two colors silently resolve to the
		// same theme lookup.
		expect(new Set(values).size).toBe(values.length);
	});

	it('has no duplicate values across the case-insensitive token space', () => {
		// Several tokens differ only by case (e.g. Grey_50 vs grey-50 style
		// keys elsewhere). Guard against accidental case-only duplicates
		// which are an easy typo to introduce and hard to spot in review.
		const lowered = values.map((v) => String(v).toLowerCase());
		const seen = new Map<string, string[]>();
		for (const v of lowered) {
			seen.set(v, [...(seen.get(v) || []), v]);
		}
		const collisions = [...seen.entries()].filter(
			([, list]) => list.length > 1,
		);
		expect(collisions).toEqual([]);
	});

	it('includes the base semantic palette', () => {
		expect(values).toEqual(
			expect.arrayContaining([
				'black',
				'white',
				'transparent',
			]),
		);
	});
});

describe('GradientColorTokens enum', () => {
	const values = Object.values(GradientColorTokens);

	it('has no duplicate runtime values', () => {
		expect(new Set(values).size).toBe(values.length);
	});

	it('splits into discussion (D_) and icebreaker (IB_) families', () => {
		const discussion = values.filter((v) =>
			String(v).startsWith('D_'),
		);
		const icebreaker = values.filter((v) =>
			String(v).startsWith('IB_'),
		);
		expect(discussion.length).toBeGreaterThan(0);
		expect(icebreaker.length).toBeGreaterThan(0);
		expect(discussion.length + icebreaker.length).toBe(
			values.length,
		);
	});
});
