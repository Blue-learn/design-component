import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Bookmark(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 25 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M5.5 2.93h14a.25.25 0 01.25.25v17.348a.25.25 0 01-.366.221l-6.073-3.177a1.75 1.75 0 00-1.622 0l-6.073 3.177a.25.25 0 01-.366-.221V3.18a.25.25 0 01.25-.25z'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default Bookmark;
