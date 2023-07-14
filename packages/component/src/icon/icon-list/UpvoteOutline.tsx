import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function UpvoteOutline(props) {
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
				d='M10.711 4.49867C11.2846 3.50044 12.7154 3.50045 13.289 4.49867L21.0464 17.9987C21.624 19.004 20.8984 20.25 19.7573 20.25H4.24269C3.10165 20.25 2.37596 19.004 2.95364 17.9987L10.711 4.49867Z'
				stroke={props.color}
				strokeWidth={1.5}
			/>
		</Svg>
	);
}

export default UpvoteOutline;
