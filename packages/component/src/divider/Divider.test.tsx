import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import {
	ColorTokens,
	DividerSizeTokens,
	SizeTypeTokens,
} from '@blue-learn/schema';
import Divider from './Divider';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

describe('Divider', () => {
	it('resolves height from DividerSizeTokens (SM=1px, LG=4px)', () => {
		const { container: sm } = render(<Divider size={DividerSizeTokens.SM} />);
		const { container: lg } = render(<Divider size={DividerSizeTokens.LG} />);
		expect(
			getComputedStyle(sm.firstChild as Element).height,
		).toBe('1px');
		expect(
			getComputedStyle(lg.firstChild as Element).height,
		).toBe('4px');
	});

	it('defaults to Grey_100 background color', () => {
		const { container } = render(<Divider size={DividerSizeTokens.SM} />);
		// Grey_100 = #F1F1F4
		expect(
			getComputedStyle(container.firstChild as Element)
				.backgroundColor,
		).toBe('rgb(241, 241, 244)');
	});

	it('applies an explicit color override', () => {
		const { container } = render(
			<Divider size={DividerSizeTokens.SM} color={ColorTokens.Error_100} />,
		);
		// Error_100 = #E93C3C
		expect(
			getComputedStyle(container.firstChild as Element)
				.backgroundColor,
		).toBe('rgb(233, 60, 60)');
	});

	it('applies vertical margin shorthand to both top and bottom', () => {
		const { container } = render(
			<Divider
				size={DividerSizeTokens.SM}
				margin={{ vertical: SizeTypeTokens.XXL }}
			/>,
		);
		const style = getComputedStyle(container.firstChild as Element);
		// sizeTypeTokensMap[XXL] = 20 in light-mobile theme.
		expect(style.marginTop).toBe('20px');
		expect(style.marginBottom).toBe('20px');
	});
});
