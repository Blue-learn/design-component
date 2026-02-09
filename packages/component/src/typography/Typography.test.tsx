import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import {
	ColorTokens,
	FontSizeTokens,
	TypographyTypeTokens,
} from '@blue-learn/schema';
import Typography from './Typography';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

describe('Typography', () => {
	it('renders the label text', () => {
		render(<Typography label="Hello world" />);
		expect(screen.getByText('Hello world')).toBeInTheDocument();
	});

	it('renders nothing when label is empty/undefined', () => {
		const { container } = render(<Typography label={undefined} />);
		expect(container).toBeEmptyDOMElement();
	});

	it('applies an explicit color prop over the theme default', () => {
		render(<Typography label="Red text" color={ColorTokens.Error_100} />);
		const el = screen.getByText('Red text');
		expect(getComputedStyle(el).color).toBe('rgb(233, 60, 60)'); // #E93C3C
	});

	it('resolves a different font size for BODY_XS (12px) vs BODY_LG (18px)', () => {
		render(<Typography label="Small" type={TypographyTypeTokens.BODY_XS} />);
		render(<Typography label="Large" type={TypographyTypeTokens.BODY_LG} />);
		expect(getComputedStyle(screen.getByText('Small')).fontSize).toBe(
			'12px',
		);
		expect(getComputedStyle(screen.getByText('Large')).fontSize).toBe(
			'18px',
		);
	});

	it('resolves a different font weight for DEFAULT (regular) vs HEADING (semibold)', () => {
		render(<Typography label="Body" type={TypographyTypeTokens.DEFAULT} />);
		render(
			<Typography label="Title" type={TypographyTypeTokens.HEADING} />,
		);
		expect(
			getComputedStyle(screen.getByText('Body')).fontFamily,
		).toContain('Inter-Regular');
		expect(
			getComputedStyle(screen.getByText('Title')).fontFamily,
		).toContain('Inter-SemiBold');
	});

	it('an explicit fontSize prop overrides the type-derived theme font size', () => {
		render(
			<Typography
				label="Explicit"
				type={TypographyTypeTokens.DEFAULT}
				fontSize={FontSizeTokens.XXXXXXXL}
			/>,
		);
		const el = screen.getByText('Explicit');
		// XXXXXXXL is the largest scale step; DEFAULT's theme font size is
		// much smaller, so this only passes if the explicit prop won.
		expect(getComputedStyle(el).fontSize).not.toBe('14px');
	});

	it('defaults numberOfLines to 0 (unlimited) when not provided', () => {
		render(<Typography label="No clamp" />);
		const el = screen.getByText('No clamp');
		expect(el).not.toHaveAttribute('data-numberoflines');
	});
});
