import {
	AspectRatioToken,
	ImageSizeTokens,
} from '@blue-learn/schema';
import {
	aspectRationTokensMap,
	imageTypeTokensMap,
} from '../light-mobile/image';

describe('light-mobile imageTypeTokensMap', () => {
	it('has an entry for every ImageSizeTokens member', () => {
		// Image.tsx resolves `theme.imageSize[size]` into the rendered width.
		// A missing token collapses the image to auto-width, which - combined
		// with `height: 'auto'` - means it renders at zero size.
		for (const token of Object.values(ImageSizeTokens)) {
			expect(
				imageTypeTokensMap[token],
			).toBeDefined();
		}
	});

	it('pins the exact width of every image size', () => {
		expect(imageTypeTokensMap).toEqual({
			[ImageSizeTokens.XXXS]: 14,
			[ImageSizeTokens.XXS]: 20,
			[ImageSizeTokens.XS]: 24,
			[ImageSizeTokens.SM]: 36,
			[ImageSizeTokens.MD]: 48,
			[ImageSizeTokens.LG]: 72,
			[ImageSizeTokens.XL]: 96,
			[ImageSizeTokens.XXL]: 128,
			[ImageSizeTokens.XXXL]: 180,
			[ImageSizeTokens.FULL]: '100%',
		});
	});

	it('FULL is the only percentage entry; every other size is a number', () => {
		// The map is typed `number | string`, and FULL is the one token that
		// leans on the string form. If a numeric token were ever changed to a
		// string (or FULL to a number) the value would still typecheck but
		// would render a fixed-width image where a fluid one was intended.
		for (const [key, value] of Object.entries(
			imageTypeTokensMap,
		)) {
			if (key === ImageSizeTokens.FULL) {
				expect(value).toBe('100%');
			} else {
				expect(typeof value).toBe('number');
			}
		}
	});

	it('is strictly increasing from XXXS to XXXL', () => {
		const order = [
			ImageSizeTokens.XXXS,
			ImageSizeTokens.XXS,
			ImageSizeTokens.XS,
			ImageSizeTokens.SM,
			ImageSizeTokens.MD,
			ImageSizeTokens.LG,
			ImageSizeTokens.XL,
			ImageSizeTokens.XXL,
			ImageSizeTokens.XXXL,
		].map((t) => imageTypeTokensMap[t] as number);
		for (let i = 1; i < order.length; i++) {
			expect(order[i]).toBeGreaterThan(order[i - 1]);
		}
	});
});

describe('light-mobile aspectRationTokensMap', () => {
	it('has an entry for every AspectRatioToken member', () => {
		// Image.tsx defaults to A1_1 but passes any token straight through to
		// the `aspectRatio` style. `undefined` there means the image has no
		// intrinsic shape and collapses vertically.
		for (const token of Object.values(
			AspectRatioToken,
		)) {
			expect(
				typeof aspectRationTokensMap[token],
			).toBe('number');
		}
	});

	it('resolves each token to width/height as a number', () => {
		// The token name encodes the ratio; the value has to match it or an
		// A16_9 hero image renders portrait.
		expect(
			aspectRationTokensMap[AspectRatioToken.A1_1],
		).toBe(1);
		expect(
			aspectRationTokensMap[AspectRatioToken.A2_1],
		).toBe(2);
		expect(
			aspectRationTokensMap[AspectRatioToken.A4_3],
		).toBeCloseTo(4 / 3);
		expect(
			aspectRationTokensMap[AspectRatioToken.A3_4],
		).toBeCloseTo(3 / 4);
		expect(
			aspectRationTokensMap[AspectRatioToken.A16_9],
		).toBeCloseTo(16 / 9);
		expect(
			aspectRationTokensMap[AspectRatioToken.A9_16],
		).toBeCloseTo(9 / 16);
	});

	it('pairs each landscape ratio with its exact reciprocal portrait ratio', () => {
		// A4_3/A3_4 and A16_9/A9_16 are meant to be the same crop rotated. If
		// one drifts, a portrait and landscape variant of the same asset stop
		// lining up in a grid.
		expect(
			aspectRationTokensMap[AspectRatioToken.A4_3] *
				aspectRationTokensMap[AspectRatioToken.A3_4],
		).toBeCloseTo(1);
		expect(
			aspectRationTokensMap[AspectRatioToken.A16_9] *
				aspectRationTokensMap[AspectRatioToken.A9_16],
		).toBeCloseTo(1);
	});
});
