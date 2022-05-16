import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ThreeDots(props) {
	return (
	<Svg
		width={props.size}
		height={props.size}
		viewBox="0 0 4 19"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<Path
			d="M2 4.5a2 2 0 100-4 2 2 0 000 4zM2 11.5a2 2 0 100-4 2 2 0 000 4zM2 18.5a2 2 0 100-4 2 2 0 000 4z"
			fill={props.color}
		/>
	</Svg>
);
}

export default ThreeDots;
