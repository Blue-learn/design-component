import { ImageSizeTokens } from '../image';
import { LottieSizeTokens } from '../lottie';

describe('LottieSizeTokens', () => {
	const values = Object.values(LottieSizeTokens);

	it('exposes the XS..XXXL scale plus FULL', () => {
		expect(values.sort()).toEqual([
			'FULL',
			'LG',
			'MD',
			'SM',
			'XL',
			'XS',
			'XXL',
			'XXXL',
		]);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(LottieSizeTokens)) {
			expect(
				LottieSizeTokens[
					key as keyof typeof LottieSizeTokens
				],
			).toBe(key);
		}
	});

	it('has no duplicate values', () => {
		expect(new Set(values).size).toBe(values.length);
	});

	it('is a strict subset of ImageSizeTokens', () => {
		// Lottie animations sit inline where a static image would, so their
		// size vocabulary has to be a subset of the image scale - otherwise
		// swapping a placeholder image for its animated version changes the
		// layout. LottieSizeTokens deliberately omits the two smallest image
		// steps (XXXS/XXS), which are below any usable animation size.
		const imageValues = new Set<string>(
			Object.values(ImageSizeTokens),
		);
		for (const value of values) {
			expect({
				value,
				alsoAnImageSize: imageValues.has(value),
			}).toEqual({ value, alsoAnImageSize: true });
		}
		expect(values.length).toBeLessThan(
			imageValues.size,
		);
	});

	it('keeps FULL so an animation can fill its container', () => {
		// FULL is the only fluid option; without it every Lottie has to be a
		// fixed pixel size, which breaks responsive layouts.
		expect(LottieSizeTokens.FULL).toBe('FULL');
	});
});
