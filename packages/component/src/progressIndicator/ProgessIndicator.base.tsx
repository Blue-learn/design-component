import React, { memo } from 'react';
import { View } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import {
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	ProgressIndicatorProps,
	ProgressIndicatorThemeProps,
	SpaceTypeTokens,
	StackAlignType,
	StackType,
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
	borderRadius = CornerRadiusTokens.BR4,
	height = SpaceTypeTokens.MD,
}) => {
	const theme = ThemeProvider.getTheme();

	const colorMapping: ColorTokensMap =
		theme.colors;

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const heightValue = theme.space[height];

	return (
		<Stack
			type={StackType.row}
			alignY={StackAlignType.center}
			alignX={StackAlignType.spaceBetween}
		>
			{Array.from({ length: size }).map(
				(_, index) => (
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
						<Space size={index + 1 == size ? 0 : 4} />
					</>
				),
			)}
		</Stack>
	);
};
export default memo(ProgressIndicatorBase);
export { ProgressIndicatorBase };
