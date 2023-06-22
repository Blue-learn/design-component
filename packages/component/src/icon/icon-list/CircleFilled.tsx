import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

function CircleFilled(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Circle
				cx={6}
				cy={6}
				r={4}
				fill={props.color}
			/>
		</Svg>
	);
}

export default CircleFilled;
