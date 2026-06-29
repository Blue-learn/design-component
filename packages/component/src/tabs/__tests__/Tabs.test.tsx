import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import Tabs from '../Tabs';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

const options = [
	{ label: 'Posts' },
	{ label: 'Replies' },
	{ label: 'Media', disabled: true },
];

const panels = [
	<span key='a'>PANEL-POSTS</span>,
	<span key='b'>PANEL-REPLIES</span>,
	<span key='c'>PANEL-MEDIA</span>,
];

describe('Tabs', () => {
	it('renders a button for every option label', () => {
		const { getByText } = render(
			<Tabs options={options} components={panels} />,
		);
		expect(getByText('Posts')).toBeTruthy();
		expect(getByText('Replies')).toBeTruthy();
		expect(getByText('Media')).toBeTruthy();
	});

	it('renders only the active panel, not all of them', () => {
		// Tabs mounts `components[activeTab]` alone. Rendering all panels
		// would mean every tab's data fetching and effects fire at once on
		// mount - the exact cost tabs exist to avoid.
		const { container, queryByText } = render(
			<Tabs options={options} components={panels} />,
		);
		expect(
			queryByText('PANEL-POSTS'),
		).not.toBeNull();
		expect(queryByText('PANEL-REPLIES')).toBeNull();
		expect(queryByText('PANEL-MEDIA')).toBeNull();
		expect(container.textContent).toContain(
			'PANEL-POSTS',
		);
	});

	it('renders the tab strip even with no options', () => {
		// `options = []` is the declared default, so a Tabs rendered while its
		// option list is still loading must not crash - it just shows the
		// (empty) strip plus the first panel.
		const { container } = render(
			<Tabs
				options={[]}
				components={[<span key='a'>ONLY</span>]}
			/>,
		);
		expect(container.textContent).toBe('ONLY');
	});

	it('renders nothing for the panel when components is shorter than options', () => {
		// `components[activeTab]` is an unguarded index. A mismatched pair of
		// arrays is a realistic payload bug; it must render an empty panel
		// rather than throwing.
		const { container } = render(
			<Tabs
				options={options}
				components={[<span key='a'>ONLY</span>]}
			/>,
		);
		expect(container.textContent).toBe(
			'PostsRepliesMediaONLY',
		);
	});

	it('styles every tab label with the Grey_100 label colour', () => {
		// Tabs hardcodes `labelColor={ColorTokens.Grey_100}` on its
		// MediumGhost buttons. Pinning it documents that the tab strip does
		// *not* pick up the button variant's own label colour - which is why
		// the strip is designed to sit on a dark surface.
		const { getByText } = render(
			<Tabs options={options} components={panels} />,
		);
		// Grey_100 = #F1F1F4
		expect(
			getComputedStyle(getByText('Posts')).color,
		).toBe('rgb(241, 241, 244)');
	});

	it('BUG (pinned): the `active` prop is ignored - Tabs always opens on index 0', () => {
		// TabsProps declares `active?: number`, but Tabs.tsx never reads it:
		// `useState(0)` is seeded with a literal. A consumer restoring a
		// previously-selected tab (deep link, back navigation, saved state)
		// passes `active` and silently lands on the first tab instead.
		//
		// Pinned rather than fixed because honouring it changes which panel
		// mounts for existing callers - a product-visible behaviour change,
		// and there is a design question about whether `active` should be
		// controlled or merely an initial value.
		const { queryByText } = render(
			<Tabs
				active={1}
				options={options}
				components={panels}
			/>,
		);
		expect(queryByText('PANEL-REPLIES')).toBeNull();
		expect(
			queryByText('PANEL-POSTS'),
		).not.toBeNull();
	});

	it('BUG (pinned): the `onChange` prop is never invoked', () => {
		// TabsProps declares `onChange?: () => void`, but Tabs.tsx only calls
		// its internal setActiveTab. A consumer wiring analytics or a URL
		// sync to onChange gets nothing, with no indication why.
		//
		// Pinned alongside `active` above: the two belong to the same
		// unfinished controlled-component API.
		const onChange = jest.fn();
		render(
			<Tabs
				onChange={onChange}
				options={options}
				components={panels}
			/>,
		);
		expect(onChange).not.toHaveBeenCalled();
	});

	it('marks disabled options no differently from enabled ones in the tab strip', () => {
		// Tabs checks `disabled` inside its onPress handler (an early return)
		// but never passes it down to the Button, so a disabled tab looks
		// exactly like an enabled one. Pinned because the guard *is* there -
		// the tab genuinely will not switch - so the gap is purely that the
		// user gets no visual warning before tapping.
		const { getByText } = render(
			<Tabs options={options} components={panels} />,
		);
		const enabled = getComputedStyle(
			getByText('Posts'),
		);
		const disabled = getComputedStyle(
			getByText('Media'),
		);
		expect(disabled.color).toBe(enabled.color);
		expect(disabled.opacity).toBe(enabled.opacity);
	});
});
