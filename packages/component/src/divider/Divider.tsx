import {DividerProps,} from '@blue-learn/schema';
import ThemeProvider, {DividerColor,} from '@blue-learn/theme';
import React, {memo} from 'react';
import {View} from 'react-native';

const Divider: React.FunctionComponent<
	DividerProps
> = ({
	color = DividerColor,
	thickness = 1,
	marginVertical,
	paddingHorizontal,
}) => {
	const theme = ThemeProvider.getTheme();
	return (
		<View
			style={{
				paddingHorizontal:
					theme.space[paddingHorizontal] | 0,
			}}
		>
			<View
				style={{
					backgroundColor: theme.colors[color],
					height: thickness,
					marginVertical: theme.space[marginVertical],

					width: '100%',
				}}
			/>
		</View>
	);
};

export default memo(Divider);
export { Divider };
