import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import {
	AspectRatioToken,
	BorderRadiusTokens,
	ColorTokens,
	ImageSizeTokens,
	ResizeModeToken,
} from '@blue-learn/schema';
import Image from '../Image';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

const rootStyle = (container: HTMLElement) =>
	getComputedStyle(container.firstChild as Element);

describe('Image', () => {
	it('renders nothing without a uri', () => {
		// Image.tsx guards `if (!uri || !size) return <></>`. Cards pass an
		// optional image URL straight through, so this is the common path for
		// a record with no picture - it must collapse entirely rather than
		// render a broken-image box.
		const { container } = render(
			<Image uri='' size={ImageSizeTokens.MD} />,
		);
		expect(container.innerHTML).toBe('');
	});

	it('renders nothing when size is explicitly null', () => {
		const { container } = render(
			<Image
				uri='https://example.test/a.png'
				size={null as unknown as ImageSizeTokens}
			/>,
		);
		expect(container.innerHTML).toBe('');
	});

	it('the `!size` guard does NOT fire for undefined - the LG default takes over first', () => {
		// Worth pinning because it is counter-intuitive: `size` is a *required*
		// prop in ImageProps, but Image.tsx also gives it a default of LG. A
		// default parameter only applies to `undefined`, so an image whose size
		// came back undefined from an API payload silently renders at 72px
		// rather than collapsing - while `null` from the same payload renders
		// nothing at all. The two "missing" values behave differently.
		const { container } = render(
			<Image
				uri='https://example.test/a.png'
				size={undefined as unknown as ImageSizeTokens}
			/>,
		);
		// imageSize[LG] = 72
		expect(rootStyle(container).width).toBe('72px');
	});

	it('resolves width from the imageSize theme map', () => {
		// The prop is a token; the rendered width has to be the resolved pixel
		// value. A broken lookup leaves the image auto-sized, which - combined
		// with the hardcoded `height: 'auto'` - collapses it to nothing.
		const { container } = render(
			<Image
				uri='https://example.test/a.png'
				size={ImageSizeTokens.MD}
			/>,
		);
		// imageSize[MD] = 48
		expect(rootStyle(container).width).toBe('48px');
	});

	it('renders FULL as a fluid 100% width', () => {
		// FULL is the one token backed by a percentage rather than a number.
		// If it were coerced to a pixel value, responsive layouts would break.
		const { container } = render(
			<Image
				uri='https://example.test/a.png'
				size={ImageSizeTokens.FULL}
			/>,
		);
		expect(rootStyle(container).width).toBe('100%');
	});

	it('sizes different tokens differently', () => {
		// Guards against every size collapsing to a single default, which
		// would still render "an image" and pass a looser assertion.
		const { container: small } = render(
			<Image
				uri='u'
				size={ImageSizeTokens.XXXS}
			/>,
		);
		const { container: large } = render(
			<Image uri='u' size={ImageSizeTokens.XXXL} />,
		);
		expect(rootStyle(small).width).toBe('14px');
		expect(rootStyle(large).width).toBe('180px');
	});

	it('resolves borderRadius through the theme', () => {
		const { container } = render(
			<Image
				uri='u'
				size={ImageSizeTokens.MD}
				borderRadius={BorderRadiusTokens.BR3}
			/>,
		);
		// borderRadius[BR3] = 16
		expect(
			rootStyle(container).borderTopLeftRadius,
		).toBe('16px');
	});

	it('applies borderTopRadius and borderBottomRadius to their own corners only', () => {
		// These exist so an image can sit flush at the top of a card: rounded
		// on top, square where it meets the card body. Mixing them up would
		// round the wrong edge.
		const { container } = render(
			<Image
				uri='u'
				size={ImageSizeTokens.MD}
				borderTopRadius={BorderRadiusTokens.BR3}
				borderBottomRadius={BorderRadiusTokens.BR0}
			/>,
		);
		const style = rootStyle(container);
		expect(style.borderTopLeftRadius).toBe('16px');
		expect(style.borderTopRightRadius).toBe('16px');
		expect(style.borderBottomLeftRadius).toBe('0px');
		expect(style.borderBottomRightRadius).toBe('0px');
	});

	it('draws a 3px border only when borderColor is supplied', () => {
		// Image.tsx keys borderWidth off the *presence* of borderColor
		// (`borderWidth: borderColor ? 3 : 0`). If that inverted, every image
		// in the library would gain a 3px border.
		const { container: bordered } = render(
			<Image
				uri='u'
				size={ImageSizeTokens.MD}
				borderColor={ColorTokens.Error_100}
			/>,
		);
		const { container: plain } = render(
			<Image uri='u' size={ImageSizeTokens.MD} />,
		);
		expect(rootStyle(bordered).borderTopWidth).toBe(
			'3px',
		);
		// Error_100 = #E93C3C
		expect(rootStyle(bordered).borderTopColor).toBe(
			'rgba(233,60,60,1.00)',
		);
		expect(rootStyle(plain).borderTopWidth).toBe('0px');
	});

	it('defaults to a 1:1 aspect ratio and honours an explicit one', () => {
		// aspectRatio is what gives the image its height (the height style is
		// hardcoded to 'auto'). A wrong ratio does not fail - it just crops or
		// letterboxes every image on the screen.
		const { container: square } = render(
			<Image uri='u' size={ImageSizeTokens.MD} />,
		);
		const { container: wide } = render(
			<Image
				uri='u'
				size={ImageSizeTokens.MD}
				aspectRatio={AspectRatioToken.A16_9}
			/>,
		);
		// Read the inline style rather than getComputedStyle: jsdom does not
		// implement the aspect-ratio property in its cascade, so it never
		// surfaces there even though react-native-web has set it.
		const ratioOf = (container: HTMLElement) =>
			Number(
				(container.firstChild as HTMLElement).style
					.aspectRatio,
			);
		expect(ratioOf(square)).toBe(1);
		expect(ratioOf(wide)).toBeCloseTo(16 / 9);
	});

	it('renders the DOM <img> path on the web target, pointed at the uri', () => {
		// Image.tsx branches on Platform.OS: native gets FastImage, web gets
		// react-native's <Image>. Under the react-native -> react-native-web
		// alias used for tests (and by Storybook, and by any web consumer),
		// the web branch is what actually runs.
		const { container } = render(
			<Image
				uri='https://example.test/photo.png'
				size={ImageSizeTokens.MD}
			/>,
		);
		const img = container.querySelector('img');
		expect(img).not.toBeNull();
		expect(img!.getAttribute('src')).toBe(
			'https://example.test/photo.png',
		);
	});

	it('accepts an explicit resizeMode without altering the resolved geometry', () => {
		// resizeMode changes how the bitmap fills the box, never the box
		// itself. A regression that let it affect layout would reflow cards.
		const { container: cover } = render(
			<Image
				uri='u'
				size={ImageSizeTokens.LG}
				resizeMode={ResizeModeToken.COVER}
			/>,
		);
		const { container: contain } = render(
			<Image
				uri='u'
				size={ImageSizeTokens.LG}
				resizeMode={ResizeModeToken.CONTAIN}
			/>,
		);
		expect(rootStyle(cover).width).toBe('72px');
		expect(rootStyle(contain).width).toBe('72px');
	});
});
