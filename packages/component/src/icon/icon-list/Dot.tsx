import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function DownArrow(props) {
	return (
		<Svg
			width={props.size / 2}
			height={props.size / 2}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Circle
				cx={10}
				cy={10}
				r={5}
				fill={props.color}
			/>
		</Svg>
	);
}

export default DownArrow;
