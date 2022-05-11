import {
	ChipOption,
	ChipsProps,
	ChipTypeTokens,
} from '@blue-learn/schema';
import React, {
	memo,
	useEffect,
	useReducer,
} from 'react';
import { StyleSheet, View } from 'react-native';
import ChipBase from './Chip.base';

const styles = StyleSheet.create({
	wrapper: {
		alignItems: 'center',
		wrap: 'wrap',
		flexDirection: 'row',
	},
});

// initial state
const initialState = {
	options: [],
	selected: [],
	onValueChange: (e) => console.log(e),
};

// API logic: how to update the database when the
// 'increment' API endpoint is called
const reducer = (
	state,
	action: {
		type: 'check' | 'uncheck';
		payload: ChipOption;
	},
) => {
	const { type, payload } = action;

	let currentSelected = state.selected;
	switch (type) {
		case 'check':
			return {
				...state,
				selected: state.multiple
					? [...currentSelected, payload]
					: payload,
			};
		case 'uncheck':
			return {
				...state,
				selected: state.multiple
					? currentSelected.filter(
							({ value }) => value != payload.value,
					  )
					: [],
			};

		default:
			return state;
	}
};

const Chips: React.FunctionComponent<
	ChipsProps
> = ({
	selectable,
	multiple,
	options,
	onValueChange = () => {},
}) => {
	const [state, dispatch] = useReducer(reducer, {
		multiple,
		selected: multiple ? [] : null,
		...initialState,
	});

	return (
		<View style={styles.wrapper}>
			{options.map(({ value, label }, i) => {
				let checked = multiple
					? state.selected?.length > 0 &&
					  !!state.selected.some(
							(sel) => sel.value == value,
					  )
					: state.selected &&
					  state.selected.value == value;
				return (
					<ChipBase
						type={
							selectable
								? checked
									? ChipTypeTokens.CHECKED
									: ChipTypeTokens.UNCHECKED
								: ChipTypeTokens.DEFAULT
						}
						value={value}
						label={label}
						onChange={() => {
							if (!selectable) return;

							if (checked) {
								dispatch({
									type: 'uncheck',
									payload: { value, label },
								});
							} else {
								dispatch({
									type: 'check',
									payload: { value, label },
								});
							}
							onValueChange(state.selected);
						}}
					/>
				);
			})}
		</View>
	);
};

export default memo(Chips);
export { Chips };
