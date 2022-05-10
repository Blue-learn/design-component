import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function AttchmentIcon(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 19 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M6.668 19.048a6.228 6.228 0 01-4.43-1.88 6 6 0 01-.22-8.49l7.36-7.43a4.11 4.11 0 013-1.2 4.48 4.48 0 013.19 1.35 4.36 4.36 0 01.15 6.13l-7.4 7.43a2.541 2.541 0 01-1.81.75 2.72 2.72 0 01-1.95-.82 2.68 2.68 0 01-.08-3.77l6.83-6.86a1 1 0 011.37 1.41l-6.83 6.86a.68.68 0 00.08.95.78.78 0 00.53.23.558.558 0 00.4-.16l7.39-7.43a2.36 2.36 0 00-.15-3.31 2.38 2.38 0 00-3.27-.15l-7.39 7.39a4 4 0 00.22 5.67 4.22 4.22 0 003 1.29 3.669 3.669 0 002.61-1.06l7.39-7.43a1 1 0 111.42 1.41l-7.39 7.43a5.65 5.65 0 01-4.02 1.69z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default AttchmentIcon;
