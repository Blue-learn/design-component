import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Link(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 15 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M8.317 5.933a2.333 2.333 0 00-3.3 0L2.683 8.267a2.333 2.333 0 003.3 3.3l.643-.643m-.443-2.857a2.333 2.333 0 003.3 0l2.334-2.334a2.333 2.333 0 00-3.3-3.3l-.642.642'
				stroke={props.color}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default Link;
