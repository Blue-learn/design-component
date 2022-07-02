import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function Dot(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 8 8'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Circle
				cx={2}
				cy={4}
				r={1}
				fill={props.color}
			/>
			;
		</Svg>
	);
}

export default Dot;
