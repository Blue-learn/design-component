import {
	BorderRadiusTokens,
	ColorTokens,
} from '@blue-learn/schema';
import React from 'react';
import { Shimmer } from '../shimmer/Shimmer';

const FeedCardShimmer: React.FunctionComponent =
	() => {
		return (
			<Shimmer
				height={250}
				width={'100%'}
				borderRadius={BorderRadiusTokens.BR1}
				backgroundColor={ColorTokens.Grey_200}
			/>
		);
	};

export default FeedCardShimmer;
