import {
	AspectRatioToken,
	ImageSizeTokens,
	ResizeModeToken,
} from '../image';

describe('ImageSizeTokens', () => {
	const values = Object.values(ImageSizeTokens);

	it('has no duplicate runtime values', () => {
		// These are keys into the theme's imageTypeTokensMap; a collision
		// would make two size tokens resolve to the same width.
		expect(new Set(values).size).toBe(values.length);
	});

	it('every value equals its own key', () => {
		// Unlike FontSizeTokens/IconSizeTokens, the image scale has no
		// lowercase-l quirk. Keeping key === value is what lets consumers
		// safely pass a size through from a JSON payload.
		for (const key of Object.keys(ImageSizeTokens)) {
			expect(
				ImageSizeTokens[
					key as keyof typeof ImageSizeTokens
				],
			).toBe(key);
		}
	});

	it('exposes the fixed scale plus a FULL fluid option', () => {
		// FULL is the one token backed by a percentage rather than a pixel
		// value in the theme. Dropping it would leave no way to render a
		// fluid-width image.
		expect(values.sort()).toEqual([
			'FULL',
			'LG',
			'MD',
			'SM',
			'XL',
			'XS',
			'XXL',
			'XXS',
			'XXXL',
			'XXXS',
		]);
	});
});

describe('AspectRatioToken', () => {
	const values = Object.values(AspectRatioToken);

	it('has no duplicate runtime values', () => {
		expect(new Set(values).size).toBe(values.length);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(AspectRatioToken)) {
			expect(
				AspectRatioToken[
					key as keyof typeof AspectRatioToken
				],
			).toBe(key);
		}
	});

	it('ships each landscape ratio with its portrait counterpart', () => {
		// A16_9/A9_16 and A4_3/A3_4 are meant to be used as a pair (same crop
		// rotated). Shipping one without the other leaves a consumer unable to
		// express the rotated variant at all.
		for (const [landscape, portrait] of [
			[AspectRatioToken.A16_9, AspectRatioToken.A9_16],
			[AspectRatioToken.A4_3, AspectRatioToken.A3_4],
		]) {
			expect(values).toContain(landscape);
			expect(values).toContain(portrait);
		}
	});

	it('names encode the ratio as A<width>_<height>', () => {
		// Image.tsx maps these straight onto a numeric aspectRatio in the
		// theme. The name is the only documentation of what the number should
		// be, so a name that does not parse is a name nobody can verify.
		for (const value of values) {
			expect(String(value)).toMatch(/^A\d+_\d+$/);
		}
	});
});

describe('ResizeModeToken', () => {
	it('maps to the literal strings react-native <Image resizeMode> accepts', () => {
		// Image.tsx passes `resizeMode` straight to RN's <Image> on web. RN
		// only understands these exact lowercase strings; anything else is
		// ignored and the image falls back to 'cover', silently cropping
		// content the caller wanted contained.
		expect(
			Object.values(ResizeModeToken).sort(),
		).toEqual([
			'center',
			'contain',
			'cover',
			'repeat',
			'stretch',
		]);
	});

	it('COVER and CONTAIN are distinct - Image.tsx branches on exactly this comparison', () => {
		// On native, Image.tsx does
		// `resizeMode === ResizeModeToken.CONTAIN ? contain : cover`.
		// If these two ever collapsed to the same value every image would be
		// cropped.
		expect(ResizeModeToken.COVER).toBe('cover');
		expect(ResizeModeToken.CONTAIN).toBe('contain');
		expect(ResizeModeToken.COVER).not.toBe(
			ResizeModeToken.CONTAIN,
		);
	});
});
