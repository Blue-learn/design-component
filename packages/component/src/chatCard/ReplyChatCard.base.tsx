import React, { memo } from 'react';
import {
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	FontSizeTokens,
	ChatCardBaseProps,
	SpaceTypeTokens,
} from '@blue-learn/schema';
import { StyleSheet, View } from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import { Typography } from '../typography/Typography';

const styles = StyleSheet.create({
	container: {},
});

/**
 * Raw Component with Derived props + Theme
 */
const ReplyChatCardBase: React.FunctionComponent<
	ChatCardBaseProps
> = ({
	label = 'Are bro how was the video? Hope you had fun watching it. It was wildd',
	bgColor = ColorTokens.Grey_100,
	labelColor = ColorTokens.Grey_500,
	borderRadius = CornerRadiusTokens.BR2,
	padding = SpaceTypeTokens.MD,
}) => {
	/**
	 * use type, size, buttonThemePros, colorMapping to full customise base component
	 * */

	const theme = ThemeProvider.getTheme();

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const backgroundColorValue =
		theme.colors[bgColor];

	const paddingValue: ColorTokensMap =
		theme.space[padding];

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: backgroundColorValue,
					borderRadius: borderRadiusValue,
					padding: paddingValue,
				},
			]}
		>
			{label && (
				<Typography
					label={label}
					color={labelColor}
					fontSize={FontSizeTokens.sm}
				/>
			)}
		</View>
	);
};
export default memo(ReplyChatCardBase);
export { ReplyChatCardBase };
