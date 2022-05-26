import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Info(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox="0 0 40 40"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M20 13.333v8.334m0 15c9.167 0 16.667-7.5 16.667-16.667 0-9.167-7.5-16.667-16.667-16.667-9.166 0-16.666 7.5-16.666 16.667 0 9.167 7.5 16.667 16.666 16.667zM19.99 26.667h.016"
				stroke={props.color}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export default Info;
