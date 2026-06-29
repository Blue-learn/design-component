import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import {
	ColorTokens,
	GradientColorTokens,
} from '@blue-learn/schema';

/**
 * `react-native-linear-gradient` is aliased to
 * `react-native-web-linear-gradient` by jest.config.js, and that web shim
 * paints through a `background-image` jsdom does not surface in
 * getComputedStyle. So the only way to assert what Gradient actually resolved
 * is to capture the props it hands the underlying LinearGradient - which is
 * exactly the boundary that matters: a wrong colour array here renders the
 * wrong gradient on device.
 *
 * The recorder array lives inside the mock factory (and is exposed back on the
 * mocked component) because jest.mock factories are hoisted above every import
 * in this file, so they cannot close over a `const` declared here.
 */
jest.mock('react-native-linear-gradient', () => {
	const ReactModule = require('react');
	const calls: Record<string, any>[] = [];
	const MockLinearGradient = (
		props: Record<string, any>,
	) => {
		calls.push(props);
		return ReactModule.createElement(
			'div',
			{ 'data-testid': 'linear-gradient' },
			props.children,
		);
	};
	MockLinearGradient.calls = calls;
	return {
		__esModule: true,
		default: MockLinearGradient,
	};
});

import LinearGradient from 'react-native-linear-gradient';
import Gradient from '../Gradient';

const calls = (
	LinearGradient as unknown as {
		calls: Record<string, any>[];
	}
).calls;

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

beforeEach(() => {
	calls.length = 0;
});

const lastProps = () => calls[calls.length - 1];

describe('Gradient', () => {
	it('resolves an array of ColorTokens into palette hex values', () => {
		// The caller passes tokens; LinearGradient needs concrete colours.
		// If the theme lookup were skipped, the native gradient would receive
		// the literal strings 'Primary-500'/'blue-300' and render black.
		render(
			<Gradient
				colors={[
					ColorTokens.Primary_500,
					ColorTokens.Blue_300,
				]}
			>
				<span>content</span>
			</Gradient>,
		);
		expect(lastProps().colors).toEqual([
			'#5169F6',
			'#9EACFF',
		]);
	});

	it('resolves a GradientColorTokens string into its stop pair', () => {
		// The `colors` prop is a union: an array of colour tokens *or* a
		// single named gradient token. The string branch reads a different
		// theme map (gradientColor, not colors) - swapping the two would
		// silently produce `undefined`.
		render(
			<Gradient colors={GradientColorTokens.D_1}>
				<span>content</span>
			</Gradient>,
		);
		expect(lastProps().colors).toEqual([
			'#5200BB',
			'#390083',
		]);
	});

	it('resolves each named gradient token to its own distinct stop pair', () => {
		// Guards against every named gradient collapsing onto one entry,
		// which would still render "a gradient" and pass a looser check.
		render(
			<Gradient colors={GradientColorTokens.IB_3} />,
		);
		expect(lastProps().colors).toEqual([
			'#BE54C850',
			'#DE424250',
		]);
	});

	it('defaults the gradient axis to a left-to-right sweep', () => {
		// start {0,0} -> end {1,0} is horizontal. Flipping either default
		// would rotate every gradient in the product at once.
		render(
			<Gradient
				colors={[
					ColorTokens.Primary_500,
					ColorTokens.Blue_300,
				]}
			/>,
		);
		expect(lastProps().start).toEqual({ x: 0, y: 0 });
		expect(lastProps().end).toEqual({ x: 1, y: 0 });
	});

	it('passes an explicit start/end through unchanged', () => {
		render(
			<Gradient
				colors={[
					ColorTokens.Primary_500,
					ColorTokens.Blue_300,
				]}
				start={{ x: 0, y: 0 }}
				end={{ x: 0, y: 1 }}
			/>,
		);
		expect(lastProps().end).toEqual({ x: 0, y: 1 });
	});

	it('renders children inside the gradient', () => {
		const { getByText } = render(
			<Gradient
				colors={[
					ColorTokens.Primary_500,
					ColorTokens.Blue_300,
				]}
			>
				<span>inside</span>
			</Gradient>,
		);
		expect(getByText('inside')).toBeTruthy();
	});

	it('renders widgetItems through renderItem, after children', () => {
		// Same server-driven-UI contract as Card/Stack: children first, then
		// payload-supplied widget items.
		const { container } = render(
			<Gradient
				colors={[
					ColorTokens.Primary_500,
					ColorTokens.Blue_300,
				]}
				widgetItems={[
					{ id: 'a', type: 'T' },
					{ id: 'b', type: 'T' },
				]}
				renderItem={(item) => (
					<span key={item.id}>[{item.id}]</span>
				)}
			>
				<span>child</span>
			</Gradient>,
		);
		expect(container.textContent).toBe('child[a][b]');
	});

	it('ignores widgetItems when no renderItem is supplied', () => {
		const { container } = render(
			<Gradient
				colors={[
					ColorTokens.Primary_500,
					ColorTokens.Blue_300,
				]}
				widgetItems={[{ id: 'a', type: 'T' }]}
			>
				<span>child</span>
			</Gradient>,
		);
		expect(container.textContent).toBe('child');
	});

	it('BUG (pinned): a single-colour array yields `colors: undefined`', () => {
		// Gradient.tsx only maps the array when `colors.length > 1`, and the
		// if/else-if chain has no final else - so a one-element array falls
		// through and LinearGradient is handed `undefined`.
		//
		// A one-element array is an ordinary thing for a payload to produce
		// (e.g. a theme with a single accent). On the web shim this degrades
		// to no gradient; in the native library `colors` is required, so it
		// throws.
		//
		// Pinned rather than fixed because the sensible repair - treat a
		// single colour as a flat fill, or duplicate the stop - is a
		// product-visible design decision.
		render(
			<Gradient colors={[ColorTokens.Primary_500]} />,
		);
		expect(lastProps().colors).toBeUndefined();
	});

	it('BUG (pinned): the default empty `colors` also yields `colors: undefined`', () => {
		// `colors = []` is the declared default, so <Gradient> with no colours
		// at all hits the same dead branch. Card.tsx happens to avoid it by
		// only taking the gradient path when `gradient.colors.length > 1`, but
		// a direct consumer of Gradient gets no such protection.
		render(<Gradient />);
		expect(lastProps().colors).toBeUndefined();
	});
});
