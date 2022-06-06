import React, { memo } from 'react';
import {
	ColorTokens,
	FontSizeTokens,
	DiscussionCardProps,
} from '@blue-learn/schema';
import { StyleSheet } from 'react-native';
import Stack from '../stack/Stack';
import Typography from '../typography/Typography';

const styles = StyleSheet.create({});

/**
 * Raw Component with Derived props + Theme
 */
const DiscussionCardBase: React.FunctionComponent<
	DiscussionCardProps
> = ({
	label,
	avatarUrl = 'https://reactnative.dev/img/tiny_logo.png',
	nameText = 'lorem ipsum',
	onPress,
}) => {
	return (
		<Stack>
			<Typography
				label={label}
				color={ColorTokens.Grey_300}
				fontSize={FontSizeTokens.xs}
			/>
		</Stack>
	);
};

export default memo(DiscussionCardBase);
export { DiscussionCardBase };
