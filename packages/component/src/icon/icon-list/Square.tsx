import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

function Square(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Rect
				x={2}
				y={2}
				width={8}
				height={8}
				fill={props.color}
			/>
		</Svg>
	);
}

export default Square;
