import React from 'react';
import {
	fireEvent,
	render,
} from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import { SizeTypeTokens } from '@blue-learn/schema';
import UserCard from '../UserCard';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

const base = {
	avatar: 'https://example.test/ann.png',
	title: 'ann sharma',
	subtitle: 'Product Designer',
};

describe('UserCard', () => {
	it('renders the name and subtitle', () => {
		const { container } = render(
			<UserCard {...base} />,
		);
		expect(container.textContent).toBe(
			'ann sharmaProduct Designer',
		);
	});

	it('renders the avatar image from the given uri', () => {
		const { container } = render(
			<UserCard {...base} />,
		);
		const img = container.querySelector('img');
		expect(img).not.toBeNull();
		expect(img!.getAttribute('src')).toBe(base.avatar);
	});

	it('capitalises the name rather than trusting the raw data', () => {
		// Names arrive from user input and are frequently all-lowercase.
		// UserCard applies textTransform: capitalize so a directory listing
		// stays visually consistent regardless of how people typed their name.
		const { getByText } = render(
			<UserCard {...base} />,
		);
		expect(
			getComputedStyle(getByText('ann sharma'))
				.textTransform,
		).toBe('capitalize');
	});

	it('truncates the name and subtitle to a single line each', () => {
		// Cards sit in fixed-height rows in a scrolling list. A long name or
		// job title wrapping to two lines pushes the row out of alignment
		// with its neighbours and makes the avatar stop lining up.
		//
		// react-native-web implements numberOfLines={1} by adding its
		// `css-textOneLine-*` atomic class (the -webkit-line-clamp itself is
		// in an injected stylesheet jsdom does not resolve), so that class is
		// the observable signal.
		const { getByText } = render(
			<UserCard {...base} />,
		);
		expect(
			getByText('ann sharma').className,
		).toContain('css-textOneLine');
		expect(
			getByText('Product Designer').className,
		).toContain('css-textOneLine');
	});

	it('does not clamp the location line', () => {
		// Deliberate asymmetry: the location replaces the subtitle and is
		// rendered without numberOfLines, so it is allowed to wrap. Pinning
		// the contrast is what makes the clamp assertion above meaningful
		// rather than an accident of how every Typography renders.
		const { getByText } = render(
			<UserCard {...base} location='Pune, Maharashtra' />,
		);
		expect(
			getByText('Pune, Maharashtra').className,
		).not.toContain('css-textOneLine');
	});

	it('shows location with a pin icon instead of the subtitle when supplied', () => {
		// location and subtitle occupy the same slot - they are mutually
		// exclusive, not stacked. Rendering both would double the card height
		// for any user who has a location set.
		const { container } = render(
			<UserCard {...base} location='Pune' />,
		);
		expect(container.textContent).toBe(
			'ann sharmaPune',
		);
		expect(container.textContent).not.toContain(
			'Product Designer',
		);
		// The pin is the only SVG on the card.
		expect(container.querySelectorAll('svg').length).toBe(
			1,
		);
	});

	it('shows no icon when falling back to the subtitle', () => {
		const { container } = render(
			<UserCard {...base} />,
		);
		expect(container.querySelectorAll('svg').length).toBe(
			0,
		);
	});

	it('renders title_secondary alongside the name', () => {
		// The secondary title is the right-aligned trailing label (a
		// timestamp, a mutual-connection count). It must not displace the
		// name.
		const { container } = render(
			<UserCard {...base} title_secondary='2h ago' />,
		);
		expect(container.textContent).toContain(
			'ann sharma',
		);
		expect(container.textContent).toContain('2h ago');
	});

	it('renders a trailing divider only when there is no title_secondary', () => {
		// The divider separates consecutive rows in a plain list. When a
		// secondary title is present the card is being used in a denser
		// layout that supplies its own separators, so an extra divider would
		// double up.
		const { container: withDivider } = render(
			<UserCard {...base} />,
		);
		const { container: withoutDivider } = render(
			<UserCard {...base} title_secondary='2h ago' />,
		);
		const hairlines = (root: HTMLElement) =>
			Array.from(root.querySelectorAll('div')).filter(
				(el) =>
					getComputedStyle(el).height === '1px',
			).length;
		expect(hairlines(withDivider)).toBe(1);
		expect(hairlines(withoutDivider)).toBe(0);
	});

	it('defaults to top-only LG padding', () => {
		// UserCard's default `padding` is `{top: LG}` - deliberately asymmetric
		// so consecutive cards in a list sit flush against their dividers.
		const { container } = render(
			<UserCard {...base} />,
		);
		const style = getComputedStyle(
			container.firstChild!.firstChild as Element,
		);
		// space[LG] = 12; the other sides resolve to undefined and render 0.
		expect(style.paddingTop).toBe('12px');
		expect(style.paddingBottom).toBe('0px');
		expect(style.paddingLeft).toBe('0px');
	});

	it('applies an explicit padding override', () => {
		const { container } = render(
			<UserCard
				{...base}
				padding={{
					vertical: SizeTypeTokens.XXL,
					horizontal: SizeTypeTokens.MD,
				}}
			/>,
		);
		const style = getComputedStyle(
			container.firstChild!.firstChild as Element,
		);
		expect(style.paddingTop).toBe('20px');
		expect(style.paddingLeft).toBe('8px');
	});

	it('invokes onPress and triggerAction when the card is pressed', () => {
		// UserCard hands its handler to Card's own Pressable rather than to a
		// Button, so - unlike InfoCard's dismiss - this one really does fire
		// on the web target. Tapping a user row is the primary navigation
		// into a profile, so both halves matter: the callback for direct
		// consumers, the action for payload-driven screens.
		const onPress = jest.fn();
		const triggerAction = jest.fn();
		const action = {
			type: 'OPEN_PROFILE',
			payload: { userId: 42 },
		};
		const { container } = render(
			<UserCard
				{...base}
				onPress={onPress}
				action={action}
				triggerAction={triggerAction}
			/>,
		);
		fireEvent.click(container.firstChild as Element);
		expect(onPress).toHaveBeenCalledTimes(1);
		expect(triggerAction).toHaveBeenCalledWith(action);
	});

	it('is pressable even without an onPress handler', () => {
		// UserCard always passes its handleAction to Card, so the card is
		// always wrapped in a Pressable. Pinned because it is a real
		// accessibility consequence: a purely decorative user row is still
		// announced as interactive and still lands in the tab order.
		const { container } = render(
			<UserCard {...base} />,
		);
		expect(
			(container.firstChild as HTMLElement).getAttribute(
				'tabindex',
			),
		).toBe('0');
		expect(() =>
			fireEvent.click(container.firstChild as Element),
		).not.toThrow();
	});
});
