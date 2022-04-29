import { TopBarProps } from '@blue-learn/schema';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import TopBarBase from './TopBar.base';

/**
 * Primary UI component for user interaction
 */

const styles = StyleSheet.create({
	// container: {
	// 	display: 'flex',
	// 	flexDirection: 'row',
	// 	alignItems: 'center',
	// 	justifyContent: 'space-between',
	// 	overflow: 'hidden',
	// },
});

const TopBar: React.FunctionComponent<
	TopBarProps
> = ({ topBarType }) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	return <TopBarBase />;
};

export default memo(TopBar);
export { TopBar };
