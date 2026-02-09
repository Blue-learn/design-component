import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeProvider, { THEMES } from '@blue-learn/theme';
import TextInput from './TextInput';

beforeAll(() => {
	ThemeProvider.init(THEMES.LIGHT_MOBILE);
});

describe('TextInput', () => {
	it('renders with the default placeholder', () => {
		render(<TextInput />);
		expect(
			screen.getByPlaceholderText('Type here'),
		).toBeInTheDocument();
	});

	it('renders a custom placeholder and initial value', () => {
		render(<TextInput placeholder="Email" value="a@b.com" />);
		expect(screen.getByPlaceholderText('Email')).toHaveValue(
			'a@b.com',
		);
	});

	it('invokes onChangeText with the new text as the user types', () => {
		const onChangeText = jest.fn();
		render(<TextInput onChangeText={onChangeText} value="" />);
		fireEvent.change(screen.getByPlaceholderText('Type here'), {
			target: { value: 'hello' },
		});
		expect(onChangeText).toHaveBeenCalledWith('hello');
	});

	it('invokes triggerAction with the typed value as payload.value (replacing, not merging, the original payload)', () => {
		// TextInput.tsx's own onChangeText wrapper calls
		// `triggerAction({ ...action, payload: { value: text } })`. This
		// *replaces* whatever `action.payload` was passed in - it does not
		// merge it (TextInputBase.tsx has a differently-shaped
		// `handleTextChange` doing `payload: {...action.payload, text}`,
		// but that code path is unreachable here because TextInput.tsx
		// always supplies its own onChangeText to TextInputBase). Pin down
		// the payload shape that's actually observed by consumers.
		const triggerAction = jest.fn();
		const action = { type: 'SEARCH', payload: { extra: 1 } };
		render(
			<TextInput
				action={action}
				triggerAction={triggerAction}
				value=""
			/>,
		);
		fireEvent.change(screen.getByPlaceholderText('Type here'), {
			target: { value: 'query' },
		});
		expect(triggerAction).toHaveBeenCalledWith({
			type: 'SEARCH',
			payload: { value: 'query' },
		});
	});

	it('disables the input and marks it read-only when isDisabled is true', () => {
		render(<TextInput isDisabled value="" />);
		expect(screen.getByPlaceholderText('Type here')).toHaveAttribute(
			'readonly',
		);
	});

	it('renders a title label and caption when provided', () => {
		render(
			<TextInput
				title="Your name"
				caption="As shown on your ID"
				value=""
			/>,
		);
		expect(screen.getByText('Your name')).toBeInTheDocument();
		expect(screen.getByText('As shown on your ID')).toBeInTheDocument();
	});
});
