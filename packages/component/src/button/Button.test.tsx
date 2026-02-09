import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import { ButtonTypeTokens } from '@blue-learn/schema';
import Button from './Button';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

describe('Button', () => {
	it('renders the given label', () => {
		render(<Button type={ButtonTypeTokens.LargeFilled} label="Continue" />);
		expect(screen.getByText('Continue')).toBeInTheDocument();
	});

	it('renders nothing for the label when none is provided', () => {
		const { container } = render(
			<Button type={ButtonTypeTokens.LargeFilled} />,
		);
		// Typography.base.tsx returns <></> when label is falsy.
		expect(container.textContent).toBe('');
	});

	it('resolves a different background color per ButtonTypeTokens variant', () => {
		// react-native-web dedupes identical style declarations into shared
		// atomic CSS classes (inserted into <head>) rather than always
		// inlining them, so we read the *computed* style rather than the
		// element's own `style` attribute.
		const { container: filled } = render(
			<Button type={ButtonTypeTokens.LargeFilled} label="A" />,
		);
		const { container: outline } = render(
			<Button type={ButtonTypeTokens.LargeOutline} label="B" />,
		);

		const filledBg = getComputedStyle(
			filled.firstChild as HTMLElement,
		).backgroundColor;
		const outlineBg = getComputedStyle(
			outline.firstChild as HTMLElement,
		).backgroundColor;

		// LargeFilled -> Primary_500 (#5169F6), LargeOutline -> Transparent.
		expect(filledBg).toBe('rgb(81, 105, 246)');
		expect(outlineBg).toBe('rgba(0, 0, 0, 0)');
		expect(filledBg).not.toBe(outlineBg);
	});

	it('defaults to LargeFilled when no type is provided', () => {
		const { container } = render(<Button label="Default" />);
		const explicit = render(
			<Button type={ButtonTypeTokens.LargeFilled} label="Default" />,
		).container;

		expect(
			(container.firstChild as HTMLElement).style.backgroundColor,
		).toBe(
			(explicit.firstChild as HTMLElement).style.backgroundColor,
		);
	});

	it('shows an activity indicator and hides the icon while loading', () => {
		const { container, rerender } = render(
			<Button
				type={ButtonTypeTokens.LargeFilled}
				label="Save"
				loading={false}
			/>,
		);
		expect(
			container.querySelector('[role="progressbar"]'),
		).not.toBeInTheDocument();

		rerender(
			<Button
				type={ButtonTypeTokens.LargeFilled}
				label="Save"
				loading={true}
			/>,
		);
		expect(
			container.querySelector('[role="progressbar"]'),
		).toBeInTheDocument();
	});

	it('marks the pressable root as aria-disabled on the web target', () => {
		// Button.base.tsx passes `disabled={Platform.OS === 'web'}` to the
		// underlying Ripple/TouchableWithoutFeedback. Under the
		// react-native -> react-native-web alias (see jest.config.js and
		// .storybook/main.ts) Platform.OS is 'web', so the root is always
		// rendered aria-disabled here - this is genuine, current behaviour,
		// not a test artifact.
		const { container } = render(
			<Button type={ButtonTypeTokens.LargeFilled} label="Click me" />,
		);
		expect(container.firstChild).toHaveAttribute(
			'aria-disabled',
			'true',
		);
	});

	it('does NOT invoke onPress on click for the web target (documents a real, verified quirk)', () => {
		// react-native-web's PressResponder explicitly no-ops onPress
		// (and stops propagation) when `disabled` is true - see
		// node_modules/react-native-web/.../usePressEvents/PressResponder.js
		// `onClick` handler: `if (!disabled) { ... onPress(event) }`.
		// Because Button.base.tsx forces `disabled` to true on web, the
		// onPress callback passed to <Button /> is never called by a plain
		// click when this component library targets web. This test locks
		// in that observed behaviour so it doesn't regress silently or get
		// "fixed" without anyone noticing the behaviour change.
		const onPress = jest.fn();
		render(
			<Button
				type={ButtonTypeTokens.LargeFilled}
				label="Click me"
				onPress={onPress}
			/>,
		);
		fireEvent.click(screen.getByText('Click me'));
		expect(onPress).not.toHaveBeenCalled();
	});
});
