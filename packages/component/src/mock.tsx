import React from 'react';
import { WidgetItem } from '@blue-learn/schema';
import _get from 'lodash-es/get';
import { WidgetRegistry } from './registry';
import { Action } from '@blue-learn/schema';

const renderItem = (item: WidgetItem) => {
	const type = _get(item, 'type');
	const Element = WidgetRegistry[type];
	return (
		<Element.Component
			{...item.props}
			renderItem={renderItem}
		/>
	);
};

const triggerAction = async (action: Action) => {
	console.log('mocked action performed', action);
};

export const MockedWidgetProps = {
	renderItem,
	isVisible: true,
	triggerAction: triggerAction,
	action: {
		mockAction: function mockAction() {
			console.warn('Mock Action triggered');
		},
	},
};
