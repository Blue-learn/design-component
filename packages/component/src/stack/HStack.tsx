import {StackBaseProps} from '@blue-learn/schema';
import React, {memo} from 'react';
import StackBase from './Stack.base';

const HStack: React.FC<StackBaseProps> = (props) => {
	return <StackBase direction='row' {...props} />;
};

export default memo(HStack);
export { HStack };
