import { HStackProps } from '@blue-learn/schema';
import React from 'react';
import { memo } from 'react';
import StackBase from './Stack.base';

const HStack: React.FC<HStackProps> = (props) => {
	return <StackBase direction='row' {...props} />;
};

export default memo(HStack);
export { HStack };
