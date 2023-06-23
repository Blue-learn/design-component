import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DownvoteFilled(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M1.67593 6.53147L9.71643 20.4921C9.95367 20.9197 10.3057 21.2722 10.7326 21.5098C11.9956 22.2125 13.5883 21.7569 14.2901 20.4921L22.4495 6.32991C22.6796 5.93078 22.8005 5.47793 22.8 5.01706C22.7984 3.5701 21.6258 2.39844 20.181 2.40003L3.86212 2.40003L3.78892 2.40918C2.35834 2.42421 1.20513 3.58724 1.20025 5.01993C1.19231 5.56192 1.35911 6.09197 1.67593 6.53147Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default DownvoteFilled;
