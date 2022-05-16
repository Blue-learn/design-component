import {
	ButtonTypeTokens,
	ColorTokens,
	FontSizeTokens,
	SpaceTypeTokens,
	TabsProps,
} from '@blue-learn/schema';
import React, {
	memo,
	useReducer,
	useState,
} from 'react';
import Button from '../button/Button';
import {
	ScrollView,
	StyleSheet,
	View,
} from 'react-native';
import ButtonBase from '../button/Button.base';

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
				{options.map(({ label, disabled }, i) => {
					const isActive = i == activeTab;
					return (
						<ButtonBase
							paddingHorizontal={SpaceTypeTokens.XL}
							paddingVertical={SpaceTypeTokens.MD}
							labelColor={ColorTokens.Grey_500}
							fontSize={FontSizeTokens.md}
							bgColor={
								isActive
									? ColorTokens.Blue_100
									: ColorTokens.Transparent
							}
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
