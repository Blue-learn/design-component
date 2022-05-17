import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Check2(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M20 6.5l-11 11-5-5'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default Check2;
