import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import {
	ColorTokens,
	IconSizeTokens,
	IconTokens,
} from '@blue-learn/schema';
import Icon from '../Icon';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

describe('Icon', () => {
	it('renders the SVG registered for the given token', () => {
		const { container } = render(
			<Icon name={IconTokens.Check} />,
		);
		const svg = container.querySelector('svg');
		expect(svg).not.toBeNull();
		// Check is a single stroked path; asserting on the path data proves
		// we resolved the *right* glyph, not merely some SVG.
		expect(
			svg!.querySelector('path')!.getAttribute('d'),
		).toBe('M20 6L9 17L4 12');
	});

	it('resolves size from the iconSize theme map, not from the raw prop', () => {
		// The prop is a token ('XXL'), the rendered attribute is a pixel
		// number. If the theme lookup were dropped, the SVG would get
		// width="XXL" and render at its intrinsic size on every screen.
		const { container } = render(
			<Icon
				name={IconTokens.Check}
				size={IconSizeTokens.XXL}
			/>,
		);
		const svg = container.querySelector('svg')!;
		// iconSize[XXL] = 24 in light-mobile.
		expect(svg.getAttribute('width')).toBe('24');
		expect(svg.getAttribute('height')).toBe('24');
	});

	it('resolves colour from the colours theme map into the stroke', () => {
		// Same argument for colour: the consumer passes a token, and the
		// stroke has to end up as the palette hex. A broken lookup renders an
		// invisible (undefined-stroke) icon.
		const { container } = render(
			<Icon
				name={IconTokens.Check}
				color={ColorTokens.Error_100}
			/>,
		);
		// Error_100 = #E93C3C
		expect(
			container
				.querySelector('path')!
				.getAttribute('stroke'),
		).toBe('#E93C3C');
	});

	it('defaults to LG (18px) and Grey_800 when size/colour are omitted', () => {
		// Icon.tsx declares these defaults; most call sites in the library
		// rely on them, so a change here silently restyles icons everywhere.
		const { container } = render(
			<Icon name={IconTokens.Check} />,
		);
		const svg = container.querySelector('svg')!;
		expect(svg.getAttribute('width')).toBe('18');
		// Grey_800 = #1C1C22
		expect(
			container
				.querySelector('path')!
				.getAttribute('stroke'),
		).toBe('#1C1C22');
	});

	it('renders nothing when name is empty', () => {
		// Icon.tsx guards `if (!name) return <></>`. Card/Chip/Button all pass
		// an optional icon prop straight through, so this is the path taken
		// whenever a caller omits the icon - it must not render an empty SVG
		// that still occupies layout space.
		const { container } = render(
			<Icon name={'' as unknown as string} />,
		);
		expect(container.innerHTML).toBe('');
	});

	it('renders different glyphs for different tokens', () => {
		// Guards against the registry lookup being short-circuited to a
		// single fallback icon - which would still render "an icon" and pass
		// any looser test.
		const { container: check } = render(
			<Icon name={IconTokens.Check} />,
		);
		const { container: cross } = render(
			<Icon name={IconTokens.Cross} />,
		);
		expect(check.innerHTML).not.toBe(cross.innerHTML);
	});

	it('BUG (pinned): an unregistered name crashes the render instead of degrading', () => {
		// IconProps.name is typed as `string`, not IconTokens, so any string
		// is accepted at compile time. Icon.tsx then does
		// `const Icon = iconTokensMap[name]` and renders `<Icon />` with no
		// existence check - React throws "Element type is invalid" and the
		// entire subtree unmounts.
		//
		// This is reachable in practice: icon names routinely arrive as plain
		// strings in server-driven UI payloads, so a typo in a CMS entry takes
		// down the screen rather than dropping one glyph.
		//
		// Pinned rather than fixed because the sensible fix (render nothing,
		// or a placeholder) is a product-visible behaviour change - and the
		// current crash is at least loud. Change this test when the guard is
		// added.
		const consoleError = jest
			.spyOn(console, 'error')
			.mockImplementation(() => {});
		expect(() =>
			render(<Icon name='not-a-registered-icon' />),
		).toThrow(/Element type is invalid/);
		consoleError.mockRestore();
	});

	it('is memoised, so an unchanged icon does not re-render', () => {
		// Icon is `memo`-wrapped and is rendered inside list items (Grid
		// tiles, UserCard rows). Losing the memo would re-render every icon in
		// a long list on each parent update.
		expect(
			(Icon as unknown as { $$typeof: symbol })
				.$$typeof,
		).toBe(Symbol.for('react.memo'));
	});
});
