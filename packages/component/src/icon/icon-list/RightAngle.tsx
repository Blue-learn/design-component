import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function RightAngle(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 18 37'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M1 36V12.997C1 6.37 6.373 1 13 1h4'
				stroke={props.color}
				strokeLinecap='round'
			/>
		</Svg>
	);
}

export default RightAngle;
