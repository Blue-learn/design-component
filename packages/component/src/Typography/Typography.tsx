import { TypographyProps } from '@blue-learn/schema';
import React, { memo } from 'react';
import { TypographyBase } from './Typography.base';

/**
 * Primary UI component for user interaction
 */

const Typography: React.FunctionComponent<
	TypographyProps
> = ({ ...props }) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	return <TypographyBase {...props} />;
};

export default memo(Typography);
export { Typography };
