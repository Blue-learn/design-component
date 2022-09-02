import {
	BorderRadiusTokens,
	ColorTokens,
} from '@blue-learn/schema';
import React from 'react';
import { Shimmer } from '../shimmer/Shimmer';

const DiscussionCardShimmer: React.FunctionComponent =
	() => {
		return (
			<Shimmer
				height={180}
				width={'100%'}
				borderRadius={BorderRadiusTokens.BR1}
				backgroundColor={ColorTokens.Grey_600}
			/>
		);
	};

export default DiscussionCardShimmer;
