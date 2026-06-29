import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import { GridStateTokens } from '@blue-learn/schema';
import Grid from '../Grid';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

const item = (id: string) => ({ id, type: 'T' });

describe('Grid', () => {
	it('renders nothing at all for an empty data array', () => {
		// Grid.tsx short-circuits before the FlatList. This matters because
		// the FlatList still renders its own scroll container and vertical
		// padding - an empty grid would otherwise leave a 20px gap in the
		// layout with nothing in it.
		const { container } = render(
			<Grid numColumns={2} data={[]} />,
		);
		expect(container.innerHTML).toBe('');
	});

	it('renders every item through renderItem', () => {
		const { container } = render(
			<Grid
				numColumns={2}
				data={[
					{ item: item('a') },
					{ item: item('b') },
					{ item: item('c') },
				]}
				renderItem={(widget) => (
					<span key={widget.id}>[{widget.id}]</span>
				)}
			/>,
		);
		expect(container.textContent).toBe('[a][b][c]');
	});

	it('renders the selection badge only for SELECTED tiles', () => {
		// The badge is a Check icon inside a blue circle, and it is the only
		// affordance telling the user which tiles they have picked. Grid.tsx
		// gates it on a strict `item.state === GridStateTokens.SELECTED`.
		const { container } = render(
			<Grid
				numColumns={3}
				data={[
					{
						state: GridStateTokens.SELECTED,
						item: item('a'),
					},
					{
						state: GridStateTokens.NOT_SELECTED,
						item: item('b'),
					},
					{ item: item('c') },
				]}
				renderItem={(widget) => (
					<span key={widget.id}>{widget.id}</span>
				)}
			/>,
		);
		// Exactly one badge, for the single SELECTED tile - an undefined
		// `state` must behave like NOT_SELECTED.
		expect(container.querySelectorAll('svg').length).toBe(
			1,
		);
	});

	it('renders the badge with the Blue_300 fill and a Grey_500 checkmark', () => {
		// Both colours come out of the theme. If either lookup broke, the
		// badge would render as a transparent circle with an invisible tick -
		// present in the DOM, but useless on screen.
		const { container } = render(
			<Grid
				numColumns={1}
				data={[
					{
						state: GridStateTokens.SELECTED,
						item: item('a'),
					},
				]}
				renderItem={() => <span>a</span>}
			/>,
		);
		const svg = container.querySelector('svg')!;
		// Grey_500 = #7B7F93, and iconSize[XXS] = 10.
		expect(svg.getAttribute('color')).toBe('#7B7F93');
		expect(svg.getAttribute('width')).toBe('10');

		const badge = svg.parentElement!;
		// Blue_300 = #9EACFF
		expect(
			getComputedStyle(badge).backgroundColor,
		).toBe('rgb(158, 172, 255)');
	});

	it('renders tile wrappers but no content when renderItem is missing', () => {
		// A payload can reach a host that has not wired up a renderer. The
		// grid must still lay out without throwing.
		const { container } = render(
			<Grid
				numColumns={2}
				data={[{ item: item('a') }]}
			/>,
		);
		expect(container.textContent).toBe('');
		expect(container.innerHTML).not.toBe('');
	});

	it('applies the MD inter-column gap from the theme', () => {
		// Each tile carries `marginRight: theme.space[MD]`. That gap is the
		// only thing separating adjacent columns.
		const { container } = render(
			<Grid
				numColumns={2}
				data={[{ item: item('a') }]}
				renderItem={() => <span>a</span>}
			/>,
		);
		const tile = container.querySelector(
			'span',
		)!.parentElement!;
		// space[MD] = 8
		expect(getComputedStyle(tile).marginRight).toBe(
			'8px',
		);
	});

	it('BUG (pinned): omitting numColumns produces a NaN tile width', () => {
		// GridProps.numColumns is optional, but Grid.tsx computes each tile's
		// width as `Dimensions.get('window').width / numColumns - space[XL]`.
		// With numColumns undefined that is NaN, so the tile has no usable
		// width. react-native-web drops a NaN width silently (so it merely
		// mis-lays-out); on native, a NaN in the style object is a yoga
		// warning and an unpredictable layout.
		//
		// Pinned rather than fixed because the right default (1? fall back to
		// full width?) is a layout decision for the component's owners.
		const { container } = render(
			<Grid
				data={[{ item: item('a') }]}
				renderItem={() => <span>a</span>}
			/>,
		);
		const tile = container.querySelector(
			'span',
		)!.parentElement!;
		expect(getComputedStyle(tile).width).toBe('');
		// The gap is still applied, which is what makes the missing width
		// easy to overlook - the tile looks "styled".
		expect(getComputedStyle(tile).marginRight).toBe(
			'8px',
		);
	});

	it('renders a separator between rows', () => {
		// ItemSeparatorComponent is an LG Space. Without it, grid rows sit
		// flush against each other.
		const { container } = render(
			<Grid
				numColumns={1}
				data={[
					{ item: item('a') },
					{ item: item('b') },
				]}
				renderItem={(widget) => (
					<span key={widget.id}>{widget.id}</span>
				)}
			/>,
		);
		const spacers = Array.from(
			container.querySelectorAll('div'),
		).filter(
			(el) => getComputedStyle(el).height === '12px',
		);
		// space[LG] = 12
		expect(spacers.length).toBeGreaterThan(0);
	});
});
