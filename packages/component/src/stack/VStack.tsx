import {VStackProps} from '@blue-learn/schema';
import React, {memo} from 'react';
import StackBase from './Stack.base';

const VStack: React.FC<VStackProps> = (props) => {
	return (
		<StackBase direction='column' {...props} />
	);
};

export default memo(VStack);
export { VStack };
