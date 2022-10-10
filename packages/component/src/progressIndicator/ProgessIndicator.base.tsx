import React, { memo } from 'react';
import { View } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokens,
	ColorTokensMap,
	BorderRadiusTokens,
	ProgressIndicatorProps,
	ProgressIndicatorThemeProps,
	SizeTypeTokens,
	StackType,
	StackAlignItems,
	StackJustifyContent,
} from '@blue-learn/schema';
import Stack from '../stack/Stack';
import Space from '../space/Space';

const ProgressIndicatorBase: React.FunctionComponent<
	ProgressIndicatorProps &
		ProgressIndicatorThemeProps
> = ({
	size = 1,
	activeIndex = 0,
	color = ColorTokens.Blue_600,
	borderRadius = BorderRadiusTokens.BR4,
	height = SizeTypeTokens.MD,
}) => {
	const theme = ThemeProvider.getTheme();

	const colorMapping: ColorTokensMap =
		theme.colors;

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const heightValue = theme.space[height];

	const renderIndicator = (
		_: any,
		index: number,
	) => {
		return (
			<>
				<View
					style={{
						flex: 1,
						height: heightValue,
						borderRadius: borderRadiusValue,
						backgroundColor: colorMapping[color],
						opacity: index <= activeIndex ? 1 : 0.3,
					}}
				/>
				<Space
					size={
						index + 1 == size
							? SizeTypeTokens.NONE
							: SizeTypeTokens.SM
					}
				/>
			</>
		);
	};

	return (
		<Stack
			type={StackType.row}
			alignItems={StackAlignItems.center}
			justifyContent={
				StackJustifyContent.spaceBetween
			}
		>
			{Array.from({ length: size }).map(
				renderIndicator,
			)}
		</Stack>
	);
};
export default memo(ProgressIndicatorBase);
export { ProgressIndicatorBase };
