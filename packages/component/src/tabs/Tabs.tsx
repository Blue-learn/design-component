import {
	ButtonTypeTokens,
	ColorTokens,
	TabsProps,
} from '@blue-learn/schema';
import React, { memo, useState } from 'react';
import {
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';
import Button from '../button/Button';

// const reducer = (
// 	state,
// 	action: {
// 		type: 'switch_tab';
// 		payload: number;
// 	},
// ) => {
// 	const { type, payload } = action;

// 	let currentSelected = state.selected;
// 	switch (type) {
// 		case 'switch_tab':
// 			return {
// 				...state,
// 				selected: state.multiple
// 					? [...currentSelected, payload]
// 					: payload,
// 			};

// 		default:
// 			return state;
// 	}
// };

const styles = StyleSheet.create({
	menuBar: {
		flexDirections: 'row',
		paddingHorizontal: 16,
	},
	children: {
		paddingVertical: 12,
	},
});

const Tabs: React.FunctionComponent<
	TabsProps
> = ({ options = [], components }) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<>
			<ScrollView horizontal style={styles.menuBar}>
				{options?.map(({ label, disabled }, i) => {
					return (
						<Button
							type={ButtonTypeTokens.MediumGhost}
							labelColor={ColorTokens.Grey_100}
							label={label}
							onPress={() => {
								if (disabled) return;
								setActiveTab(i);
							}}
						/>
					);
				})}
			</ScrollView>
			<View style={styles.children}>
				{components[activeTab]}
			</View>
		</>
	);
};

export default memo(Tabs);
export { Tabs };
