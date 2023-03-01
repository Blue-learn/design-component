import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Check2(props) {
	return (
		<Svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M7.673 17.694a1.872 1.872 0 01-1.326-.55L2.34 13.138a1.105 1.105 0 011.562-1.563l3.772 3.772 9.979-9.979a1.105 1.105 0 011.562 1.563L9 17.144a1.874 1.874 0 01-1.326.55zM11.144 19.28a1.517 1.517 0 001.655-.33l8.272-8.27a.894.894 0 10-1.265-1.266l-8.081 8.081-1.07-.937-1.24 1.257 1.236 1.136c.141.14.308.253.493.33z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default Check2;
