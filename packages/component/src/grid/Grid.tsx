import {
	ColorTokens,
	GridItemProps,
	GridProps,
	GridStateTokens,
	IconSizeTokens,
	IconTokens,
	SizeTypeTokens,
	WidgetProps,
} from '@blue-learn/schema';
import React, { memo } from 'react';
import {
	FlatList,
	View,
	Dimensions,
} from 'react-native';
import { Icon } from '../icon/Icon';
import ThemeProvider from '@blue-learn/theme';
import { Space } from '../space/Space';

/**
 * @description
 * Grid supports children as React Component and widgetItems as WidgetItem Type[order by children -> widgetItems]
 * Note: renderItem should be passed to render WidgetItem
 **/

const RenderWidgetItem = ({
	item,
	renderItem,
	numColumns,
}: {
	item: GridItemProps;
	renderItem: Function;
	numColumns: number;
}) => {
	const theme = ThemeProvider.getTheme();
	return (
		<View
			style={{
				width:
					Dimensions.get('window').width / numColumns -
					theme.space[SizeTypeTokens.XL],
				marginRight: theme.space[SizeTypeTokens.MD],
			}}
		>
			{item.state === GridStateTokens.SELECTED ? (
				<View
					style={{
						alignSelf: 'flex-start',
						position: 'absolute',
						height: 20,
						width: 20,
						right: -5,
						top: -5,
						borderRadius: 10,
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: 200,
						backgroundColor:
							theme.colors[ColorTokens.Blue_300],
					}}
				>
					<Icon
						name={IconTokens.Check}
						size={IconSizeTokens.XXS}
						color={ColorTokens.Grey_500}
					/>
				</View>
			) : (
				<></>
			)}
			{renderItem &&
				item?.item &&
				renderItem(item?.item)}
		</View>
	);
};

const Grid: React.FC<GridProps & WidgetProps> = ({
	data,
	numColumns,
	renderItem,
}) => {
	if (data.length === 0) return <></>;
	return (
		<FlatList
			data={data}
			style={{
				paddingVertical: 10,
			}}
			numColumns={numColumns}
			ItemSeparatorComponent={() => (
				<Space size={SizeTypeTokens.LG} />
			)}
			renderItem={(item) => (
				<RenderWidgetItem
					{...item}
					renderItem={renderItem}
					numColumns={numColumns}
				/>
			)}
			keyExtractor={(item, index) =>
				index.toString()
			}
		/>
	);
};

export default memo(Grid);
export { Grid };
