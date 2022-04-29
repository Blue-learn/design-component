import React, { memo } from 'react';
import { View } from 'react-native';
import Typography from '../Typography/Typography';
import { TopBarBaseProps } from '@blue-learn/schema';

/**
 * Raw Component with Derived props + Theme
 */

const TopBarBase: React.FunctionComponent<
	TopBarBaseProps
> = ({}) => {
	/**
	 * use fontSize,fontWeight to full customise base component
	 * */

	return (
		<View>
			<Typography label={'Events'} />
		</View>
	);
};
export default memo(TopBarBase);
export { TopBarBase };
