import React, { memo } from 'react';
import {
	View,
	StyleSheet,
	Image,
} from 'react-native';
import {
	ButtonTypeTokens,
	ColorTokens,
	ColorTokensMap,
	FontDecorationToken,
	FontFamilyTokensMap,
	FontSizeTokens,
	FontTransformToken,
	FontWeightTokens,
	SpaceTypeTokens,
	SpaceTypeTokensMap,
	TopBarBaseProps,
} from '@blue-learn/schema';
import Typography from '../typography/Typography';
import ThemeProvider from '@blue-learn/theme';
import Button from '../button/Button';

/**
 * Raw Component with Derived props + Theme
 */

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	rowContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	icon: {
		height: 20,
		width: 20,
		backgroundColor: 'blue',
	},
	avatar: {
		height: 40,
		width: 40,
		borderRadius: 20,
	},
});

const TopBarBase: React.FunctionComponent<
	TopBarBaseProps
> = ({
	label = 'BlueLearn',
	nestedTab = false,
	leftIcon = false,
	rightIcon1 = false,
	rightIcon2 = false,
	cta = false,
	avatar = false,
	subTitle = false,
	subTitleLabel = '1 online',
	ctaLabel = 'Post',
	avatarUrl = 'https://reactnative.dev/img/tiny_logo.png',
}) => {
	/**
	 * use fontSize,fontWeight to full customise base component
	 * */

	const theme = ThemeProvider.getTheme();
	const colorMapping: ColorTokensMap =
		theme.colors;

	const spaceTokenMapping: SpaceTypeTokensMap =
		theme.spaces;

	return (
		<View>
			<View style={[styles.row]}>
				<View style={styles.rowContainer}>
					{leftIcon ? (
						<View
							style={[
								styles.icon,
								{
									marginRight:
										spaceTokenMapping[SpaceTypeTokens.XL],
								},
							]}
						/>
					) : null}
					{avatar ? (
						<Image
							style={[
								styles.avatar,
								{
									marginRight:
										spaceTokenMapping[SpaceTypeTokens.MD],
								},
							]}
							source={{
								uri: avatarUrl,
							}}
						/>
					) : null}
					<View>
						<Typography
							label={label}
							fontSize={FontSizeTokens['2xl']}
							fontWeight={FontWeightTokens.bold}
						/>
						{subTitle ? (
							<Typography
								color={ColorTokens.Success_100}
								fontWeight={FontWeightTokens['semi-bold']}
								label={'● ' + subTitleLabel}
								fontSize={FontSizeTokens['2xs']}
							/>
						) : null}
					</View>
				</View>

				<View style={styles.row}>
					{cta ? (
						<Button
							label={ctaLabel}
							type={ButtonTypeTokens.SmallSoftFilled}
						/>
					) : null}
					{rightIcon1 ? (
						<View
							style={[
								styles.icon,
								{
									marginHorizontal:
										spaceTokenMapping[SpaceTypeTokens.MD],
								},
							]}
						/>
					) : null}
					{rightIcon2 ? (
						<View
							style={[
								styles.icon,
								{
									marginHorizontal:
										spaceTokenMapping[SpaceTypeTokens.MD],
								},
							]}
						/>
					) : null}
				</View>
			</View>
			{nestedTab ? (
				<View
					style={{
						marginVertical:
							spaceTokenMapping[SpaceTypeTokens.XL],
					}}
				>
					<Typography
						label={'nested tabs'}
						textTransform={
							FontTransformToken.capitalize
						}
					/>
				</View>
			) : null}
		</View>
	);
};
export default memo(TopBarBase);
export { TopBarBase };