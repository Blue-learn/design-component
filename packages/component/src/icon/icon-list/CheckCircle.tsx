import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CheckCircle(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 25 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M10.625 16.06l-3.75-3.75 1.06-1.06 2.69 2.69 5.689-5.69 1.061 1.061-6.75 6.75z'
				fill={props.color}
			/>
			<Path
				d='M12.125 1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21zm0 19.5a9 9 0 110-18 9 9 0 010 18z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default CheckCircle;
