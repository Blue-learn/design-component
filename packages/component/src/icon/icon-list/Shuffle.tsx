import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Shuffle(props) {
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
				d='M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5'
				stroke={props.color}
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default Shuffle;
