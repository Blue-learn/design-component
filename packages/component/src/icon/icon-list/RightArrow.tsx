import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

function RightArrow(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<G clipPath='url(#clip0_361_4990)'>
				<Path
					d='M5 11h11.86l-3.63-4.36a1.001 1.001 0 011.54-1.28l5 6c.034.048.064.098.09.15 0 .05 0 .08.07.13A1 1 0 0120 12a1 1 0 01-.07.36c0 .05 0 .08-.07.13a1.198 1.198 0 01-.09.15l-5 6a1 1 0 01-1.41.13.997.997 0 01-.13-1.41L16.86 13H5a1 1 0 010-2z'
					fill={props.color}
				/>
			</G>
		</Svg>
	);
}

export default RightArrow;
