import React, { memo } from 'react';
import {
	ButtonTypeTokens,
	CardBaseProps,
	ColorTokens,
	ColorTokensMap,
	CornerRadiusTokens,
	SpaceTypeTokens,
} from '@blue-learn/schema';
import {
	ActivityIndicator,
	Pressable,
	StyleSheet,
	View,
	Text,
} from 'react-native';
import ThemeProvider from '@blue-learn/theme';
import QuoteSvg from '../../assets/quote.svg';
import Quote from '../../assets/quote.jsx';
import { Button } from '../button/Button';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		width: '50%',
		flexDirection: 'column',
	},
	indicator: {
		// position: 'absolute',
		// right: 8,
		marginLeft: 8,
	},
});

/**
 * Raw Component with Derived props + Theme
 */
const CardBase: React.FunctionComponent<
	CardBaseProps
> = ({
	onButtonPress,
	heading = '',
	description = '',
	headingColor = '#2D3748',
	descriptionColor = ColorTokens.Grey_400,
	loading = false,
	bgColor = ColorTokens.Grey_50,
	borderRadius = CornerRadiusTokens.BR1,
	padding = SpaceTypeTokens.XL,
	borderColor,
}) => {
	/**
	 * use type, size, buttonThemePros, colorMapping to full customise base component
	**/

	const theme = ThemeProvider.getTheme();

	const borderRadiusValue =
		theme.borderRadius[borderRadius];

	const borderColorValue =
		theme.colors[borderColor];

	const backgroundColorValue =
		theme.colors[bgColor];

	const paddingValue =
		theme.space[padding];

	const descBottomPadding =
		theme.space[SpaceTypeTokens.XL];
	
	const descTopPadding =
		theme.space[SpaceTypeTokens.MD];

	return (
		<View
			style={[
				styles.container,
				{
					backgroundColor: backgroundColorValue,
					borderRadius: borderRadiusValue,
					padding: paddingValue,
					borderColor: borderColorValue,
					borderWidth: borderColor ? 1 : 0,
					// shadowOffset: {
					// 	width: 1,
					// 	height: 2,
					// },
					// shadowOpacity: 0.3,
					// shadowRadius: 2,
				},
			]}
		>
			{Quote()}
			{(
				<Text
					style={{
						paddingTop: paddingValue,
						fontSize:16,
						color: headingColor,
						fontWeight: 600,
					}}
				>
					{heading || 'Add a Headline'}
				</Text>
			)}
			{(
				<Text
					style={{
						color: '#656A83',
						fontWeight: 400,
						fontSize: 14,
						paddingBottom: descBottomPadding,
						paddingTop: descTopPadding,
					}}
				>
					{description || 'Share your one-line description here.'}
				</Text>
			)}
			<Button
				label = {heading ? "Completed" : "Add Headline"}
				type = {heading ? ButtonTypeTokens.MediumOutline : ButtonTypeTokens.MediumSoftFilled}
			/>
			{loading && (
				<ActivityIndicator
					style={styles.indicator}
					animating
					color={descriptionColor}
				/>
			)}
		</View>
	);
};
export default memo(CardBase);
export { CardBase };
