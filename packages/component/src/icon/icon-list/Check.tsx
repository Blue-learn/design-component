import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Check(props) {
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
				d='M20 6L9 17L4 12'
				stroke={props.color}
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</Svg>
	);
}

export default Check;
