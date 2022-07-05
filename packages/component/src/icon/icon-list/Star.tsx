import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Star(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 14 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M13.963 5.37a.743.743 0 00-.64-.51l-4.04-.368L7.683.752a.744.744 0 00-1.368 0l-1.598 3.74-4.041.367a.744.744 0 00-.423 1.302L3.31 8.84l-.901 3.967a.744.744 0 001.107.804L7 11.528l3.484 2.083a.744.744 0 001.107-.804l-.9-3.967 3.054-2.678a.744.744 0 00.219-.791z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Star;
