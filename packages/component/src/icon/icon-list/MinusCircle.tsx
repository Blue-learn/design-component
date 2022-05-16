import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function MinusCircleIcon(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M10 0C4.49 0 0 4.49 0 10s4.49 10 10 10 10-4.49 10-10S15.51 0 10 0zm3.92 10.75h-8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8a.749.749 0 110 1.5z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default MinusCircleIcon;
