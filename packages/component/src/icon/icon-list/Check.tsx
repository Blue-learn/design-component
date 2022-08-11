import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Check(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 14 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M4.551 12.48a1.482 1.482 0 01-1.05-.436L.327 8.871a.875.875 0 010-1.237.875.875 0 011.237 0L4.55 10.62l7.903-7.903a.875.875 0 011.237 0 .875.875 0 010 1.237l-8.09 8.09a1.482 1.482 0 01-1.05.435z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Check;
