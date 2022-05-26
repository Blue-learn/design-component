import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Lighting(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox="0 0 19 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M10 6.75h6L8.5 18v-6.75H3.25L10 0v6.75zm-1.5 1.5V5.415L5.899 9.75H10v3.296l3.197-4.796H8.5z"
				fill={props.color}
			/>
		</Svg>
	);
}

export default Lighting;
