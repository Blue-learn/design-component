import { IconTokens } from '@blue-learn/schema';
import { iconTokensMap } from '../IconRegistry';

describe('iconTokensMap', () => {
	const registered = Object.keys(iconTokensMap);

	it('has a component registered for every single IconTokens member', () => {
		// This is the highest-value invariant in the icon subsystem. Icon.tsx
		// does `const Icon = iconTokensMap[name]` and renders `<Icon />`
		// unconditionally. A token with no registry entry resolves to
		// `undefined`, and React throws "Element type is invalid" - a hard
		// render crash that takes down the whole subtree, not a missing glyph.
		//
		// The registry is ~143 hand-written lines, one per icon, so it is
		// exactly the kind of list that loses an entry in a merge.
		const missing = Object.values(IconTokens).filter(
			(token) => iconTokensMap[token] === undefined,
		);
		expect(missing).toEqual([]);
	});

	it('registers no icon that is not a declared IconTokens member', () => {
		// A stray key is dead weight: unreachable through the typed API, but
		// it still pulls its SVG module into every consumer's bundle.
		const known = new Set<string>(
			Object.values(IconTokens),
		);
		const orphans = registered.filter(
			(key) => !known.has(key),
		);
		expect(orphans).toEqual([]);
	});

	it('registers exactly as many icons as there are tokens', () => {
		// Belt-and-braces on the two checks above: it also catches the case
		// where a duplicate token value collapses two registry entries into
		// one (the later `[IconTokens.X]: Y` silently wins).
		expect(registered.length).toBe(
			Object.values(IconTokens).length,
		);
	});

	it('registers a renderable React component (function) for every token', () => {
		// Every icon-list module default-exports a plain function component.
		// An entry that is an object or a namespace (the classic
		// `import * as X` slip) typechecks loosely but still crashes React.
		for (const [token, Component] of Object.entries(
			iconTokensMap,
		)) {
			expect({
				token,
				type: typeof Component,
			}).toEqual({ token, type: 'function' });
		}
	});

	it('maps Dot and CircleFilled to the same component, deliberately', () => {
		// IconRegistry.ts imports CircleFilled twice, once aliased as `Dot`.
		// Both tokens are in active use in product code, so the aliasing has
		// to survive - but it is easy to "clean up" the duplicate import and
		// leave IconTokens.Dot pointing at nothing.
		expect(iconTokensMap[IconTokens.Dot]).toBe(
			iconTokensMap[IconTokens.CircleFilled],
		);
		expect(
			iconTokensMap[IconTokens.Dot],
		).toBeDefined();
	});

	it('gives the paired filled/outline icons distinct components', () => {
		// These pairs are how the product signals state (bookmarked vs not,
		// upvoted vs not). Pointing both at the same module - an easy
		// copy-paste error in a 143-line map - makes the state change
		// invisible.
		const pairs: [IconTokens, IconTokens][] = [
			[
				IconTokens.Bookmark,
				IconTokens.BookmarkFilled,
			],
			[IconTokens.Like, IconTokens.LikeFilled],
			[
				IconTokens.UpvoteOutline,
				IconTokens.UpvoteFilled,
			],
			[
				IconTokens.DownvoteOutline,
				IconTokens.DownvoteFilled,
			],
			[
				IconTokens.HeartOutline,
				IconTokens.HeartFilled,
			],
			[
				IconTokens.HomeOutline,
				IconTokens.HomeFilled,
			],
			[
				IconTokens.GroupOutline,
				IconTokens.GroupFilled,
			],
			[
				IconTokens.DiscussionOutline,
				IconTokens.DiscussionFilled,
			],
		];
		for (const [outline, filled] of pairs) {
			expect({
				outline,
				filled,
				distinct:
					iconTokensMap[outline] !==
					iconTokensMap[filled],
			}).toEqual({ outline, filled, distinct: true });
		}
	});
});
