import {
	ChipProps,
	ChipTypeTokens,
} from '@blue-learn/schema';
import React from 'react';
import { memo } from 'react';
import ChipBase from './Chip.base';

const Chip: React.FunctionComponent<
	ChipProps
> = ({ input, checked, ...rest }) => {
	return (
		<ChipBase
			type={
				input
					? checked
						? ChipTypeTokens.CHECKED
						: ChipTypeTokens.UNCHECKED
					: ChipTypeTokens.DEFAULT
			}
			{...rest}
		/>
	);
};

export default memo(Chip);
export { Chip };
