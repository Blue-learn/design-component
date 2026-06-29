import React from 'react';
import {
	fireEvent,
	render,
} from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import {
	ColorTokens,
	GradientColorTokens,
} from '@blue-learn/schema';

// The react-native-web linear-gradient shim paints through a background-image
// jsdom does not resolve, so the only way to see what an IcebreakerCard
// forwarded down the Card -> Gradient chain is to capture the props the
// underlying LinearGradient receives. See gradient/__tests__/Gradient.test.tsx
// for the same technique and why the recorder lives inside the factory.
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
import IcebreakerCard from '../IcebreakerCard';

const gradientCalls = (
	LinearGradient as unknown as {
		calls: Record<string, any>[];
	}
).calls;

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

beforeEach(() => {
	gradientCalls.length = 0;
});

describe('IcebreakerCard', () => {
	it('renders nothing without a title', () => {
		// IcebreakerCard guards `if (!title) return <></>`. Icebreakers come
		// from a feed payload where the prompt can be absent; the card has to
		// collapse rather than render an empty gradient panel.
		const { container } = render(
			<IcebreakerCard
				title={'' as unknown as string}
				subtitle='Anything to add?'
			/>,
		);
		expect(container.innerHTML).toBe('');
	});

	it('renders title and subtitle when both are given', () => {
		const { container } = render(
			<IcebreakerCard
				title='Icebreaker'
				subtitle='What got you into design?'
			/>,
		);
		expect(container.textContent).toBe(
			'IcebreakerWhat got you into design?',
		);
	});

	it('styles the title as a small de-emphasised eyebrow above the prompt', () => {
		// The title is a category label ("Icebreaker"), the subtitle is the
		// actual question. Swapping the two type tokens would make the label
		// shout and the question recede.
		const { getByText } = render(
			<IcebreakerCard
				title='Icebreaker'
				subtitle='What got you into design?'
			/>,
		);
		const title = getComputedStyle(
			getByText('Icebreaker'),
		);
		const prompt = getComputedStyle(
			getByText('What got you into design?'),
		);
		// SUBHEADING_XS = Medium 12px, overridden to Grey_500.
		expect(title.fontFamily).toBe('Inter-Medium');
		expect(title.fontSize).toBe('12px');
		// Grey_500 = #7B7F93
		expect(title.color).toBe('rgb(123, 127, 147)');
		// BODY_SM = Regular 14px Grey_800 - larger and darker than the eyebrow.
		expect(prompt.fontFamily).toBe('Inter-Regular');
		expect(prompt.fontSize).toBe('14px');
		expect(prompt.color).not.toBe(title.color);
	});

	it('clamps the prompt to three lines', () => {
		// Icebreakers sit in a feed at a fixed card height. An unclamped
		// prompt would let one long question stretch the card arbitrarily.
		const { getByText } = render(
			<IcebreakerCard
				title='Icebreaker'
				subtitle='A very long prompt'
			/>,
		);
		expect(
			getByText('A very long prompt').className,
		).toContain('css-textMultiLine');
	});

	it('renders the CTA button only when ctaText is supplied', () => {
		const { container: withCta } = render(
			<IcebreakerCard
				title='T'
				subtitle='S'
				ctaText='Answer'
			/>,
		);
		const { container: withoutCta } = render(
			<IcebreakerCard title='T' subtitle='S' />,
		);
		expect(withCta.textContent).toContain('Answer');
		expect(withoutCta.textContent).toBe('TS');
	});

	it('collapses the pre-CTA spacer when there is no CTA', () => {
		// The MD spacer between prompt and button is conditional on ctaText.
		// Leaving it in would add dead space to the bottom of every
		// non-actionable icebreaker.
		const spacerHeights = (root: HTMLElement) =>
			Array.from(root.querySelectorAll('div'))
				.map((el) => getComputedStyle(el))
				.filter(
					(s) => s.width !== '' && s.width === s.height,
				)
				.map((s) => s.height);
		const { container: withCta } = render(
			<IcebreakerCard
				title='T'
				subtitle='S'
				ctaText='Answer'
			/>,
		);
		const { container: withoutCta } = render(
			<IcebreakerCard title='T' subtitle='S' />,
		);
		// The first spacer is the fixed SM gap between eyebrow and prompt; the
		// second is the conditional pre-CTA gap. space[SM] = 4, space[MD] = 8,
		// space[NONE] = 0.
		expect(spacerHeights(withCta)[0]).toBe('4px');
		expect(spacerHeights(withCta)[1]).toBe('8px');
		expect(spacerHeights(withoutCta)[0]).toBe('4px');
		expect(spacerHeights(withoutCta)[1]).toBe('0px');
	});

	it('defaults to the Primary_50 tinted background', () => {
		const { container } = render(
			<IcebreakerCard title='T' subtitle='S' />,
		);
		// Primary_50 = #F0F2FF
		expect(
			getComputedStyle(container.firstChild as Element)
				.backgroundColor,
		).toBe('rgb(240, 242, 255)');
	});

	it('applies an explicit bgColor override', () => {
		const { container } = render(
			<IcebreakerCard
				title='T'
				subtitle='S'
				bgColor={ColorTokens.Accent_100}
			/>,
		);
		// Accent_100 = #D2F5D2
		expect(
			getComputedStyle(container.firstChild as Element)
				.backgroundColor,
		).toBe('rgb(210, 245, 210)');
	});

	it('forwards a colour-token gradient down to the real LinearGradient', () => {
		// Icebreakers are the main consumer of gradient backgrounds. The
		// tokens have to survive IcebreakerCard -> Card -> Gradient and only
		// be resolved to hex at the very bottom - a premature resolution would
		// break Card's `gradient.colors.length > 1` gate on the way down.
		const { container } = render(
			<IcebreakerCard
				title='T'
				subtitle='S'
				gradient={{
					colors: [
						ColorTokens.Primary_100,
						ColorTokens.Tertiary_100,
					],
				}}
			/>,
		);
		// Primary_100 = #E1E5FE, Tertiary_100 = #D5BFFD
		expect(gradientCalls[0].colors).toEqual([
			'#E1E5FE',
			'#D5BFFD',
		]);
		expect(container.textContent).toBe('TS');
	});

	it('renders flat, with no LinearGradient at all, when no gradient is given', () => {
		// Card only takes the gradient path when a gradient is supplied with
		// more than one stop; otherwise it must render a plain View. A
		// LinearGradient with no colours would blank the card's background.
		render(<IcebreakerCard title='T' subtitle='S' />);
		expect(gradientCalls.length).toBe(0);
	});

	it('QUIRK (pinned): Card gates the gradient on a string LENGTH, so named tokens pass by accident', () => {
		// GradientProps.colors accepts a GradientColorTokens string as well as
		// an array, but Card.tsx gates on `gradient?.colors?.length > 1` - and
		// for a string that is the character count, not a stop count.
		// 'IB_1' has 4 characters so it slips through and renders correctly;
		// a hypothetical one-character token would silently render flat.
		//
		// Pinned rather than fixed because the check is in Card.tsx and
		// tightening it (e.g. `typeof colors === 'string' || colors.length > 1`)
		// changes rendering for every Card in the library, not just this one.
		const { container } = render(
			<IcebreakerCard
				title='T'
				subtitle='S'
				gradient={{ colors: GradientColorTokens.IB_1 }}
			/>,
		);
		expect(GradientColorTokens.IB_1.length).toBe(4);
		// It does take the gradient path, and resolves the named token's stops.
		expect(gradientCalls[0].colors).toEqual([
			'#33019850',
			'#9C89FD50',
		]);
		expect(container.textContent).toBe('TS');
	});

	it('routes its CTA through a Button, so the handler never fires on web', () => {
		// Same library-wide quirk pinned in button/Button.test.tsx:
		// Button.base.tsx forces `disabled` on the web target, and
		// react-native-web's PressResponder no-ops onPress while disabled. The
		// user-visible consequence here is that an icebreaker's "Answer" CTA
		// does nothing in any web build.
		const onPress = jest.fn();
		const triggerAction = jest.fn();
		const { getByText } = render(
			<IcebreakerCard
				title='T'
				subtitle='S'
				ctaText='Answer'
				onPress={onPress}
				action={{ type: 'ANSWER', payload: { id: 1 } }}
				triggerAction={triggerAction}
			/>,
		);
		fireEvent.click(getByText('Answer'));
		expect(onPress).not.toHaveBeenCalled();
		expect(triggerAction).not.toHaveBeenCalled();
	});
});
