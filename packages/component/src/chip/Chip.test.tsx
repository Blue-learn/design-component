import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import { ChipTypeTokens, ChipHighlightTokens } from '@blue-learn/schema';
import Chip from './Chip';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

describe('Chip', () => {
	it('renders nothing when label is missing', () => {
		const { container } = render(<Chip />);
		expect(container).toBeEmptyDOMElement();
	});

	it('renders the label text', () => {
		render(<Chip label="Category" />);
		expect(screen.getByText('Category')).toBeInTheDocument();
	});

	it('invokes onPress when clicked (Chip.base uses a plain Pressable, unlike Button)', () => {
		const onPress = jest.fn();
		render(<Chip label="Clickable" onPress={onPress} />);
		fireEvent.click(screen.getByText('Clickable'));
		expect(onPress).toHaveBeenCalledTimes(1);
	});

	it('invokes triggerAction with the action payload on click', () => {
		const triggerAction = jest.fn();
		const action = { type: 'SELECT_CHIP', payload: {} };
		render(
			<Chip
				label="Filter"
				action={action}
				triggerAction={triggerAction}
			/>,
		);
		fireEvent.click(screen.getByText('Filter'));
		expect(triggerAction).toHaveBeenCalledWith(action);
	});

	it('adds a visible border only when highlight is HIGHLIGHTED', () => {
		const { container: plain } = render(<Chip label="Plain" />);
		const { container: highlighted } = render(
			<Chip
				label="Highlighted"
				highlight={ChipHighlightTokens.HIGHLIGHTED}
			/>,
		);
		// NOTE: the shorthand `borderWidth` computes to '0px' whenever
		// `border-style` is unset (jsdom follows the CSS spec here), even
		// though `border-top-width: 1px` is present in the inline style -
		// so assert on the longhand instead.
		expect(
			getComputedStyle(plain.firstChild as Element).borderTopWidth,
		).toBe('0px');
		expect(
			getComputedStyle(highlighted.firstChild as Element)
				.borderTopWidth,
		).toBe('1px');
	});

	it('resolves a different background fill for SELECTED vs UNSELECTED theme variants', () => {
		// Chip.base.tsx has a naming quirk worth locking in: the theme
		// property called `borderColor` is actually applied as the
		// Pressable's `backgroundColor`, not its border. SMALL_SELECTED
		// resolves borderColor -> Primary_100 (#E1E5FE) while
		// SMALL_UNSELECTED resolves borderColor -> Grey_100 (#F1F1F4).
		const { container: selected } = render(
			<Chip type={ChipTypeTokens.SMALL_SELECTED} label="Selected" />,
		);
		const { container: unselected } = render(
			<Chip
				type={ChipTypeTokens.SMALL_UNSELECTED}
				label="Unselected"
			/>,
		);
		expect(
			getComputedStyle(selected.firstChild as Element)
				.backgroundColor,
		).toBe('rgb(225, 229, 254)');
		expect(
			getComputedStyle(unselected.firstChild as Element)
				.backgroundColor,
		).toBe('rgb(241, 241, 244)');
	});
});
