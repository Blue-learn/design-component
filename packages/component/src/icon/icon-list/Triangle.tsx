import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Triangle(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M6 2L10.5 10H1.5L6 2Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Triangle;
