import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import { ColorTokens, TagTypeTokens } from '@blue-learn/schema';
import Tag from './Tag';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

describe('Tag', () => {
	it('defaults the label to "Tag" when none is provided', () => {
		render(<Tag label={undefined as any} />);
		expect(screen.getByText('Tag')).toBeInTheDocument();
	});

	it('renders a custom label', () => {
		render(<Tag label="New" />);
		expect(screen.getByText('New')).toBeInTheDocument();
	});

	it('resolves a different background color for SM vs SECONDARY variant', () => {
		// Tag.base.tsx nests the colored View one level inside an outer
		// width/margin wrapper View, so find it via the label's ancestor
		// chain rather than assuming a fixed DOM depth.
		render(<Tag type={TagTypeTokens.SM} label="Small" />);
		render(<Tag type={TagTypeTokens.SECONDARY} label="Secondary" />);
		const smInner = screen
			.getByText('Small')
			.closest('div[style*="background-color"]') as HTMLElement;
		const secondaryInner = screen
			.getByText('Secondary')
			.closest('div[style*="background-color"]') as HTMLElement;

		// SM -> Secondary_100 (#FEEFC6).
		expect(getComputedStyle(smInner).backgroundColor).toBe(
			'rgb(254, 239, 198)',
		);
		expect(getComputedStyle(secondaryInner).backgroundColor).not.toBe(
			getComputedStyle(smInner).backgroundColor,
		);
	});

	it('an explicit bgColor/labelColor prop overrides the theme-derived value', () => {
		render(
			<Tag
				label="Override"
				bgColor={ColorTokens.Error_100}
				labelColor={ColorTokens.White}
			/>,
		);
		const wrapper = screen.getByText('Override').closest(
			'div[style*="background-color"]',
		) as HTMLElement;
		expect(getComputedStyle(wrapper).backgroundColor).toBe(
			'rgb(233, 60, 60)',
		);
	});
});
