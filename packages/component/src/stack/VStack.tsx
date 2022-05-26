import {StackBaseProps} from '@blue-learn/schema';
import React, {memo} from 'react';
import StackBase from './Stack.base';

const VStack: React.FC<StackBaseProps> = (props) => {
	return (
		<StackBase direction='column' {...props} />
	);
};

export default memo(VStack);
export { VStack };
