import { WIDGET } from '@blue-learn/schema';
import { WidgetRegistry } from '../registry';

/**
 * registry.ts is the lookup that turns a server-driven UI payload
 * (`{ id, type: 'BUTTON', props }`) into a component. mock.tsx's renderItem
 * does exactly `WidgetRegistry[item.type].Component` with no guard, so every
 * test here is about that lookup never returning something unrenderable.
 */
const isRenderable = (value: unknown) =>
	typeof value === 'function' ||
	(typeof value === 'object' &&
		value !== null &&
		(value as { $$typeof?: symbol }).$$typeof ===
			Symbol.for('react.memo'));

describe('WidgetRegistry', () => {
	it('registers an entry for every WIDGET discriminant', () => {
		// A WIDGET member with no registry entry makes renderItem throw
		// "cannot read property Component of undefined" - one bad `type` in a
		// payload takes down the whole screen, not just that widget.
		const missing = Object.values(WIDGET).filter(
			(widget) => WidgetRegistry[widget] === undefined,
		);
		expect(missing).toEqual([]);
	});

	it('registers no entry that is not a declared WIDGET', () => {
		// A stray key is unreachable through the typed API but still forces
		// its component - and its entire import graph - into every consumer's
		// bundle.
		const known = new Set<string>(
			Object.values(WIDGET),
		);
		const orphans = Object.keys(WidgetRegistry).filter(
			(key) => !known.has(key),
		);
		expect(orphans).toEqual([]);
	});

	it('every entry exposes a renderable `Component`', () => {
		// The registry stores the module *namespace* of each component
		// package ({ Component, Mock, Shimmer? }), not the component itself.
		// Assigning the wrong thing (e.g. a default import) still typechecks
		// because WidgetRegistry's values are `any`, and then fails at render.
		for (const [widget, entry] of Object.entries(
			WidgetRegistry,
		)) {
			expect({
				widget,
				renderable: isRenderable(entry.Component),
			}).toEqual({ widget, renderable: true });
		}
	});

	it('every entry ships a Mock with Storybook args', () => {
		// The Mock namespace is what drives the Storybook stories and the
		// docs site. A widget registered without one silently disappears from
		// the component gallery, which is how this library is documented.
		for (const [widget, entry] of Object.entries(
			WidgetRegistry,
		)) {
			expect({
				widget,
				hasMock: entry.Mock !== undefined,
				hasArgs: entry.Mock?.args !== undefined,
			}).toEqual({
				widget,
				hasMock: true,
				hasArgs: true,
			});
		}
	});

	it('maps each widget to a distinct module', () => {
		// Two widget types resolving to the same module means one of the 25
		// registry lines has a copy-pasted right-hand side, so a payload
		// asking for a CARD would quietly render a STACK.
		const entries = Object.values(WidgetRegistry);
		expect(new Set(entries).size).toBe(entries.length);
	});

	it('maps the renamed widget tokens to the right components', () => {
		// TEXT -> Typography and INPUT -> TextInput are the two entries whose
		// component name does not match the token, which makes them the two
		// most likely to be mis-keyed.
		const nameOf = (widget: WIDGET) => {
			const component = WidgetRegistry[widget]
				.Component as {
				type?: { name?: string };
				name?: string;
			};
			// memo() wrappers keep the original function under `.type`.
			return component.type?.name ?? component.name;
		};
		expect(nameOf(WIDGET.TEXT)).toBe('Typography');
		expect(nameOf(WIDGET.INPUT)).toBe('TextInput');
		expect(nameOf(WIDGET.BUTTON)).toBe('Button');
		expect(nameOf(WIDGET.STACK)).toBe('Stack');
		expect(nameOf(WIDGET.SPACE)).toBe('Space');
		expect(nameOf(WIDGET.CARD)).toBe('Card');
		expect(nameOf(WIDGET.GRID)).toBe('Grid');
		expect(nameOf(WIDGET.ICON)).toBe('Icon');
		expect(nameOf(WIDGET.DIVIDER)).toBe('Divider');
	});

	it('covers all 25 widget kinds', () => {
		// An exact count fails with a much more obvious diff than the
		// per-token check when a whole registry line is lost in a merge.
		expect(Object.keys(WidgetRegistry).length).toBe(25);
	});

	it('exposes a Shimmer placeholder for exactly the card widgets that have one', () => {
		// Card widgets render remote data, so they ship a skeleton for the
		// loading state; the primitives do not. Losing a Shimmer export means
		// the corresponding list shows blank rows while loading instead of a
		// skeleton.
		const withShimmer = Object.entries(WidgetRegistry)
			.filter(([, entry]) => entry.Shimmer !== undefined)
			.map(([widget]) => widget)
			.sort();
		expect(withShimmer).toEqual([
			WIDGET.APPLICANTCARD,
			WIDGET.BUTTON,
			WIDGET.COMMENTCARD,
			WIDGET.DISCUSSIONCARD,
			WIDGET.FEEDCARD,
			WIDGET.MEMBERCARD,
			WIDGET.NEWSCARD,
		].sort());
		for (const widget of withShimmer) {
			expect({
				widget,
				renderable: isRenderable(
					WidgetRegistry[widget].Shimmer,
				),
			}).toEqual({ widget, renderable: true });
		}
	});
});
