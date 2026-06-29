import React from 'react';
import {
	fireEvent,
	render,
} from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import { ColorTokens } from '@blue-learn/schema';
import InfoCard from '../InfoCard';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

describe('InfoCard', () => {
	it('renders title and subtitle', () => {
		const { getByText } = render(
			<InfoCard
				title='Heads up'
				subtitle='Your profile is incomplete'
			/>,
		);
		expect(getByText('Heads up')).toBeTruthy();
		expect(
			getByText('Your profile is incomplete'),
		).toBeTruthy();
	});

	it('renders the subtitle alone when there is no title', () => {
		// InfoCard is used both as a titled callout and as a bare inline
		// notice. The untitled form must not leave an empty heading row - the
		// title block and its following spacer are both conditional.
		const { container, queryByText } = render(
			<InfoCard subtitle='Just a note' />,
		);
		expect(container.textContent).toBe('Just a note');
		expect(queryByText('Heads up')).toBeNull();
	});

	it('shows a dismiss button only when onPress is supplied', () => {
		// The close affordance is the only thing onPress controls. Rendering
		// it unconditionally would put a dead X on every non-dismissible
		// notice; omitting it when a handler exists makes the card
		// undismissable.
		const { container: dismissible } = render(
			<InfoCard
				title='T'
				subtitle='S'
				onPress={() => {}}
			/>,
		);
		const { container: permanent } = render(
			<InfoCard title='T' subtitle='S' />,
		);
		expect(
			dismissible.querySelectorAll('svg').length,
		).toBe(1);
		expect(
			permanent.querySelectorAll('svg').length,
		).toBe(0);
	});

	it('does not show the dismiss button when there is no title', () => {
		// The X lives inside the title row, so an untitled card has nowhere to
		// put it. Worth pinning: a caller passing onPress but no title gets a
		// card they cannot dismiss, which is silent.
		const { container } = render(
			<InfoCard subtitle='S' onPress={() => {}} />,
		);
		expect(container.querySelectorAll('svg').length).toBe(
			0,
		);
	});

	it('defaults to the Secondary_50 callout background', () => {
		// The pale yellow wash is what makes an InfoCard read as advisory
		// rather than as ordinary content. It is the component's default, so
		// most call sites depend on it.
		const { container } = render(
			<InfoCard title='T' subtitle='S' />,
		);
		// Secondary_50 = #FFF7E3
		expect(
			getComputedStyle(container.firstChild as Element)
				.backgroundColor,
		).toBe('rgb(255, 247, 227)');
	});

	it('applies an explicit bgColor override', () => {
		const { container } = render(
			<InfoCard
				title='T'
				subtitle='S'
				bgColor={ColorTokens.Error_50}
			/>,
		);
		// Error_50 = #F5A3A3
		expect(
			getComputedStyle(container.firstChild as Element)
				.backgroundColor,
		).toBe('rgb(245, 163, 163)');
	});

	it('uses the BR2 corner radius and XL padding', () => {
		// Hardcoded in InfoCard, not passed by callers - so this is the only
		// place the callout's shape is defined.
		const { container } = render(
			<InfoCard title='T' subtitle='S' />,
		);
		const style = getComputedStyle(
			container.firstChild as Element,
		);
		// borderRadius[BR2] = 12, space[XL] = 16.
		expect(style.borderTopLeftRadius).toBe('12px');
		expect(style.paddingTop).toBe('16px');
		expect(style.paddingLeft).toBe('16px');
	});

	it('renders the title as a heading and the subtitle as de-emphasised body text', () => {
		// The visual hierarchy is the point of the component: a semibold
		// heading over smaller secondary body copy. Swapping the two type
		// tokens would leave both strings looking identical.
		const { getByText } = render(
			<InfoCard title='Heads up' subtitle='Detail' />,
		);
		const title = getComputedStyle(
			getByText('Heads up'),
		);
		const subtitle = getComputedStyle(
			getByText('Detail'),
		);
		// HEADING_SM = SemiBold 14px Grey_800.
		expect(title.fontFamily).toBe('Inter-SemiBold');
		expect(title.fontSize).toBe('14px');
		// BODY_XS_SECONDARY = Regular 12px Grey_700.
		expect(subtitle.fontFamily).toBe('Inter-Regular');
		expect(subtitle.fontSize).toBe('12px');
		expect(subtitle.color).not.toBe(title.color);
	});

	it('wires the dismiss handler through a Button, so it never fires on the web target', () => {
		// Consequence of a library-wide quirk, pinned here because it is what
		// a consumer actually experiences: InfoCard's X is a <Button>, and
		// Button.base.tsx forces `disabled={Platform.OS === 'web'}` on its
		// Pressable. react-native-web's PressResponder no-ops onPress while
		// disabled (already pinned in button/Button.test.tsx), so on any web
		// build of this library an InfoCard cannot be dismissed at all - the X
		// renders, is focusable, and does nothing.
		//
		// Not fixed here: the root cause is in Button.base.tsx and changing it
		// makes every button in the library newly clickable on web, which is a
		// product-visible change well beyond this component.
		const onPress = jest.fn();
		const triggerAction = jest.fn();
		const { container } = render(
			<InfoCard
				title='T'
				subtitle='S'
				onPress={onPress}
				action={{
					type: 'DISMISS_NOTICE',
					payload: { id: 3 },
				}}
				triggerAction={triggerAction}
			/>,
		);
		const dismiss = container
			.querySelector('svg')!
			.closest('[tabindex]')!;
		expect(dismiss.getAttribute('aria-disabled')).toBe(
			'true',
		);
		fireEvent.click(dismiss);
		expect(onPress).not.toHaveBeenCalled();
		expect(triggerAction).not.toHaveBeenCalled();
	});

	it('renders the dismiss control as a focusable element despite it being inert on web', () => {
		// Follow-on from the quirk above, and the reason it is worth pinning
		// rather than shrugging at: the X is still in the tab order and still
		// exposed to assistive technology as a control, so a keyboard or
		// screen-reader user is led to an affordance that cannot do anything.
		const { container } = render(
			<InfoCard
				title='T'
				subtitle='S'
				onPress={() => {}}
			/>,
		);
		const dismiss = container
			.querySelector('svg')!
			.closest('[tabindex]') as HTMLElement;
		expect(dismiss).not.toBeNull();
		expect(dismiss.getAttribute('tabindex')).toBe('-1');
	});
});
