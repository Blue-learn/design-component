import React from 'react';
import { render } from '@testing-library/react';
import {
	StackType,
	StackAlignItems,
	StackJustifyContent,
} from '@blue-learn/schema';
import Stack from './Stack';

describe('Stack', () => {
	it('renders its children', () => {
		const { getByText } = render(
			<Stack>
				<span>child-1</span>
			</Stack>,
		);
		expect(getByText('child-1')).toBeInTheDocument();
	});

	it('defaults to column flex-direction', () => {
		const { container } = render(
			<Stack>
				<span>x</span>
			</Stack>,
		);
		expect(
			getComputedStyle(container.firstChild as Element).flexDirection,
		).toBe('column');
	});

	it('renders row direction, alignItems and justifyContent from props', () => {
		const { container } = render(
			<Stack
				type={StackType.row}
				alignItems={StackAlignItems.center}
				justifyContent={StackJustifyContent.spaceBetween}
			>
				<span>x</span>
			</Stack>,
		);
		const style = getComputedStyle(container.firstChild as Element);
		expect(style.flexDirection).toBe('row');
		expect(style.alignItems).toBe('center');
		expect(style.justifyContent).toBe('space-between');
	});

	it('alignX/alignY override justifyContent/alignItems when provided', () => {
		const { container } = render(
			<Stack
				justifyContent={StackJustifyContent.flexStart}
				alignItems={StackAlignItems.flexStart}
				alignX={StackJustifyContent.center}
				alignY={StackAlignItems.center}
			>
				<span>x</span>
			</Stack>,
		);
		const style = getComputedStyle(container.firstChild as Element);
		expect(style.justifyContent).toBe('center');
		expect(style.alignItems).toBe('center');
	});

	it('renders widgetItems via renderItem in addition to children', () => {
		const renderItem = jest.fn((item: any) => (
			<span key={item.id}>{item.label}</span>
		));
		const { getByText } = render(
			<Stack
				widgetItems={[
					{ id: 1, label: 'first' } as any,
					{ id: 2, label: 'second' } as any,
				]}
				renderItem={renderItem}
			>
				<span>static-child</span>
			</Stack>,
		);
		expect(getByText('static-child')).toBeInTheDocument();
		expect(getByText('first')).toBeInTheDocument();
		expect(getByText('second')).toBeInTheDocument();
		expect(renderItem).toHaveBeenCalledTimes(2);
	});
});
