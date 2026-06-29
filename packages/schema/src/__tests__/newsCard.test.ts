import { LikeStateTokens } from '../newsCard';

describe('LikeStateTokens', () => {
	const values = Object.values(LikeStateTokens);

	it('exposes exactly SELECTED and NOT_SELECTED', () => {
		// NewsCard/CommentCard drive their filled-vs-outline heart icon off
		// this token. A third member would fall through to the outline branch
		// and the "liked" state would stop rendering.
		expect(values.sort()).toEqual([
			'NOT_SELECTED',
			'SELECTED',
		]);
	});

	it('every value equals its own key', () => {
		for (const key of Object.keys(LikeStateTokens)) {
			expect(
				LikeStateTokens[
					key as keyof typeof LikeStateTokens
				],
			).toBe(key);
		}
	});

	it('models like state as an explicit token rather than a boolean', () => {
		// Both states are truthy strings, so `if (likeState)` is *not* a valid
		// way to test for "liked" - callers must compare against the token.
		// Pinning this stops the enum being quietly replaced by a boolean,
		// which would silently invert every truthiness check written against
		// it.
		expect(Boolean(LikeStateTokens.NOT_SELECTED)).toBe(
			true,
		);
		expect(LikeStateTokens.SELECTED).not.toBe(
			LikeStateTokens.NOT_SELECTED,
		);
	});

	it('reuses the same SELECTED/NOT_SELECTED vocabulary as the grid selection tokens', () => {
		// Selection state is spelled the same way across the library
		// (GridStateTokens, LikeStateTokens). Diverging here would mean a
		// payload field named "state" meant different strings depending on
		// which card consumed it.
		expect(LikeStateTokens.SELECTED).toBe('SELECTED');
		expect(LikeStateTokens.NOT_SELECTED).toBe(
			'NOT_SELECTED',
		);
	});
});
