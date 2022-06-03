import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Gallery(props) {
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
				d='M3.08 19.011l-.02.02c-.27-.59-.44-1.26-.51-2 .07.73.26 1.39.53 1.98zm6.421-8.63a2.38 2.38 0 100-4.76 2.38 2.38 0 000 4.76z'
				fill={props.color}
			/>
			<Path
				d='M16.69 2H8.31C4.67 2 2.5 4.17 2.5 7.81v8.38c0 1.09.19 2.04.56 2.84.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22.5 4.17 20.33 2 16.69 2zm4.18 10.5c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-3.74 2.51C4.13 17.6 4 16.95 4 16.19V7.81C4 4.99 5.49 3.5 8.31 3.5h8.38C19.51 3.5 21 4.99 21 7.81v4.8l-.13-.11z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Gallery;
