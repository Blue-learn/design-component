import { SpaceProps } from '@blue-learn/schema';
import React, { memo } from 'react';
import { View } from 'react-native';

const Space: React.FunctionComponent<
	SpaceProps
> = ({ size = 2 }) => {
	return (
		<View style={{ width: size, height: size }} />
	);
};

export default memo(Space);
export { Space };
