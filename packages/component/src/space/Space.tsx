import React from 'react';
import { memo } from 'react';
import { View } from 'react-native';
import { SpaceProps } from '@blue-learn/schema';

const Space: React.FunctionComponent<
	SpaceProps
> = ({ size = 2 }) => {
	return (
		<View style={{ width: size, height: size }} />
	);
};

export default memo(Space);
export { Space };
