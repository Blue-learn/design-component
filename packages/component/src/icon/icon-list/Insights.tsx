import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Insights(props) {
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
				d='M6.5 11L6.5 21'
				stroke={props.color}
				strokeLinecap='round'
			/>
			<Path
				d='M10.5 4L10.5 21'
				stroke={props.color}
				strokeLinecap='round'
			/>
			<Path
				d='M14.5 15L14.5 21'
				stroke={props.color}
				strokeLinecap='round'
			/>
			<Path
				d='M18.5 8L18.5 21'
				stroke={props.color}
				strokeLinecap='round'
			/>
		</Svg>
	);
}

export default Insights;
