import React, { memo } from 'react';
import {
	ChipProps,
	ChipItemProps,
	StackType,
	StackAlignItems,
	StackJustifyContent,
} from '@blue-learn/schema';
import ChipBase from './Chip.base';
import _map from 'lodash-es/map';
import Stack from '../stack/Stack';

/**
 * Primary UI component for user interaction
 */

const Chip: React.FunctionComponent<
	ChipProps
> = ({ ...props }) => {
	/**
	 *  logic -> base-component(...props)
	 * */

	return (
		<Stack
			type={StackType.row}
			alignItems={StackAlignItems.center}
			justifyContent={StackJustifyContent.flexStart}
		>
			{_map(props.data, (item: ChipItemProps) => (
				<ChipBase {...item} />
			))}
		</Stack>
	);
};

export default memo(Chip);
export { Chip };
