import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Clock(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M16.5 9c0 4.14-3.36 7.5-7.5 7.5-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5z'
				stroke={props.color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<Path
				d='M11.783 11.385L9.458 9.998c-.405-.24-.735-.818-.735-1.29V5.633'
				stroke={props.color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default Clock;
