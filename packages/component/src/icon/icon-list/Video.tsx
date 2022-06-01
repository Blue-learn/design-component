import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Video(props) {
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
				fillRule='evenodd'
				clipRule='evenodd'
				d='M6.113 4.5h5.792c2.422 0 4.113 1.669 4.113 4.06v6.88c0 2.391-1.69 4.06-4.113 4.06H6.113C3.691 19.5 2 17.831 2 15.44V8.56C2 6.17 3.691 4.5 6.113 4.5zm13.845 2.379c.439-.223.954-.2 1.373.064.419.263.669.72.669 1.22v7.675c0 .5-.25.957-.669 1.22a1.385 1.385 0 01-1.374.063l-1.481-.748a1.623 1.623 0 01-.888-1.457V9.083c0-.621.34-1.18.888-1.456l1.482-.748z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Video;
