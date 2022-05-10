import { HStackProps } from '@blue-learn/schema';
import React from 'react';
import { memo } from 'react';
import StackBase from './Stack.base';

const VStack: React.FC<HStackProps> = (props) => {
	return (
		<StackBase direction='column' {...props} />
	);
};

export default memo(VStack);
export { VStack };
