import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ThreeDot(props) {
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
				d='M12 6.5a2 2 0 100-4 2 2 0 000 4zM12 13.5a2 2 0 100-4 2 2 0 000 4zM12 20.5a2 2 0 100-4 2 2 0 000 4z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default ThreeDot;
