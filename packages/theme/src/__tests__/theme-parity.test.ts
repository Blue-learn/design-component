import { ColorTokens } from '@blue-learn/schema';
import { ThemeTokens } from '../config';
import { darkMobileTheme } from '../dark-mobile';
import { lightMobileTheme } from '../light-mobile';
import { colorTokensMap } from '../colors';

/**
 * Cross-theme integration checks over the two assembled ThemeTokens objects.
 *
 * The per-slice specs (light-mobile-*.test.ts / dark-mobile-*.test.ts) verify
 * each token map on its own. These verify the thing that only shows up once
 * the maps are composed in light-mobile/index.ts and dark-mobile/index.ts:
 * that both themes actually expose the same surface, so a component written
 * against one theme cannot break in the other.
 */

const THEME_SLICES: (keyof ThemeTokens)[] = [
	'colors',
	'gradientColor',
	'button',
	'borderRadius',
	'space',
	'fontFamily',
	'fontSize',
	'shadow',
	'textInput',
	'iconSize',
	'avatarSize',
	'imageSize',
	'aspectRatio',
	'typography',
	'progressIndicator',
	'dividerSize',
	'tag',
	'chip',
];

describe('theme parity: light-mobile vs dark-mobile', () => {
	it('both themes expose every slice declared in ThemeTokens', () => {
		// ThemeTokens is a compile-time type; nothing checks it at runtime. A
		// slice missing from the assembled object makes every
		// `theme.<slice>[token]` lookup throw "cannot read property of
		// undefined" in that theme only.
		for (const slice of THEME_SLICES) {
			expect({
				slice,
				light: lightMobileTheme[slice] !== undefined,
				dark: darkMobileTheme[slice] !== undefined,
			}).toEqual({ slice, light: true, dark: true });
		}
	});

	it('neither theme exposes a slice the other does not', () => {
		// dark-mobile/index.ts is `{...lightMobileTheme, <overrides>}`, so it
		// can only ever gain keys. This catches a stray key being added to
		// one theme's object literal and not the other.
		expect(Object.keys(darkMobileTheme).sort()).toEqual(
			Object.keys(lightMobileTheme).sort(),
		);
	});

	it('every themed slice covers exactly the same token keys in both themes', () => {
		// This is the real safety net. Components index theme maps by token
		// with no fallback, so a token present in light but missing in dark
		// renders `undefined` styles for dark-mode users only - a class of bug
		// that a light-mode-only Storybook can never surface.
		for (const slice of THEME_SLICES) {
			expect({
				slice,
				keys: Object.keys(
					darkMobileTheme[slice] as object,
				).sort(),
			}).toEqual({
				slice,
				keys: Object.keys(
					lightMobileTheme[slice] as object,
				).sort(),
			});
		}
	});

	it('dark-mobile overrides exactly the five colour-bearing slices and shares the rest by reference', () => {
		// dark-mobile/index.ts spreads the light theme and replaces only
		// textInput/button/typography/progressIndicator/tag/chip. Everything
		// else is deliberately the *same object*, which is what guarantees
		// spacing, radii and type scale can never drift apart between themes.
		const overridden = new Set([
			'textInput',
			'button',
			'typography',
			'progressIndicator',
			'tag',
			'chip',
		]);
		for (const slice of THEME_SLICES) {
			expect({
				slice,
				sharedByReference:
					darkMobileTheme[slice] ===
					lightMobileTheme[slice],
			}).toEqual({
				slice,
				sharedByReference: !overridden.has(slice),
			});
		}
	});

	it('both themes resolve colour tokens through the same palette', () => {
		// There is a single palette; dark mode is expressed by *choosing
		// different tokens*, not by redefining what a token means. If that
		// ever changed, the same hex would render differently per theme and
		// every hardcoded colour comparison in the product would be wrong.
		expect(lightMobileTheme.colors).toBe(colorTokensMap);
		expect(darkMobileTheme.colors).toBe(colorTokensMap);
		expect(
			darkMobileTheme.colors[ColorTokens.Primary_500],
		).toBe(
			lightMobileTheme.colors[ColorTokens.Primary_500],
		);
	});

	it('no theme slice is an empty map', () => {
		// An empty-but-present slice passes the "is defined" check above and
		// then fails every lookup. Catch it explicitly.
		for (const slice of THEME_SLICES) {
			expect({
				slice,
				lightSize: Object.keys(
					lightMobileTheme[slice] as object,
				).length,
			}).not.toEqual({ slice, lightSize: 0 });
			expect({
				slice,
				darkSize: Object.keys(
					darkMobileTheme[slice] as object,
				).length,
			}).not.toEqual({ slice, darkSize: 0 });
		}
	});
});
