import React from 'react';
import { Text } from 'react-native';
import { Shimmer } from '../shimmer/Shimmer';

const CardShimmer: React.FunctionComponent =
	() => {
		return (
			<Shimmer
				height={48}
				width={'100%'}
				borderRadius={25}
			/>
		);
	};

export default CardShimmer;
