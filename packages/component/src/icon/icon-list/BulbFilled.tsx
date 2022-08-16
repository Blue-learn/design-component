import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function BulbFilled(props) {
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
				d='M8.464 15.536a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
				fill={props.color}
			/>
			<Path
				d='M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707'
				stroke={props.color}
				strokeWidth={1.25}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default BulbFilled;
