import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import { SizeTypeTokens } from '@blue-learn/schema';
import Space from './Space';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

describe('Space', () => {
	it('defaults to the XS size (2px)', () => {
		const { container } = render(<Space />);
		const style = getComputedStyle(container.firstChild as Element);
		expect(style.width).toBe('2px');
		expect(style.height).toBe('2px');
	});

	it('resolves width/height from the space theme token map for a given size', () => {
		const { container } = render(<Space size={SizeTypeTokens.XXXL} />);
		const style = getComputedStyle(container.firstChild as Element);
		// sizeTypeTokensMap[XXXL] = 24 in light-mobile theme.
		expect(style.width).toBe('24px');
		expect(style.height).toBe('24px');
	});

	it('NONE size collapses the spacer to 0', () => {
		const { container } = render(<Space size={SizeTypeTokens.NONE} />);
		const style = getComputedStyle(container.firstChild as Element);
		expect(style.width).toBe('0px');
		expect(style.height).toBe('0px');
	});
});
