import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import { AvatarTypeTokens, AvatarSizeTokens } from '@blue-learn/schema';
import Avatar from './Avatar';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

describe('Avatar', () => {
	it('renders nothing for SINGLE type when uri is missing', () => {
		const { container } = render(
			<Avatar type={AvatarTypeTokens.SINGLE} size={AvatarSizeTokens.MD} />,
		);
		expect(container.querySelectorAll('img')).toHaveLength(0);
	});

	it('renders exactly one image for SINGLE type with a uri', () => {
		const { container } = render(
			<Avatar
				type={AvatarTypeTokens.SINGLE}
				size={AvatarSizeTokens.MD}
				uri="https://example.com/a.png"
			/>,
		);
		const images = container.querySelectorAll('img');
		expect(images).toHaveLength(1);
		expect(images[0]).toHaveAttribute(
			'src',
			'https://example.com/a.png',
		);
	});

	it('renders nothing for MULTIPLE type when uris is missing', () => {
		const { container } = render(
			<Avatar type={AvatarTypeTokens.MULTIPLE} size={AvatarSizeTokens.MD} />,
		);
		expect(container.querySelectorAll('img')).toHaveLength(0);
	});

	it('renders at most 3 images for MULTIPLE type, even with more uris', () => {
		const { container } = render(
			<Avatar
				type={AvatarTypeTokens.MULTIPLE}
				size={AvatarSizeTokens.MD}
				uris={[
					'https://example.com/1.png',
					'https://example.com/2.png',
					'https://example.com/3.png',
					'https://example.com/4.png',
					'https://example.com/5.png',
				]}
			/>,
		);
		expect(container.querySelectorAll('img')).toHaveLength(3);
	});

	it('resolves a larger rendered size for XL (48) than for XS (20), per avatarTypeTokensMap', () => {
		// AvatarBase renders: <Stack><View width/height=size><View bg-image /><img /></View></Stack>
		// The size lands on the *wrapper* View, not the <img> itself.
		const { container: xs } = render(
			<Avatar
				type={AvatarTypeTokens.SINGLE}
				size={AvatarSizeTokens.XS}
				uri="https://example.com/a.png"
			/>,
		);
		const { container: xl } = render(
			<Avatar
				type={AvatarTypeTokens.SINGLE}
				size={AvatarSizeTokens.XL}
				uri="https://example.com/a.png"
			/>,
		);
		const xsWrapper = xs.querySelector('img')
			?.parentElement as HTMLElement;
		const xlWrapper = xl.querySelector('img')
			?.parentElement as HTMLElement;

		expect(getComputedStyle(xsWrapper).width).toBe('20px');
		expect(getComputedStyle(xlWrapper).width).toBe('48px');
	});
});
