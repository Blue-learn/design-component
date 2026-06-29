import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import { ColorTokens } from '@blue-learn/schema';
import ProgressIndicator from '../ProgressIndicator';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

/**
 * ProgressIndicatorBase renders `size` segments plus a Space after each one.
 * The segments are the elements that carry a background colour; the spacers do
 * not, which is what this helper keys off.
 */
const segmentsOf = (container: HTMLElement) =>
	Array.from(
		container.querySelectorAll('div'),
	).filter(
		(el) =>
			getComputedStyle(el).backgroundColor !== '',
	);

describe('ProgressIndicator', () => {
	it('renders one segment per step', () => {
		// `size` is the number of steps in the flow (onboarding, multi-page
		// forms). Rendering the wrong count misrepresents how much is left.
		expect(
			segmentsOf(
				render(<ProgressIndicator size={4} />)
					.container,
			).length,
		).toBe(4);
		expect(
			segmentsOf(
				render(<ProgressIndicator size={1} />)
					.container,
			).length,
		).toBe(1);
	});

	it('defaults to a single segment', () => {
		// ProgessIndicator.base.tsx defaults `size` to 1. A default of 0 would
		// render an empty bar, which looks like a broken component rather than
		// a one-step flow.
		const { container } = render(<ProgressIndicator />);
		expect(segmentsOf(container).length).toBe(1);
	});

	it('marks segments up to and including activeIndex as complete', () => {
		// The completed/remaining split is expressed purely through opacity
		// (1 vs 0.3). An off-by-one here tells the user they are a whole step
		// further along - or behind - than they are.
		const { container } = render(
			<ProgressIndicator size={4} activeIndex={1} />,
		);
		expect(
			segmentsOf(container).map(
				(el) => getComputedStyle(el).opacity,
			),
		).toEqual(['1', '1', '0.3', '0.3']);
	});

	it('defaults activeIndex to 0, completing only the first segment', () => {
		const { container } = render(
			<ProgressIndicator size={3} />,
		);
		expect(
			segmentsOf(container).map(
				(el) => getComputedStyle(el).opacity,
			),
		).toEqual(['1', '0.3', '0.3']);
	});

	it('completes every segment when activeIndex reaches the last step', () => {
		const { container } = render(
			<ProgressIndicator size={3} activeIndex={2} />,
		);
		expect(
			segmentsOf(container).map(
				(el) => getComputedStyle(el).opacity,
			),
		).toEqual(['1', '1', '1']);
	});

	it('resolves the fill colour, height and radius from the theme variant', () => {
		// ProgressIndicator.tsx spreads `theme.progressIndicator[type]` into
		// the base before the caller's props, so these three values come
		// entirely from the theme. A broken lookup leaves the base's own
		// hardcoded defaults in place and the dark-theme override silently
		// stops applying.
		const { container } = render(
			<ProgressIndicator size={1} />,
		);
		const style = getComputedStyle(
			segmentsOf(container)[0],
		);
		// Primary_500 = #5169F6, space[MD] = 8, borderRadius[BR4] = 1000.
		expect(style.backgroundColor).toBe(
			'rgb(81, 105, 246)',
		);
		expect(style.height).toBe('8px');
		expect(style.borderTopLeftRadius).toBe('1000px');
	});

	it('an explicit colour prop overrides the theme fill', () => {
		// The caller's props are spread *after* the theme props, so an
		// explicit colour has to win. If the spread order flipped, the prop
		// would be silently ignored.
		const { container } = render(
			<ProgressIndicator
				size={1}
				color={ColorTokens.Error_100}
			/>,
		);
		// Error_100 = #E93C3C
		expect(
			getComputedStyle(segmentsOf(container)[0])
				.backgroundColor,
		).toBe('rgb(233, 60, 60)');
	});

	it('reads the fill from the active theme at render time, not from a hardcoded constant', () => {
		// The dark theme swaps this component's fill from Primary_500 to
		// Blue_300 (a 30%-opacity Primary_500 segment is invisible on a dark
		// surface). That override only works while the component resolves the
		// colour through ThemeProvider on every render - inline the light
		// value and dark mode silently loses its progress bar.
		//
		// Standing in a modified theme is the way to prove that without
		// jest.resetModules(), which would load a second copy of React and
		// break hooks.
		const realTheme = ThemeProvider.getTheme();
		const getTheme = jest
			.spyOn(ThemeProvider, 'getTheme')
			.mockReturnValue({
				...realTheme,
				progressIndicator: {
					...realTheme.progressIndicator,
					default: {
						...realTheme.progressIndicator.default,
						color: ColorTokens.Blue_300,
					},
				},
			});

		const { container } = render(
			<ProgressIndicator size={1} />,
		);
		// Blue_300 = #9EACFF
		expect(
			getComputedStyle(segmentsOf(container)[0])
				.backgroundColor,
		).toBe('rgb(158, 172, 255)');

		getTheme.mockRestore();
	});

	it('collapses the trailing spacer so the bar ends flush', () => {
		// Every segment is followed by a Space, but the last one is forced to
		// NONE. Without that, the bar would end with a stray 4px gap and stop
		// short of its container's right edge.
		const { container } = render(
			<ProgressIndicator size={3} />,
		);
		const spacers = Array.from(
			container.querySelectorAll('div'),
		).filter(
			(el) =>
				getComputedStyle(el).backgroundColor === '' &&
				getComputedStyle(el).width !== '',
		);
		expect(
			spacers.map((el) => getComputedStyle(el).width),
		).toEqual(['4px', '4px', '0px']);
	});
});
