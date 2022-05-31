import React from 'react';
import { Shimmer } from '../shimmer/Shimmer';

const ButtonShimmer: React.FunctionComponent =
	() => {
		return (
			<Shimmer
				height={48}
				width={'100%'}
				borderRadius={25}
			/>
		);
	};

export default ButtonShimmer;
