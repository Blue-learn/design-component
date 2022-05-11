import {
	ChipBaseProps,
	ChipTypeTokens,
	ColorTokens,
	CornerRadiusTokens,
	ShadowTypeTokens,
	SpaceTypeTokens,
} from '@blue-learn/schema';
import ThemeProvider from '@blue-learn/theme';
import React, { memo } from 'react';
import {
	StyleSheet,
	View,
	Pressable,
	Text,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		marginEnd: 8,
		marginBottom: 8,
		paddingHorizontal: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const ChipBase: React.FunctionComponent<
	ChipBaseProps
> = ({
	onChange,
	type = ChipTypeTokens.DEFAULT,
	label = 'Chips',
	bgColor = ColorTokens.Blue_400,
	borderRadius = CornerRadiusTokens.BR4,
	paddingVertical = SpaceTypeTokens.MD,
	shadow = ShadowTypeTokens.E1,
}) => {
	const theme = ThemeProvider.getTheme();
	const chipThemeProps = theme.chip[type];

	const colorValue =
		theme.colors[chipThemeProps.labelColor];

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const backgroundColorValue =
		theme.colors[chipThemeProps.backgroundColor];
	const borderColorValue =
		theme.colors[chipThemeProps.borderColor];

	const paddingValue =
		theme.space[paddingVertical];

	return (
		<Pressable
			style={[
				styles.container,
				{
					userSelect: 'none',
					transition: 0.3,
					borderRadius: borderRadiusValue,
					backgroundColor: backgroundColorValue,
					color: colorValue,
					paddingVertical: paddingValue,
					borderWidth: chipThemeProps.borderWidth,
					borderColor: borderColorValue,
				},
			]}
			onPress={onChange}
		>
			<Text>{label}</Text>
		</Pressable>
	);
};

export default memo(ChipBase);
export { ChipBase };
