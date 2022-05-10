import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CrossIcon(props) {
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
				d='M17.006 6.67l-10 10M17.006 16.67l-10-10'
				stroke={props.color}
				strokeWidth={1.5}
				strokeLinecap='round'
			/>
		</Svg>
	);
}

export default CrossIcon;
