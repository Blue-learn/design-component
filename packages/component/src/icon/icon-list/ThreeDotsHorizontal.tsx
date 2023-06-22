import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ThreeDotsHorizontal(props) {
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
				d='M6.5 12C6.5 10.8954 5.60457 10 4.5 10C3.39543 10 2.5 10.8954 2.5 12C2.5 13.1046 3.39543 14 4.5 14C5.60457 14 6.5 13.1046 6.5 12Z'
				fill={props.color}
			/>
			<Path
				d='M13.5 12C13.5 10.8954 12.6046 10 11.5 10C10.3954 10 9.5 10.8954 9.5 12C9.5 13.1046 10.3954 14 11.5 14C12.6046 14 13.5 13.1046 13.5 12Z'
				fill={props.color}
			/>
			<Path
				d='M20.5 12C20.5 10.8954 19.6046 10 18.5 10C17.3954 10 16.5 10.8954 16.5 12C16.5 13.1046 17.3954 14 18.5 14C19.6046 14 20.5 13.1046 20.5 12Z'
				fill={props.color}
			/>
		</Svg>
	);
}

export default ThreeDotsHorizontal;
