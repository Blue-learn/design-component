import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DownvoteFilled(props) {
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
				d='M13.289 19.5013C12.7154 20.4996 11.2846 20.4996 10.711 19.5013L2.95364 6.00134C2.37596 4.996 3.10165 3.75 4.24269 3.75H19.7573C20.8984 3.75 21.624 4.996 21.0464 6.00134L13.289 19.5013Z'
				fill={props.color}
				stroke={props.color}
				strokeWidth={1.5}
			/>
		</Svg>
	);
}

export default DownvoteFilled;
