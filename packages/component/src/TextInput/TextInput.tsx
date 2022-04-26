import { TextInputProps } from '@blue-learn/schema';
import React, { memo } from 'react';
import { TextInputBase } from './TextInput.base';

/**
 * Primary UI component for user interaction
 */

const TextInput: React.FunctionComponent<
	TextInputProps
> = ({ ...props }) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	return <TextInputBase {...props} />;
};

export default memo(TextInput);
export { TextInput };
