import React from 'react';
import {
	fireEvent,
	render,
} from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import {
	BorderRadiusTokens,
	ColorTokens,
	ShadowTypeTokens,
	SizeTypeTokens,
	StackAlignItems,
	StackJustifyContent,
} from '@blue-learn/schema';
import Card from '../Card';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

const styleOf = (container: HTMLElement) =>
	getComputedStyle(container.firstChild as Element);

describe('Card', () => {
	it('renders header, body and footer children in that order', () => {
		// Card composes three named slots into a single flat child array. The
		// ordering is the whole contract - a reordering would silently move a
		// card's footer above its title everywhere the component is used.
		const { container } = render(
			<Card
				header={{ children: <span>H</span> }}
				body={{ children: <span>B</span> }}
				footer={{ children: <span>F</span> }}
			/>,
		);
		expect(container.textContent).toBe('HBF');
	});

	it('renders widgetItems through renderItem, after each slot’s children', () => {
		// This is the server-driven-UI path: a payload supplies widgetItems
		// and the host app supplies renderItem. Both must render, and the
		// per-slot ordering (children first, then widgetItems) has to hold.
		const { container } = render(
			<Card
				header={{
					children: <span>h-child</span>,
					widgetItems: [{ id: 'h', type: 'T' }],
				}}
				body={{
					widgetItems: [{ id: 'b', type: 'T' }],
				}}
				footer={{
					widgetItems: [{ id: 'f', type: 'T' }],
				}}
				renderItem={(item) => (
					<span key={item.id}>[{item.id}]</span>
				)}
			/>,
		);
		expect(container.textContent).toBe(
			'h-child[h][b][f]',
		);
	});

	it('ignores widgetItems when no renderItem is supplied', () => {
		// A payload can carry widgetItems into a host that has not wired up a
		// renderer. Card must render nothing for them rather than crash.
		const { container } = render(
			<Card
				header={{
					children: <span>only-child</span>,
					widgetItems: [{ id: 'h', type: 'T' }],
				}}
			/>,
		);
		expect(container.textContent).toBe('only-child');
	});

	it('resolves bgColor and borderRadius through the theme', () => {
		// The props are tokens; the rendered style must be the resolved
		// palette hex and pixel radius. A broken lookup gives `undefined`,
		// which RN-web drops - so the card silently renders transparent and
		// square.
		const { container } = render(
			<Card
				bgColor={ColorTokens.Primary_500}
				borderRadius={BorderRadiusTokens.BR2}
				header={{ children: <span>x</span> }}
			/>,
		);
		const style = styleOf(container);
		// Primary_500 = #5169F6, borderRadius BR2 = 12.
		expect(style.backgroundColor).toBe(
			'rgb(81, 105, 246)',
		);
		expect(style.borderTopLeftRadius).toBe('12px');
	});

	it('defaults to LG padding on all four sides', () => {
		// Card.tsx defaults padding to {vertical: LG, horizontal: LG}. Every
		// card in the library that does not override padding depends on this.
		const { container } = render(
			<Card header={{ children: <span>x</span> }} />,
		);
		const style = styleOf(container);
		// space[LG] = 12
		expect(style.paddingTop).toBe('12px');
		expect(style.paddingBottom).toBe('12px');
		expect(style.paddingLeft).toBe('12px');
		expect(style.paddingRight).toBe('12px');
	});

	it('vertical/horizontal padding shorthands win over the per-side values', () => {
		// Card.tsx resolves each side as `padding.vertical || padding.top`.
		// That precedence is easy to invert in a refactor, and the result -
		// a card that ignores the shorthand a caller passed - would be subtle.
		const { container } = render(
			<Card
				padding={{
					vertical: SizeTypeTokens.XXL,
					horizontal: SizeTypeTokens.MD,
					top: SizeTypeTokens.NONE,
					left: SizeTypeTokens.NONE,
				}}
				header={{ children: <span>x</span> }}
			/>,
		);
		const style = styleOf(container);
		// XXL = 20, MD = 8; the NONE per-side values must be ignored.
		expect(style.paddingTop).toBe('20px');
		expect(style.paddingBottom).toBe('20px');
		expect(style.paddingLeft).toBe('8px');
		expect(style.paddingRight).toBe('8px');
	});

	it('falls back to per-side padding when no shorthand is given', () => {
		const { container } = render(
			<Card
				padding={{
					top: SizeTypeTokens.XXXL,
					bottom: SizeTypeTokens.SM,
					left: SizeTypeTokens.XL,
					right: SizeTypeTokens.NONE,
				}}
				header={{ children: <span>x</span> }}
			/>,
		);
		const style = styleOf(container);
		expect(style.paddingTop).toBe('24px');
		expect(style.paddingBottom).toBe('4px');
		expect(style.paddingLeft).toBe('16px');
		expect(style.paddingRight).toBe('0px');
	});

	it('applies margin with the same shorthand precedence', () => {
		const { container } = render(
			<Card
				margin={{
					vertical: SizeTypeTokens.LG,
					right: SizeTypeTokens.XXXXL,
				}}
				header={{ children: <span>x</span> }}
			/>,
		);
		const style = styleOf(container);
		expect(style.marginTop).toBe('12px');
		expect(style.marginBottom).toBe('12px');
		expect(style.marginRight).toBe('32px');
	});

	it('resolves a shadow token into a real box-shadow, and renders flat without one', () => {
		// Card.tsx optional-chains into the shadow entry and falls back to a
		// zero shadow. That fallback is what stops an unset `shadow` prop from
		// producing `box-shadow: undefined` - but it also means a *broken*
		// token silently renders flat, so pin both directions.
		const { container: withShadow } = render(
			<Card
				shadow={ShadowTypeTokens.E5}
				header={{ children: <span>x</span> }}
			/>,
		);
		const { container: flat } = render(
			<Card header={{ children: <span>x</span> }} />,
		);
		// E5 = offset {0,4}, radius 4, opacity 0.2
		expect(styleOf(withShadow).boxShadow).toBe(
			'0px 4px 4px rgba(0,0,0,0.20)',
		);
		expect(styleOf(flat).boxShadow).toBe(
			'0px 0px 0px rgba(0,0,0,0.00)',
		);
	});

	it('passes justifyContent and alignItems straight through to the flex container', () => {
		const { container } = render(
			<Card
				justifyContent={StackJustifyContent.spaceBetween}
				alignItems={StackAlignItems.center}
				header={{ children: <span>x</span> }}
			/>,
		);
		const style = styleOf(container);
		expect(style.justifyContent).toBe('space-between');
		expect(style.alignItems).toBe('center');
	});

	it('wraps itself in a pressable only when onPress is supplied', () => {
		// A Card with no onPress must not become a focusable, clickable
		// element - that would put every static card into the keyboard tab
		// order and announce it as interactive to screen readers.
		const { container: interactive } = render(
			<Card
				onPress={() => {}}
				header={{ children: <span>x</span> }}
			/>,
		);
		const { container: staticCard } = render(
			<Card header={{ children: <span>x</span> }} />,
		);
		expect(
			(interactive.firstChild as HTMLElement).getAttribute(
				'tabindex',
			),
		).toBe('0');
		expect(
			(staticCard.firstChild as HTMLElement).getAttribute(
				'tabindex',
			),
		).toBeNull();
	});

	it('invokes onPress and triggerAction with the action payload on press', () => {
		// handleAction fires both: the local callback and the server-driven
		// action dispatch. Dropping either half breaks a different consumer -
		// direct users lose their callback, payload-driven screens lose
		// navigation.
		const onPress = jest.fn();
		const triggerAction = jest.fn();
		const action = {
			type: 'OPEN_PROFILE',
			payload: { id: 7 },
		};
		const { container } = render(
			<Card
				onPress={onPress}
				action={action}
				triggerAction={triggerAction}
				header={{ children: <span>x</span> }}
			/>,
		);
		fireEvent.click(container.firstChild as Element);
		expect(onPress).toHaveBeenCalledTimes(1);
		expect(triggerAction).toHaveBeenCalledWith(action);
	});

	it('does not dispatch an action when triggerAction is missing', () => {
		// `action && triggerAction && triggerAction(action)` - a payload can
		// carry an action into a host that has not wired a dispatcher. That
		// must be a no-op, not a crash.
		const onPress = jest.fn();
		const { container } = render(
			<Card
				onPress={onPress}
				action={{ type: 'X', payload: {} }}
				header={{ children: <span>x</span> }}
			/>,
		);
		expect(() =>
			fireEvent.click(container.firstChild as Element),
		).not.toThrow();
		expect(onPress).toHaveBeenCalledTimes(1);
	});

	it('renders with no slots at all without crashing', () => {
		// Every slot is optional and defaults to `{children: <></>}`. A card
		// used purely as a styled surface must survive that.
		const { container } = render(<Card />);
		expect(container.firstChild).not.toBeNull();
		expect(container.textContent).toBe('');
	});
});
