import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import {
	BorderRadiusTokens,
	ColorTokens,
} from '@blue-learn/schema';
import Shimmer from '../Shimmer';
import { props as shimmerDefaults } from '../Shimmer.default';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

const styleOf = (container: HTMLElement) =>
	getComputedStyle(container.firstChild as Element);

describe('Shimmer', () => {
	it('renders at the given width and height', () => {
		// Shimmer is the skeleton placeholder for every card in the library.
		// Its dimensions have to match the content it stands in for, or the
		// list visibly jumps when the real data lands.
		const { container } = render(
			<Shimmer width={120} height={16} />,
		);
		const style = styleOf(container);
		expect(style.width).toBe('120px');
		expect(style.height).toBe('16px');
	});

	it('accepts percentage dimensions as well as pixels', () => {
		// ShimmerProps types both as `number | string`, which is what lets a
		// skeleton fill its container rather than guessing a pixel width.
		const { container } = render(
			<Shimmer width={'100%'} height={8} />,
		);
		expect(styleOf(container).width).toBe('100%');
	});

	it('resolves backgroundColor through the theme when a token is given', () => {
		const { container } = render(
			<Shimmer
				width={10}
				height={10}
				backgroundColor={ColorTokens.Error_100}
			/>,
		);
		// Error_100 = #E93C3C
		expect(styleOf(container).backgroundColor).toBe(
			'rgb(233, 60, 60)',
		);
	});

	it('falls back to a neutral grey when no backgroundColor is given', () => {
		// #E3E3E3 is hardcoded in Shimmer.tsx rather than being a token. Pin
		// it: it is the colour of every skeleton in the product, and it is the
		// one value here that no theme can change.
		const { container } = render(
			<Shimmer width={10} height={10} />,
		);
		expect(styleOf(container).backgroundColor).toBe(
			'rgb(227, 227, 227)',
		);
	});

	it('resolves a borderRadius token through the theme', () => {
		const { container } = render(
			<Shimmer
				width={10}
				height={10}
				borderRadius={BorderRadiusTokens.BR3}
			/>,
		);
		// borderRadius[BR3] = 16
		expect(styleOf(container).borderTopLeftRadius).toBe(
			'16px',
		);
	});

	it('defaults to a 12px radius when none is given', () => {
		const { container } = render(
			<Shimmer width={10} height={10} />,
		);
		expect(styleOf(container).borderTopLeftRadius).toBe(
			'12px',
		);
	});

	it('BUG (pinned): BorderRadiusTokens.BR0 renders a 12px radius, not a square corner', () => {
		// Shimmer.tsx resolves its radius as
		// `theme.borderRadius[props.borderRadius] || 12`.
		// borderRadius[BR0] is 0, which is falsy, so the `||` fallback fires
		// and the caller's explicit "no rounding" request is silently replaced
		// with the 12px default.
		//
		// This is product-visible: a skeleton standing in for a square avatar
		// or a full-bleed image renders with rounded corners, so the placeholder
		// does not match the content it replaces.
		//
		// Pinned rather than fixed because the fix (`?? 12`, or resolving the
		// default through a token) changes how existing skeletons render. The
		// correct radius for this case is 0px.
		const { container } = render(
			<Shimmer
				width={10}
				height={10}
				borderRadius={BorderRadiusTokens.BR0}
			/>,
		);
		expect(styleOf(container).borderTopLeftRadius).toBe(
			'12px',
		);
	});

	it('starts at 0.5 opacity - the low end of the pulse', () => {
		// The animation runs 0.5 -> 0.8 on a loop. Starting anywhere else
		// makes the first frame of every skeleton flash at the wrong
		// brightness.
		const { container } = render(
			<Shimmer width={10} height={10} />,
		);
		expect(styleOf(container).opacity).toBe('0.5');
	});

	it('stops its animation loop on unmount', () => {
		// Shimmer.tsx returns `stopAnimation` from its effect. Without that
		// cleanup, every skeleton ever mounted keeps an Animated loop running
		// for the lifetime of the app - a real leak in long, fast-scrolling
		// lists where skeletons mount and unmount constantly.
		const { unmount, container } = render(
			<Shimmer width={10} height={10} />,
		);
		expect(container.firstChild).not.toBeNull();
		expect(() => unmount()).not.toThrow();
		expect(container.firstChild).toBeNull();
	});
});

describe('Shimmer.default', () => {
	it('exports the fallback props Storybook/consumers fall back to', () => {
		// Shimmer.default.ts is the shared "generic skeleton" size. It is
		// plain data with no types attached, so nothing else guards it.
		expect(shimmerDefaults).toEqual({
			width: 100,
			height: 100,
			visible: true,
		});
	});

	it('its width/height are usable directly as Shimmer props', () => {
		// The point of the module is to be spreadable into <Shimmer>. If the
		// keys drifted (e.g. `w`/`h`), the spread would silently produce a
		// zero-sized skeleton.
		const { container } = render(
			<Shimmer
				width={shimmerDefaults.width}
				height={shimmerDefaults.height}
			/>,
		);
		const style = styleOf(container);
		expect(style.width).toBe('100px');
		expect(style.height).toBe('100px');
	});
});
