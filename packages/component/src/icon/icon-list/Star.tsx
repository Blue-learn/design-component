import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Star(props) {
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
				d='M21.948 9.179a1.06 1.06 0 00-.915-.724l-5.773-.52-2.282-5.295A1.063 1.063 0 0012 2c-.427 0-.81.251-.977.64L8.74 7.936l-5.774.52a1.063 1.063 0 00-.915.723 1.05 1.05 0 00.31 1.12l4.365 3.794L5.44 19.71c-.094.413.067.84.413 1.088a1.065 1.065 0 001.169.052L12 17.9l4.977 2.95a1.07 1.07 0 001.17-.05 1.05 1.05 0 00.413-1.089l-1.287-5.618 4.365-3.794a1.05 1.05 0 00.31-1.12z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Star;
