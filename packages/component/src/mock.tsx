import React from 'react';
import { WidgetItem } from '@blue-learn/schema';
import _noop from 'lodash-es/noop';
import _get from 'lodash-es/get';
import { WidgetRegistry } from './registry';
import { TapAction } from '@blue-learn/schema';

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

const performAction = async (
	action: TapAction,
) => {
	console.log('action performed', action);
};

export const CommonWidgetProps = {
	renderItem,
	isVisible: true,
	modelUpdateWrapper: (fn: Function) => _noop,
	performAction,
};
