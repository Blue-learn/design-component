import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SeacrchIcon(props) {
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
				d='M17.78 16.72l-4.477-4.477a7.512 7.512 0 10-1.06 1.06l4.476 4.477a.75.75 0 001.06-1.06zM7.5 13.5a6 6 0 116-6 6.007 6.007 0 01-6 6z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default SeacrchIcon;
